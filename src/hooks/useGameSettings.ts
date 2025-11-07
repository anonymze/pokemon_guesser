import { toast } from "@/components/ui/8bit/toast";
import {
  GENERATIONS,
  HOW_MANY_POKEMONS,
  LANGUAGES,
  SESSION_KEYS,
} from "@/utils/config";
import { Accessor, createEffect, createSignal, Setter } from "solid-js";

export interface GameSettings {
  pokemonCount: Accessor<string>;
  setPokemonCount: Setter<string>;
  generations: Accessor<string[]>;
  setGenerations: (gen: string) => void;
  language: Accessor<string>;
  setLanguage: Setter<string>;
  perfectSpelling: Accessor<"0" | "1">;
  setPerfectSpelling: Setter<"0" | "1">;
  animating: Accessor<boolean>;
  setAnimating: Setter<boolean>;
  lives: Accessor<"none" | `${number}`>;
  setLives: Setter<"none" | `${number}`>;
  audio: Accessor<"0" | "1">;
  setAudio: Setter<"0" | "1">;
}

export function useGameSettings(): GameSettings {
  // Pokemon count
  const storedPokemonCount = sessionStorage.getItem(SESSION_KEYS.POKEMON_COUNT);
  const [pokemonCount, setPokemonCount] = createSignal(
    storedPokemonCount && HOW_MANY_POKEMONS.includes(storedPokemonCount as any)
      ? storedPokemonCount
      : HOW_MANY_POKEMONS[0],
  );

  // Generations
  const storedGenerations = sessionStorage.getItem(SESSION_KEYS.GENERATIONS);
  const [generations, setGenerations] = createSignal(
    storedGenerations
      ? storedGenerations
          .split(",")
          .filter((g) => GENERATIONS.includes(g as any))
      : [...GENERATIONS],
  );

  // Language
  const storedLanguage = sessionStorage.getItem(SESSION_KEYS.LANGUAGE);
  const [language, setLanguage] = createSignal(
    storedLanguage && LANGUAGES.some((l) => l.code === storedLanguage)
      ? storedLanguage
      : LANGUAGES[1].code,
  );

  // Perfect spelling
  const storedSpelling = sessionStorage.getItem(SESSION_KEYS.PERFECT_SPELLING);
  const [perfectSpelling, setPerfectSpelling] = createSignal<"0" | "1">(
    storedSpelling === "0" || storedSpelling === "1" ? storedSpelling : "0",
  );

  // Lives
  const storedLives = sessionStorage.getItem(SESSION_KEYS.LIVES);
  const [lives, setLives] = createSignal<"none" | `${number}`>(
    storedLives === "none" || storedLives === "3" ? storedLives : "none",
  );

  // Audio
  const storedAudio = sessionStorage.getItem(SESSION_KEYS.AUDIO);
  const [audio, setAudio] = createSignal<"0" | "1">(
    storedAudio === "0" || storedAudio === "1" ? storedAudio : "1",
  );

  const [animating, setAnimating] = createSignal(false);

  /**  Persist to sessionStorage **/
  createEffect(() => {
    sessionStorage.setItem(SESSION_KEYS.POKEMON_COUNT, pokemonCount());
  });

  createEffect(() => {
    sessionStorage.setItem(SESSION_KEYS.GENERATIONS, generations().toString());
  });

  createEffect(() => {
    sessionStorage.setItem(SESSION_KEYS.LANGUAGE, language());
  });

  createEffect(() => {
    sessionStorage.setItem(SESSION_KEYS.PERFECT_SPELLING, perfectSpelling());
  });

  createEffect(() => {
    sessionStorage.setItem(SESSION_KEYS.LIVES, lives());
  });

  createEffect(() => {
    sessionStorage.setItem(SESSION_KEYS.AUDIO, audio());
  });
  //** **/

  // Helper for generation toggle with validation
  const toggleGeneration = (gen: string) => {
    setGenerations((prev) => {
      const generationsSet = new Set(prev);

      if (generationsSet.has(gen)) {
        if (generationsSet.size === 1) {
          toast("At least 1 generation");
          return prev;
        }
        generationsSet.delete(gen);
      } else {
        generationsSet.add(gen);
      }

      return Array.from(generationsSet);
    });
  };

  return {
    animating,
    pokemonCount,
    setPokemonCount,
    generations,
    setGenerations: toggleGeneration,
    language,
    setLanguage,
    perfectSpelling,
    setPerfectSpelling,
    setAnimating,
    lives,
    setLives,
    audio,
    setAudio,
  };
}
