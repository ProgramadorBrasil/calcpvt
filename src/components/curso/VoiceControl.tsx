import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { Volume2, VolumeX, Play, Pause, Square, Gauge, Subtitles } from "lucide-react";
import { toast } from "sonner";

interface VoiceControlProps {
  text: string;
}

const VoiceControl = ({ text }: VoiceControlProps) => {
  const [showCaptions, setShowCaptions] = useState(true);

  const {
    speak,
    pause,
    resume,
    stop,
    isSpeaking,
    isPaused,
    isSupported,
    volume,
    setVolume,
    rate,
    setRate,
    currentText,
  } = useTextToSpeech({
    lang: 'pt-BR',
    volume: 1,
    rate: 1.5,
    pitch: 1.0,
  });

  useEffect(() => {
    if (!isSupported) {
      toast.error("Seu navegador não suporta leitura de voz", {
        description: "Tente usar Chrome, Edge ou Safari para melhor compatibilidade.",
      });
    }
  }, [isSupported]);

  const handlePlay = () => {
    if (isPaused) {
      resume();
    } else {
      // Extract text content from HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;
      const textContent = tempDiv.textContent || tempDiv.innerText || '';
      speak(textContent);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const handleRateChange = (value: number[]) => {
    setRate(value[0]);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50/50">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          {/* Title */}
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Leitura de Voz</h3>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Play/Pause Button */}
            {!isSpeaking ? (
              <Button
                onClick={handlePlay}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Play className="h-4 w-4 mr-2" />
                Reproduzir
              </Button>
            ) : isPaused ? (
              <Button
                onClick={resume}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="h-4 w-4 mr-2" />
                Continuar
              </Button>
            ) : (
              <Button
                onClick={pause}
                size="sm"
                variant="outline"
              >
                <Pause className="h-4 w-4 mr-2" />
                Pausar
              </Button>
            )}

            {/* Stop Button */}
            {isSpeaking && (
              <Button
                onClick={stop}
                size="sm"
                variant="destructive"
              >
                <Square className="h-4 w-4 mr-2" />
                Parar
              </Button>
            )}

            {/* Captions Toggle */}
            <Button
              onClick={() => setShowCaptions(!showCaptions)}
              size="sm"
              variant={showCaptions ? "default" : "outline"}
              className={showCaptions ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              <Subtitles className="h-4 w-4 mr-2" />
              Legendas
            </Button>
          </div>

          {/* Volume Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {volume === 0 ? (
                  <VolumeX className="h-4 w-4 text-gray-500" />
                ) : (
                  <Volume2 className="h-4 w-4 text-blue-600" />
                )}
                <span className="text-sm font-medium text-gray-700">Volume</span>
              </div>
              <span className="text-sm text-gray-600">{Math.round(volume * 100)}%</span>
            </div>
            <Slider
              value={[volume]}
              onValueChange={handleVolumeChange}
              max={1}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* Speed Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Velocidade</span>
              </div>
              <span className="text-sm text-gray-600">{rate.toFixed(1)}x</span>
            </div>
            <Slider
              value={[rate]}
              onValueChange={handleRateChange}
              min={0.5}
              max={2}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* Status Indicator */}
          {isSpeaking && (
            <div className="flex items-center space-x-2 text-sm text-blue-700">
              <div className="animate-pulse flex space-x-1">
                <div className="w-1 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-1 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <span>{isPaused ? 'Pausado' : 'Reproduzindo...'}</span>
            </div>
          )}

          {/* Live Captions */}
          {showCaptions && isSpeaking && currentText && !isPaused && (
            <div className="mt-4 p-4 bg-gray-900 text-white rounded-lg border-2 border-purple-500">
              <div className="flex items-center space-x-2 mb-2">
                <Subtitles className="h-4 w-4 text-purple-400" />
                <span className="text-xs font-semibold text-purple-400 uppercase">Legenda ao Vivo</span>
              </div>
              <p className="text-lg leading-relaxed">{currentText}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceControl;
