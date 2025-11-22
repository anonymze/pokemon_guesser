import CnFlag from "@/assets/flags/cn.svg";
import DeFlag from "@/assets/flags/de.svg";
import EsFlag from "@/assets/flags/es.svg";
import FrFlag from "@/assets/flags/fr.svg";
import GbFlag from "@/assets/flags/gb.svg";
import ItFlag from "@/assets/flags/it.svg";
import JpFlag from "@/assets/flags/jp.svg";
import KrFlag from "@/assets/flags/kr.svg";
import { Language } from "@/components/select-theme-dropdown";

export const HOW_MANY_POKEMONS = ["10", "50", "100", "All"] as const;

export const GENERATIONS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const LANGUAGES: Array<Language> = [
  { code: "de", label: "Deutsch", flag: DeFlag },
  { code: "en", label: "English", flag: GbFlag },
  { code: "es", label: "Español", flag: EsFlag },
  { code: "fr", label: "Français", flag: FrFlag },
  { code: "it", label: "Italiano", flag: ItFlag },
  { code: "ja", label: "日本語", flag: JpFlag },
  { code: "ko", label: "한국어", flag: KrFlag },
  { code: "zh-Hans", label: "中文", flag: CnFlag },
];

export const SESSION_KEYS = {
  POKEMON_COUNT: "pokemon_count",
  GENERATIONS: "generations",
  ONLY_SHAPE: "only_shape",
  LANGUAGE: "language",
  PERFECT_SPELLING: "perfect_spelling",
  LIVES: "lives",
  AUDIO: "audio",
} as const;
