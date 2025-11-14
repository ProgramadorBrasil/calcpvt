import { useState, useEffect, useCallback } from 'react';
import { CourseProgress, LessonProgress, ModuleProgress, QuizAttempt, Achievement } from '../types/course.types';
import { courseModules } from '../data/courseContent';

const STORAGE_KEY = 'tjpe_course_progress';

// Initialize default progress
const createDefaultProgress = (): CourseProgress => {
  const modulesProgress: Record<string, ModuleProgress> = {};
  const lessonsProgress: Record<string, LessonProgress> = {};

  courseModules.forEach((module) => {
    modulesProgress[module.id] = {
      moduleId: module.id,
      lessonsCompleted: 0,
      totalLessons: module.lessons.length,
      quizBestScore: 0,
      quizAttempts: 0,
      quizPassed: false,
      completed: false,
      timeSpent: 0,
    };

    module.lessons.forEach((lesson) => {
      lessonsProgress[lesson.id] = {
        lessonId: lesson.id,
        completed: false,
        timeSpent: 0,
        lastAccessedAt: new Date(),
        bookmarked: false,
      };
    });
  });

  return {
    modulesProgress,
    lessonsProgress,
    quizAttempts: [],
    achievements: [],
    totalTimeSpent: 0,
    startedAt: new Date(),
    lastAccessedAt: new Date(),
    completionPercentage: 0,
    certificateIssued: false,
  };
};

