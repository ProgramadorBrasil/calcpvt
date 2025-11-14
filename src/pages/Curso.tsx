import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { courseLanding, courseModules } from "../data/courseContent";
import { useCourseProgress } from "../hooks/useCourseProgress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VoiceControl from "@/components/curso/VoiceControl";
import {
  GraduationCap,
  BookOpen,
  Clock,
  CheckCircle2,
  Award,
  Target,
  Users,
  FileText,
  TrendingUp
} from "lucide-react";

const Curso = () => {
  const navigate = useNavigate();
  const { progress, loading } = useCourseProgress();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ms-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando curso...</p>
        </div>
      </div>
    );
  }

  const totalModules = courseModules.length;
  const completedModules = Object.values(progress?.modulesProgress || {}).filter(m => m.completed).length;
  const totalHours = Math.round(courseModules.reduce((sum, m) => sum + m.estimatedMinutes, 0) / 60);

  // Create pitch text for voice reading
  const pitchText = useMemo(() => {
    const texts: string[] = [];
    texts.push(`Bem-vindo ao ${courseLanding.title}.`);
    texts.push(courseLanding.description);
    texts.push(`Este curso possui ${totalModules} módulos com duração total de aproximadamente ${totalHours} horas.`);
    texts.push("Objetivos do curso:");
    texts.push(...courseLanding.objectives.map((obj, idx) => `${idx + 1}. ${obj}`));
    texts.push("Público-alvo:");
    texts.push(...courseLanding.audience.map((aud, idx) => `${idx + 1}. ${aud}`));
    texts.push("O que você vai aprender:");
    texts.push(...courseLanding.outcomes.map((outcome, idx) => `${idx + 1}. ${outcome}`));
    texts.push("Comece agora mesmo sua jornada de aprendizado!");
    return texts.join('. ');
  }, [totalModules, totalHours]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/")}>
                ← Voltar
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-ms-blue flex items-center">
                  <GraduationCap className="mr-2 h-8 w-8" />
                  {courseLanding.title}
                </h1>
                <p className="text-gray-600 mt-1">{courseLanding.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {progress && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Progresso Geral
                </span>
                <span className="text-sm font-bold text-ms-blue">
                  {progress.completionPercentage}%
                </span>
              </div>
              <Progress value={progress.completionPercentage} className="h-2" />
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>{completedModules} de {totalModules} módulos concluídos</span>
                <span>{Math.round(progress.totalTimeSpent / 60)}h de estudo</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="visao-geral" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
            <TabsTrigger value="modulos">Módulos do Curso</TabsTrigger>
            <TabsTrigger value="progresso">Meu Progresso</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="visao-geral" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sobre o Curso</CardTitle>
                <CardDescription>{courseLanding.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Voice Control for Course Overview */}
                <VoiceControl text={pitchText} />
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-ms-blue" />
                    <div>
                      <p className="text-sm text-gray-600">Módulos</p>
                      <p className="text-2xl font-bold text-ms-blue">{totalModules}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <Clock className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duração</p>
                      <p className="text-2xl font-bold text-purple-600">{totalHours}h</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Certificado</p>
                      <p className="text-lg font-bold text-green-600">Sim</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Target className="mr-2 h-5 w-5 text-ms-blue" />
                    Objetivos do Curso
                  </h3>
                  <ul className="space-y-2">
                    {courseLanding.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-ms-blue" />
                    Público-Alvo
                  </h3>
                  <ul className="space-y-2">
                    {courseLanding.audience.map((aud, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-ms-blue mr-2">•</span>
                        <span className="text-gray-700">{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-ms-blue" />
                    O que você vai aprender
                  </h3>
                  <ul className="space-y-2">
                    {courseLanding.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-ms-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Button
                    size="lg"
                    className="w-full md:w-auto"
                    onClick={() => {
                      const firstModule = courseModules[0];
                      if (firstModule?.lessons[0]) {
                        navigate(`/curso/modulo/${firstModule.id}/aula/${firstModule.lessons[0].id}`);
                      }
                    }}
                  >
                    Começar Curso Agora
                    <GraduationCap className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="modulos" className="space-y-4">
            <div className="grid gap-4">
              {courseModules.map((module) => {
                const moduleProgress = progress?.modulesProgress[module.id];
                const isCompleted = moduleProgress?.completed || false;
                const progressPercent = moduleProgress
                  ? Math.round((moduleProgress.lessonsCompleted / moduleProgress.totalLessons) * 100)
                  : 0;

                return (
                  <Card key={module.id} className={isCompleted ? "border-green-500" : ""}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant={isCompleted ? "default" : "outline"}>
                              Módulo {module.number}
                            </Badge>
                            {isCompleted && (
                              <Badge variant="default" className="bg-green-500">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Concluído
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <CardDescription className="mt-2">{module.description}</CardDescription>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <span className="flex items-center">
                              <FileText className="h-4 w-4 mr-1" />
                              {module.lessons.length} aulas
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {module.estimatedMinutes} min
                            </span>
                          </div>
                        </div>
                      </div>
                      {!isCompleted && progressPercent > 0 && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Progresso</span>
                            <span className="text-xs font-medium">{progressPercent}%</span>
                          </div>
                          <Progress value={progressPercent} className="h-1.5" />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      {module.lessons.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="lessons">
                            <AccordionTrigger>
                              Ver Aulas ({module.lessons.length})
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2">
                                {module.lessons.map((lesson) => {
                                  const lessonProgress = progress?.lessonsProgress[lesson.id];
                                  const lessonCompleted = lessonProgress?.completed || false;

                                  return (
                                    <div
                                      key={lesson.id}
                                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                      <div className="flex items-center space-x-3 flex-1">
                                        {lessonCompleted ? (
                                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        ) : (
                                          <div className="h-5 w-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                                        )}
                                        <div>
                                          <p className="font-medium text-sm">{lesson.title}</p>
                                          <p className="text-xs text-gray-500">{lesson.estimatedMinutes} min</p>
                                        </div>
                                      </div>
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => navigate(`/curso/modulo/${module.id}/aula/${lesson.id}`)}
                                      >
                                        {lessonCompleted ? "Revisar" : "Iniciar"}
                                      </Button>
                                    </div>
                                  );
                                })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <p className="text-sm text-gray-500 italic">
                          Conteúdo em desenvolvimento
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progresso" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas de Aprendizado</CardTitle>
                <CardDescription>Acompanhe seu progresso no curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Módulos Concluídos</h4>
                      <p className="text-3xl font-bold text-ms-blue">
                        {completedModules} / {totalModules}
                      </p>
                      <Progress
                        value={(completedModules / totalModules) * 100}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tempo Total de Estudo</h4>
                      <p className="text-3xl font-bold text-purple-600">
                        {Math.round((progress?.totalTimeSpent || 0) / 60)}h {((progress?.totalTimeSpent || 0) % 60)}min
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Conclusão Geral</h4>
                      <p className="text-3xl font-bold text-green-600">
                        {progress?.completionPercentage || 0}%
                      </p>
                      <Progress
                        value={progress?.completionPercentage || 0}
                        className="mt-2"
                      />
                    </div>
                    {progress?.certificateIssued && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Award className="h-6 w-6 text-green-600" />
                          <div>
                            <p className="font-semibold text-green-800">Certificado Emitido!</p>
                            <p className="text-sm text-green-600">
                              Nº {progress.certificateNumber}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          Download Certificado
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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

export default Curso;
