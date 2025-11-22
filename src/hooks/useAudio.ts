import { createEffect, onCleanup } from "solid-js";

export interface UseAudioOptions {
  enabled: () => boolean;
  volume?: number;
}

export function useAudio(options: UseAudioOptions) {
  let audio: HTMLAudioElement | null = null;

  const stopAudio = (audioElement: HTMLAudioElement) => {
    audioElement.pause();
    audioElement.currentTime = 0;
  };

  const play = (url: string) => {
    if (!options.enabled()) return;

    // If same audio is playing, stop it
    if (audio && audio.src.endsWith(url)) {
      stopAudio(audio);
      audio = null;
      return;
    }

    // If different audio is playing, stop it and play new one
    if (audio) {
      stopAudio(audio);
      audio = null;
    }

    audio = new Audio(url);
    audio.volume = options.volume ?? 0.5;
    audio.play();
    audio.onended = () => (audio = null);
  };

  // Stop audio when disabled
  createEffect(() => {
    if (!options.enabled() && audio) {
      stopAudio(audio);
      audio = null;
    }
  });

  // Cleanup on unmount
  onCleanup(() => {
    if (audio) {
      stopAudio(audio);
      audio = null;
    }
  });

  return { play };
}