export const useCourseProgress = () => {
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [loading, setLoading] = useState(true);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        parsed.startedAt = new Date(parsed.startedAt);
        parsed.lastAccessedAt = new Date(parsed.lastAccessedAt);
        if (parsed.certificateIssuedAt) {
          parsed.certificateIssuedAt = new Date(parsed.certificateIssuedAt);
        }
        setProgress(parsed);
      } else {
        const defaultProgress = createDefaultProgress();
        setProgress(defaultProgress);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
      }
    } catch (error) {
      console.error('Error loading course progress:', error);
      const defaultProgress = createDefaultProgress();
      setProgress(defaultProgress);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (progress && !loading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Error saving course progress:', error);
      }
    }
  }, [progress, loading]);

  // Calculate completion percentage
  const calculateCompletionPercentage = useCallback((updatedProgress: CourseProgress): number => {
    const totalLessons = courseModules.reduce((sum, module) => sum + module.lessons.length, 0);
    const completedLessons = Object.values(updatedProgress.lessonsProgress).filter(
      (lesson) => lesson.completed
    ).length;
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  }, []);

  // Mark lesson as completed
  const markLessonComplete = useCallback((lessonId: string) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      const updatedLessonsProgress = { ...prev.lessonsProgress };
      if (updatedLessonsProgress[lessonId]) {
        updatedLessonsProgress[lessonId] = {
          ...updatedLessonsProgress[lessonId],
          completed: true,
          completedAt: new Date(),
        };
      }

      // Update module progress
      const module = courseModules.find((m) => m.lessons.some((l) => l.id === lessonId));
      const updatedModulesProgress = { ...prev.modulesProgress };

      if (module) {
        const completedCount = module.lessons.filter(
          (lesson) => updatedLessonsProgress[lesson.id]?.completed
        ).length;

        updatedModulesProgress[module.id] = {
          ...updatedModulesProgress[module.id],
          lessonsCompleted: completedCount,
          completed: completedCount === module.lessons.length,
          completedAt: completedCount === module.lessons.length ? new Date() : undefined,
        };
      }

      const updated: CourseProgress = {
        ...prev,
        lessonsProgress: updatedLessonsProgress,
        modulesProgress: updatedModulesProgress,
        lastAccessedAt: new Date(),
      };

      updated.completionPercentage = calculateCompletionPercentage(updated);

      return updated;
    });
  }, [progress, calculateCompletionPercentage]);

  // Add quiz attempt and update best score
  const addQuizAttempt = useCallback((attempt: QuizAttempt) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      const updatedAttempts = [...prev.quizAttempts, attempt];
      const updatedModulesProgress = { ...prev.modulesProgress };

      if (updatedModulesProgress[attempt.moduleId]) {
        const moduleAttempts = updatedAttempts.filter((a) => a.moduleId === attempt.moduleId);
        const bestScore = Math.max(...moduleAttempts.map((a) => a.score));
        const passed = attempt.score >= 70; // 70% is passing

        updatedModulesProgress[attempt.moduleId] = {
          ...updatedModulesProgress[attempt.moduleId],
          quizBestScore: bestScore,
          quizAttempts: moduleAttempts.length,
          quizPassed: passed || updatedModulesProgress[attempt.moduleId].quizPassed,
        };
      }

      return {
        ...prev,
        quizAttempts: updatedAttempts,
        modulesProgress: updatedModulesProgress,
        lastAccessedAt: new Date(),
      };
    });
  }, [progress]);

  // Add time to lesson
  const addLessonTime = useCallback((lessonId: string, minutes: number) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      const updatedLessonsProgress = { ...prev.lessonsProgress };
      if (updatedLessonsProgress[lessonId]) {
        updatedLessonsProgress[lessonId] = {
          ...updatedLessonsProgress[lessonId],
          timeSpent: (updatedLessonsProgress[lessonId].timeSpent || 0) + minutes,
          lastAccessedAt: new Date(),
        };
      }

      // Update module time
      const module = courseModules.find((m) => m.lessons.some((l) => l.id === lessonId));
      const updatedModulesProgress = { ...prev.modulesProgress };

      if (module) {
        const moduleTime = module.lessons.reduce(
          (sum, lesson) => sum + (updatedLessonsProgress[lesson.id]?.timeSpent || 0),
          0
        );

        updatedModulesProgress[module.id] = {
          ...updatedModulesProgress[module.id],
          timeSpent: moduleTime,
        };
      }

      return {
        ...prev,
        lessonsProgress: updatedLessonsProgress,
        modulesProgress: updatedModulesProgress,
        totalTimeSpent: prev.totalTimeSpent + minutes,
        lastAccessedAt: new Date(),
      };
    });
  }, [progress]);

  // Toggle bookmark
  const toggleBookmark = useCallback((lessonId: string) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      const updatedLessonsProgress = { ...prev.lessonsProgress };
      if (updatedLessonsProgress[lessonId]) {
        updatedLessonsProgress[lessonId] = {
          ...updatedLessonsProgress[lessonId],
          bookmarked: !updatedLessonsProgress[lessonId].bookmarked,
        };
      }

      return {
        ...prev,
        lessonsProgress: updatedLessonsProgress,
        lastAccessedAt: new Date(),
      };
    });
  }, [progress]);

  // Save note
  const saveNote = useCallback((lessonId: string, note: string) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      const updatedLessonsProgress = { ...prev.lessonsProgress };
      if (updatedLessonsProgress[lessonId]) {
        updatedLessonsProgress[lessonId] = {
          ...updatedLessonsProgress[lessonId],
          notes: note,
        };
      }

      return {
        ...prev,
        lessonsProgress: updatedLessonsProgress,
        lastAccessedAt: new Date(),
      };
    });
  }, [progress]);

  // Unlock achievement
  const unlockAchievement = useCallback((achievement: Achievement) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      // Check if already unlocked
      if (prev.achievements.some((a) => a.code === achievement.code)) {
        return prev;
      }

      return {
        ...prev,
        achievements: [...prev.achievements, { ...achievement, unlocked: true, unlockedAt: new Date() }],
        lastAccessedAt: new Date(),
      };
    });
  }, [progress]);

  // Issue certificate
  const issueCertificate = useCallback((certificateNumber: string) => {
    if (!progress) return;

    setProgress((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        certificateIssued: true,
        certificateIssuedAt: new Date(),
        certificateNumber,
        lastAccessedAt: new Date(),
      };
    });
  }, [progress]);

  // Reset progress (for testing or user request)
  const resetProgress = useCallback(() => {
    const defaultProgress = createDefaultProgress();
    setProgress(defaultProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
  }, []);

  // Export progress as JSON
  const exportProgress = useCallback((): string => {
    return JSON.stringify(progress, null, 2);
  }, [progress]);

  // Import progress from JSON
  const importProgress = useCallback((jsonData: string) => {
    try {
      const imported = JSON.parse(jsonData);
      setProgress(imported);
      localStorage.setItem(STORAGE_KEY, jsonData);
      return true;
    } catch (error) {
      console.error('Error importing progress:', error);
      return false;
    }
  }, []);

  return {
    progress,
    loading,
    markLessonComplete,
    addQuizAttempt,
    addLessonTime,
    toggleBookmark,
    saveNote,
    unlockAchievement,
    issueCertificate,
    resetProgress,
    exportProgress,
    importProgress,
  };
};
