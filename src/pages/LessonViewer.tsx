import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseModules, getLessonById } from "@/data/courseContent";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import ContentRenderer from "@/components/curso/ContentRenderer";
import VoiceControl from "@/components/curso/VoiceControl";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Home
} from "lucide-react";
import { toast } from "sonner";

const LessonViewer = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { progress, markLessonComplete, addLessonTime } = useCourseProgress();
  const [timeSpent, setTimeSpent] = useState(0);

  // Get lesson data
  const lessonData = lessonId ? getLessonById(lessonId) : undefined;

  if (!lessonData || !moduleId || !lessonId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Aula não encontrada</h2>
          <Button onClick={() => navigate("/curso")}>Voltar ao Curso</Button>
        </div>
      </div>
    );
  }

  const { module, lesson } = lessonData;
  const lessonProgress = progress?.lessonsProgress[lessonId];
  const isCompleted = lessonProgress?.completed || false;

  // Find current lesson index and navigation
  const currentLessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
  const hasNext = currentLessonIndex < module.lessons.length - 1;
  const hasPrevious = currentLessonIndex > 0;

  const nextLesson = hasNext ? module.lessons[currentLessonIndex + 1] : null;
  const previousLesson = hasPrevious ? module.lessons[currentLessonIndex - 1] : null;

  // Time tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
      // Save every 30 seconds
      if (timeSpent > 0 && timeSpent % 30 === 0) {
        addLessonTime(lessonId, 1);
      }
    }, 60000); // Every minute

    return () => clearInterval(interval);
  }, [lessonId, timeSpent, addLessonTime]);

  const handleMarkComplete = () => {
    if (!isCompleted) {
      markLessonComplete(lessonId);
      toast.success("Aula concluída!", {
        description: "Seu progresso foi salvo automaticamente.",
      });
    }
  };

  const handleNext = () => {
    if (nextLesson) {
      navigate(`/curso/modulo/${moduleId}/aula/${nextLesson.id}`);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (previousLesson) {
      navigate(`/curso/modulo/${moduleId}/aula/${previousLesson.id}`);
      window.scrollTo(0, 0);
    }
  };

  // Extract lesson text for voice reading
  const lessonText = useMemo(() => {
    const texts: string[] = [];
    texts.push(`Módulo ${module.number}: ${module.title}`);
    texts.push(`Aula: ${lesson.title}`);
    texts.push(lesson.description);

    lesson.sections.forEach((section) => {
      texts.push(section.content);
      if (section.metadata?.items) {
        texts.push(...section.metadata.items);
      }
    });

    return texts.join('. ');
  }, [lesson, module]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/curso")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Curso
            </Button>

            <div className="flex items-center space-x-2">
              <Badge variant="outline">
                Módulo {module.number}
              </Badge>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">
                Aula {currentLessonIndex + 1} de {module.lessons.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="h-5 w-5 text-ms-blue" />
                  <span className="text-sm text-gray-600">{module.title}</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-2">
                  {lesson.title}
                </CardTitle>
                <p className="text-gray-600">{lesson.description}</p>

                <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {lesson.estimatedMinutes} minutos
                  </span>
                  {isCompleted && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Concluída
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Progresso no Módulo</span>
                <span className="text-xs font-medium">
                  {Math.round(((currentLessonIndex + (isCompleted ? 1 : 0)) / module.lessons.length) * 100)}%
                </span>
              </div>
              <Progress
                value={((currentLessonIndex + (isCompleted ? 1 : 0)) / module.lessons.length) * 100}
                className="h-2"
              />
            </div>
          </CardHeader>

          <CardContent className="prose max-w-none">
            {/* Voice Control */}
            <VoiceControl text={lessonText} />

            <ContentRenderer sections={lesson.sections} />

            {/* Mark as Complete Button */}
            {!isCompleted && (
              <div className="mt-8 pt-6 border-t">
                <Button
                  size="lg"
                  onClick={handleMarkComplete}
                  className="w-full md:w-auto"
                >
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Marcar como Concluída
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={!hasPrevious}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Aula Anterior
          </Button>

          <Button
            onClick={() => navigate("/curso")}
            variant="ghost"
          >
            <Home className="h-4 w-4 mr-2" />
            Menu do Curso
          </Button>

          {hasNext ? (
            <Button onClick={handleNext}>
              Próxima Aula
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/curso")}
              variant="outline"
            >
              Concluir Módulo
            </Button>
          )}
        </div>

        {/* Credits Section */}
        <Card className="mt-8 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="/calcpvt/logo.png"
                alt="Logo"
                className="h-16 w-16 object-contain"
              />
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-blue-900">Renato Gracie</h3>
                <p className="text-sm text-gray-700 font-semibold">Leiloeiro Oficial</p>
                <p className="text-xs text-gray-600 mt-1">Cadastrado no Siajus desde 2007</p>
                <p className="text-xs text-gray-600">Homologado no TJPE - JFPE e TRT6</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonViewer;
