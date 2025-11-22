import { Pokemon } from "@/types/pokemon";
import { createStore } from "solid-js/store";

interface GameState {
  score: number;
  lives?: string | undefined;
  answers: Array<{
    pokemon: Pick<Pokemon, "image" | "name" | "generation">;
    inputValue: string;
    state: "success" | "error";
  }>;
}

export const [gameState, setGameState] = createStore<GameState>({
  score: 0,
  answers: [],
});
