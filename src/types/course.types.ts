// Types for the TJPE Judicial Auction Course

export type ContentSectionType =
  | 'text'
  | 'legal-text'
  | 'callout'
  | 'case-study'
  | 'checklist'
  | 'exercise'
  | 'flowchart';

export type CalloutType = 'warning' | 'tip' | 'error' | 'info' | 'success';

export interface ContentSection {
  type: ContentSectionType;
  content: string;
  metadata?: {
    calloutType?: CalloutType;
    legalReference?: string;
    title?: string;
    items?: string[];
    [key: string]: any;
  };
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
  estimatedMinutes: number;
  resources?: Resource[];
  order: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number; // percentage (default 70)
  timeLimit?: number; // minutes, optional
}

export interface Exercise {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  type: 'edital-analysis' | 'matricula-check' | 'calculation' | 'checklist' | 'timeline';
  content: any; // Specific to exercise type
  solution?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'checklist' | 'template';
  url?: string;
  generateOnDemand?: boolean;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  quiz?: Quiz;
  estimatedMinutes: number;
  prerequisites?: string[]; // IDs of required modules
  locked: boolean;
  order: number;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  condition: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  moduleId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  answers: Record<string, string>; // questionId -> selectedOptionId
  attemptedAt: Date;
  completedAt?: Date;
  passed: boolean;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: Date;
  timeSpent: number; // minutes
  lastAccessedAt: Date;
  notes?: string;
  bookmarked: boolean;
}

export interface ModuleProgress {
  moduleId: string;
  lessonsCompleted: number;
  totalLessons: number;
  quizBestScore?: number;
  quizAttempts: number;
  quizPassed: boolean;
  completed: boolean;
  completedAt?: Date;
  timeSpent: number; // minutes
}

export interface CourseProgress {
  userId?: string; // null for anonymous users
  modulesProgress: Record<string, ModuleProgress>; // moduleId -> progress
  lessonsProgress: Record<string, LessonProgress>; // lessonId -> progress
  quizAttempts: QuizAttempt[];
  achievements: Achievement[];
  totalTimeSpent: number; // minutes
  currentLessonId?: string;
  startedAt: Date;
  lastAccessedAt: Date;
  completionPercentage: number;
  certificateIssued: boolean;
  certificateIssuedAt?: Date;
  certificateNumber?: string;
}

export interface Certificate {
  id: string;
  userId: string;
  certificateNumber: string;
  studentName: string;
  issuedAt: Date;
  completionDate: Date;
  totalHours: number;
  averageQuizScore: number;
  modules: string[]; // module titles
  qrCodeUrl?: string;
  verificationUrl?: string;
}

export interface CourseLanding {
  title: string;
  subtitle: string;
  description: string;
  totalModules: number;
  estimatedHours: number;
  objectives: string[];
  audience: string[];
  requirements: string[];
  outcomes: string[];
  testimonials?: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  text: string;
  rating: number;
  date: Date;
}

// State types for UI components
export interface CourseNavigationState {
  currentModuleId?: string;
  currentLessonId?: string;
  sidebarCollapsed: boolean;
  showProgressModal: boolean;
}

// Sync types for cloud storage
export interface ProgressSyncData {
  localProgress: CourseProgress;
  cloudProgress?: CourseProgress;
  lastSyncedAt?: Date;
  syncStatus: 'idle' | 'syncing' | 'error' | 'success';
  conflictResolution?: 'local' | 'cloud' | 'merge';
}
