import { ErrorIcon } from "@/components/icons/ErrorIcon";
import { RestartIcon } from "@/components/icons/RestartIcon";
import { SuccessIcon } from "@/components/icons/SuccessIcon";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Input } from "@/components/ui/8bit/input";
import { Kbd } from "@/components/ui/8bit/kbd";
import { pokemonByGeneration } from "@/data/pokemon";
import { GameSettings, useGameSettings } from "@/hooks/useGameSettings";
import { gameState, setGameState } from "@/stores/game";
import { LANGUAGES } from "@/utils/config";
import { levenshteinDistance, removeAccents } from "@/utils/helper";
import { Navigator, useNavigate } from "@solidjs/router";
import { Image } from "@unpic/solid";
import {
  Component,
  ErrorBoundary,
  For,
  Show,
  Suspense,
  createEffect,
  createResource,
  createSignal,
  onCleanup,
} from "solid-js";

const Page: Component = () => {
  /* GAME */
  setGameState("answers", []);
  setGameState("score", 0);
  const settings = useGameSettings();
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [pokemons] = createResource(
    () => ({
      generations: settings.generations(),
      count: settings.pokemonCount(),
    }),
    fetchPokemons,
  );

  const currentPokemon = () => pokemons()?.[currentIndex()];
  const total = () => pokemons()?.length ?? 0;
  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setCurrentIndex((oldIndex) => {
      const newIndex = Math.min(oldIndex + 1, total() - 1);
      if (oldIndex === total() - 1) navigateToResults(navigate);
      return newIndex;
    });

  /* ROUTING */
  const navigate = useNavigate();

  /* ELEMENTS & EVENTS */
  let inputRef: HTMLInputElement | undefined;

  createEffect(() => {
    if (currentPokemon() && inputRef) {
      inputRef.focus();
      events({ onCleanup, next, prev, inputRef, settings });
    }
  });

  return (
    <div class="px-16 h-dvh">
      <div class="grid gap-4 h-full grid-rows-[auto_1fr_auto]">
        <header class="pt-10 flex lg:justify-between items-center justify-center lg:items-start gap-x-3 gap-y-7 lg:flex-row flex-col-reverse">
          <p class="w-44 lg:text-left text-center">
            <span class="text-secondary font-bold">{currentIndex() + 1}</span> /{" "}
            {total()}
          </p>
          <div class="flex items-center gap-6">
            <For each={settings.generations().sort()}>
              {(val) => <Badge class="bg-foreground lg:w-5 w-4">{val}</Badge>}
            </For>
          </div>
          <div class="w-44">
            <Image
              src={LANGUAGES.find((l) => l.code === settings.language())?.flag!}
              width={40}
              height={30}
              class="ml-auto mr-auto lg:mr-0"
            />
          </div>
        </header>
        <main class="relative grid place-items-center">
          <div class="absolute top-5 left-0 max-md:hidden">
            <Kbd>↑↓ Navigate</Kbd>
          </div>
          {/* preload next 2 images */}
          <div style="display: none;" aria-hidden="true">
            <Show when={pokemons()?.[currentIndex() + 1]}>
              <Image
                src={pokemons()![currentIndex() + 1].image}
                width={300}
                height={300}
                layout="constrained"
              />
            </Show>
            <Show when={pokemons()?.[currentIndex() + 2]}>
              <Image
                src={pokemons()![currentIndex() + 2].image}
                width={300}
                height={300}
                layout="constrained"
              />
            </Show>
          </div>

          <ErrorBoundary
            fallback={<p>Error ! Wow should not happens but WOW</p>}
          >
            <Suspense fallback={<p>Pokemon arrives...</p>}>
              <Show when={currentPokemon()}>
                {(pokemon) => (
                  <div class="flex flex-col items-center gap-2">
                    <Image
                      layout="constrained"
                      src={pokemon().image}
                      width={300}
                      height={300}
                      alt={pokemon().name}
                      class="pointer-events-none"
                      classList={{
                        "brightness-0":
                          settings.onlyShape() === "1" ? true : false,
                      }}
                    />
                    <div class="relative">
                      <Input
                        id="input-pokemon"
                        data-pokemon-image={currentPokemon()?.image}
                        data-pokemon-name={
                          currentPokemon()?.names[settings.language()]
                        }
                        data-pokemon-generation={currentPokemon()?.generation}
                        ref={inputRef}
                        placeholder="Enter a pokemon"
                      />
                      <Kbd class="absolute -right-50 top-1/2 -translate-y-1/2 py-3 max-md:hidden">
                        ↵ Press enter
                      </Kbd>
                    </div>
                  </div>
                )}
              </Show>
            </Suspense>
          </ErrorBoundary>
        </main>
        <footer class="flex flex-col gap-6 pb-10">
          <Button
            onClick={() => {
              navigate("/");
            }}
            class="group flex items-center gap-3 mx-auto w-80 bg-white text-foreground hover:text-white focus:text-white focus:bg-alternative hover:bg-alternative"
          >
            <ErrorIcon class=" group-hover:text-white group-focus:text-white " />
            Reset
          </Button>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            class="group flex items-center gap-3 mx-auto w-80 bg-white text-foreground hover:text-white focus:text-white focus:bg-alternative hover:bg-alternative"
          >
            <RestartIcon class="group-focus:text-white group-hover:text-white" />
            Restart
          </Button>
          <Button
            onClick={() => {
              navigateToResults(navigate);
            }}
            class="group flex items-center gap-3 mx-auto w-80 bg-white text-foreground hover:text-white focus:text-white focus:bg-alternative hover:bg-alternative"
          >
            <SuccessIcon class="size-5 group-focus:text-white group-hover:text-white " />
            Finish
          </Button>
        </footer>
      </div>
    </div>
  );
};

