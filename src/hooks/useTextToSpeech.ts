import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTextToSpeechOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export const useTextToSpeech = (options: UseTextToSpeechOptions = {}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [volume, setVolume] = useState(options.volume ?? 1);
  const [rate, setRate] = useState(options.rate ?? 1.5);
  const [pitch, setPitch] = useState(options.pitch ?? 1.0);
  const [currentText, setCurrentText] = useState('');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
  }, []);

  const selectBestVoice = useCallback((lang: string) => {
    const voices = window.speechSynthesis.getVoices();

    // Prefer male Portuguese voices for more natural narration
    const portugueseVoices = voices.filter(voice =>
      voice.lang.startsWith('pt') || voice.lang.startsWith('pt-BR')
    );

    // Try to find a male voice
    const maleVoice = portugueseVoices.find(voice =>
      voice.name.toLowerCase().includes('male') ||
      voice.name.toLowerCase().includes('homem') ||
      voice.name.toLowerCase().includes('daniel') ||
      voice.name.toLowerCase().includes('felipe')
    );

    if (maleVoice) return maleVoice;

    // Fallback to first Portuguese voice
    if (portugueseVoices.length > 0) return portugueseVoices[0];

    // Fallback to first available voice
    return voices[0];
  }, []);

  const speak = useCallback((text: string) => {
    if (!isSupported || !text) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang || 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Select best available voice
    const bestVoice = selectBestVoice(utterance.lang);
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
      setCurrentText(text.substring(0, 100) + '...'); // Preview inicial
    };

    utterance.onboundary = (event) => {
      // Atualiza o texto atual sendo falado
      const spokenText = text.substring(0, event.charIndex + 50);
      const words = spokenText.split(' ');
      const lastWords = words.slice(-15).join(' '); // Últimas 15 palavras
      setCurrentText(lastWords + '...');
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentText('');
    };

    utterance.onerror = (error) => {
      console.error('Speech synthesis error:', error);
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentText('');
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isSupported, rate, pitch, volume, options.lang, selectBestVoice]);

  const pause = useCallback(() => {
    if (isSupported && isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isSupported, isSpeaking, isPaused]);

  const resume = useCallback(() => {
    if (isSupported && isSpeaking && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, [isSupported, isSpeaking, isPaused]);

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }, [isSupported]);

  const setVolumeLevel = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
  }, []);

  const setRateLevel = useCallback((newRate: number) => {
    const clampedRate = Math.max(0.5, Math.min(2, newRate));
    setRate(clampedRate);
  }, []);

  return {
    speak,
    pause,
    resume,
    stop,
    isSpeaking,
    isPaused,
    isSupported,
    volume,
    setVolume: setVolumeLevel,
    rate,
    setRate: setRateLevel,
    currentText,
  };
};