interface FetchParams {
  generations: string[];
  count: string;
}

const fetchPokemons = async (params: FetchParams) => {
  // Filter by generation
  const filtered = params.generations.flatMap(
    (gen) => pokemonByGeneration.get(Number(gen)) || [],
  );

  // Randomize (Fisher-Yates)
  const shuffled = [...filtered];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Apply count limit
  const limit =
    params.count === "All" ? shuffled.length : parseInt(params.count);
  return shuffled.slice(0, limit);
};

const events = ({
  onCleanup,
  next,
  prev,
  inputRef,
  settings,
}: {
  onCleanup: (fn: () => void) => void;
  next: () => number;
  prev: () => number;
  inputRef: HTMLInputElement;
  settings: GameSettings;
}) => {
  function validateAfterPressEnter(ev: KeyboardEvent) {
    if (ev.key === "Enter") {
      const elem = ev.target as HTMLInputElement;
      const inputValue = removeAccents(elem.value.toLowerCase().trim());
      const pokemonName = removeAccents(elem.dataset.pokemonName?.toLowerCase().trim() ?? "");
      const pokemonImage = elem.dataset.pokemonImage ?? "";
      const pokemonGeneration = elem.dataset.pokemonGeneration ?? "";
      let isCorrect = false;

      if (settings.perfectSpelling() === "1") {
        isCorrect = pokemonName === inputValue;
      } else {
        const distance = levenshteinDistance(pokemonName, inputValue);
        const maxErrors = getMaxErrors(pokemonName.length);
        isCorrect = distance <= maxErrors;
      }

      setGameState("score", (s) => (isCorrect ? s + 1 : s));
      setGameState("answers", gameState.answers.length, {
        inputValue,
        state: isCorrect ? "success" : "error",
        pokemon: {
          image: pokemonImage,
          name: pokemonName,
          generation: pokemonGeneration,
        },
      });

      elem.value = "";
      next();
    }
  }

  function handleArrowNav(ev: KeyboardEvent) {
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      // prevent scroll page
      ev.preventDefault();

      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input:not([disabled])",
        ),
      );
      const current = document.activeElement as HTMLElement;
      const currentIndex = focusable.indexOf(current);

      if (currentIndex !== -1) {
        const nextIndex =
          ev.key === "ArrowDown"
            ? Math.min(currentIndex + 1, focusable.length - 1)
            : Math.max(currentIndex - 1, 0);
        focusable[nextIndex]?.focus();
      }
    }
  }

  inputRef.addEventListener("keypress", validateAfterPressEnter);
  document.addEventListener("keydown", handleArrowNav);

  onCleanup(() => {
    inputRef.removeEventListener("keypress", validateAfterPressEnter);
    document.removeEventListener("keydown", handleArrowNav);
  });
};

const getMaxErrors = (length: number): number => {
  if (length < 4) return 0;
  if (length < 6) return 1;
  if (length < 9) return 2;
  return 3;
};

const navigateToResults = (navigate: Navigator) => navigate("/results");

export default Page;
