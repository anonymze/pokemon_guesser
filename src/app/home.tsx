import ItsPikachuAudio from "@/assets/audios/its_pikachu.mp3";
import PokemonBattleAudio from "@/assets/audios/pokemon_battle.mp3";
import ClefairyImg from "@/assets/imgs/clefairy.png";
import PokeballImg from "@/assets/imgs/pokeball.png";
import { SelectLanguageDropdown } from "@/components/select-theme-dropdown";
import { Button } from "@/components/ui/8bit/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Switch } from "@/components/ui/8bit/switch";
import { useAudio } from "@/hooks/useAudio";
import { useGameSettings } from "@/hooks/useGameSettings";

const SIZE_POKEBALL_IMG = 150;
const ANIMATION_START_GAME_NAME = "animation-start-game";

import { GENERATIONS, HOW_MANY_POKEMONS, LANGUAGES } from "@/utils/config";
import {
  Navigator,
  useIsRouting,
  useNavigate,
  usePreloadRoute,
} from "@solidjs/router";
import { Image } from "@unpic/solid";
import {
  Accessor,
  Component,
  createEffect,
  createSignal,
  For,
  onCleanup,
  Show,
} from "solid-js";

const Page: Component = () => {
  /* ROUTING */
  const isRouting = useIsRouting();
  const navigate = useNavigate();
  const preload = usePreloadRoute();

  /* GAME */
  const [startGame, setStartGame] = createSignal(false);
  const settings = useGameSettings();
  const audio = useAudio({ enabled: () => settings.audio() === "1" });

  /* ELEMENTS & EVENTS */
  const { heightWindow } = events({ startGame, navigate, onCleanup });
  let pokeballAnimationRef: HTMLDivElement | undefined;

  // preload audio files
  createEffect(() => {
    if (settings.audio() === "1") {
      const audio1 = new Audio(ItsPikachuAudio);
      const audio2 = new Audio(PokemonBattleAudio);
      audio1.preload = "auto";
      audio2.preload = "auto";
      audio1.load();
      audio2.load();
    }
  });



  createEffect(() => {
    if (startGame()) {
      pokeballAnimationRef = document.querySelector(
        `#${ANIMATION_START_GAME_NAME} > div`,
      ) as HTMLDivElement | undefined;

      if (!pokeballAnimationRef) return;

      Promise.allSettled(
        pokeballAnimationRef.getAnimations().map((a) => a.finished),
      ).then(() => {
        if (!isRouting()) navigateToGame(navigate);
      });
    }
  });

  return (
    <main class="container">
      <div class=" flex items-center justify-start absolute top-4 right-5">
        <Switch
          id="audio"
          defaultChecked={settings.audio() === "1"}
          onChange={(value) => {
            settings.setAudio(value ? "1" : "0");
          }}
        />
        <label class="pl-6 py-1 text-sm" for="audio-input">
          Audio
        </label>
      </div>

      <h1 class="text-center text-3xl font-bold">Who's that pokemon ?</h1>

      <Show when={startGame()}>
        <div
          class="fixed inset-0 overflow-hidden z-10"
          aria-hidden="true"
          id={ANIMATION_START_GAME_NAME}
        >
          <For each={new Array(Math.ceil(heightWindow() / SIZE_POKEBALL_IMG))}>
            {(_, idx) => {
              return (
                <>
                  <div
                    class="absolute z-2"
                    style={{
                      top: `${idx() * SIZE_POKEBALL_IMG}px`,
                      right:
                        idx() % 2 !== 0 ? `-${SIZE_POKEBALL_IMG}px` : undefined,
                      left:
                        idx() % 2 === 0 ? `-${SIZE_POKEBALL_IMG}px` : undefined,
                    }}
                    classList={{
                      "animation-rotation-translate-full-screen":
                        idx() % 2 === 0,
                      "animation-rotation-translate-full-screen-reverse":
                        idx() % 2 !== 0,
                    }}
                  >
                    <Image
                      src={PokeballImg}
                      layout="constrained"
                      width={SIZE_POKEBALL_IMG}
                      height={SIZE_POKEBALL_IMG}
                      alt=""
                    />
                  </div>
                  <div
                    class="absolute z-1"
                    style={{
                      top: `${idx() * SIZE_POKEBALL_IMG}px`,
                      height: `${SIZE_POKEBALL_IMG}px`,
                      right:
                        idx() % 2 !== 0 ? `-${SIZE_POKEBALL_IMG}px` : undefined,
                      left:
                        idx() % 2 === 0 ? `-${SIZE_POKEBALL_IMG}px` : undefined,
                      width: `${SIZE_POKEBALL_IMG / 2}px`,
                      "background-color": "#000",
                    }}
                    classList={{
                      "animation-translate-full-screen": idx() % 2 === 0,
                      "animation-translate-full-screen-reverse":
                        idx() % 2 !== 0,
                    }}
                  ></div>
                </>
              );
            }}
          </For>
        </div>
      </Show>

      <button
        onClick={() => audio.play(ItsPikachuAudio)}
        class="block mx-auto mt-7 mb-3 focus-icon"
        classList={{
          "cursor-pointer": settings.audio() === "1",
        }}
        aria-label="Play sound"
      >
        <Image
          src={ClefairyImg}
          layout="constrained"
          width={150}
          height={139}
          alt="Pokemon Clefairy"
        />
      </button>

      <section class="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-10 py-10 lg:max-w-[80%] w-full mx-auto">
        <div class="flex flex-col gap-4 w-fit">
          <label>How much Pokemon</label>
          <Select
            options={HOW_MANY_POKEMONS as unknown as unknown[]}
            value={settings.pokemonCount()}
            onChange={(value) => {
              if (typeof value !== "string") return;
              settings.setPokemonCount(value);
            }}
            placeholder="Select"
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
            )}
          >
            <SelectTrigger class="w-[100px]">
              <SelectValue>{(state) => state.selectedOption()}</SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </div>

        <div class="flex flex-col gap-4">
          <label>In which language</label>
          <SelectLanguageDropdown
            languages={LANGUAGES}
            activeLanguage={settings.language()}
            setActiveLanguage={settings.setLanguage}
          ></SelectLanguageDropdown>
        </div>

        <div class="flex flex-col gap-5">
          <label>Which generations</label>
          <div class="grid grid-cols-3 gap-6 [&>button]:max-w-[50px]">
            <For each={GENERATIONS}>
              {(item) => (
                <Button
                  classList={{
                    "bg-muted": !settings.generations().includes(item),
                    "text-foreground": !settings.generations().includes(item),
                  }}
                  onClick={() => settings.setGenerations(item)}
                >
                  {item}
                </Button>
              )}
            </For>
          </div>
        </div>

        <div class="flex flex-col gap-5 mt-2">
          <div class=" flex items-center justify-start">
            <Switch
              id="spelling"
              defaultChecked={settings.perfectSpelling() === "1"}
              value={settings.perfectSpelling()}
              onChange={(value) => {
                settings.setPerfectSpelling(value ? "1" : "0");
              }}
            />
            <label class="pl-6 py-1" for="spelling-input">
              Perfect spelling
            </label>
          </div>

          {/*<div class="flex items-center justify-start">
            <Switch
              defaultChecked={settings.lives() !== "none"}
              id="lives"
              onChange={(value) => {
                settings.setLives(value ? "3" : "none");
              }}
            />
            <label class="pl-6 py-1" for="lives-input">
              3 lives
            </label>
          </div>*/}

          <div class="flex items-center justify-start">
            <Switch
              defaultChecked={settings.onlyShape() === "1"}
              id="shape"
              onChange={(value) => {
                settings.setOnlyShape(value ? "1" : "0");
              }}
            />
            <label class="pl-6 py-1" for="shape-input">
              Only shape
            </label>
          </div>
        </div>
      </section>

      <Button
        variant={"secondary"}
        class="block mx-auto h-12 my-4"
        disabled={startGame()}
        autofocus
        onClick={(ev) => {
          // we prevent stoping animation on this click (solid js is too fast)
          ev.stopImmediatePropagation();
          audio.play(PokemonBattleAudio);
          setStartGame(true);
          preload(`/game`, { preloadData: true });
        }}
      >
        Start game
      </Button>
    </main>
  );
};

const events = ({
  startGame,
  navigate,
  onCleanup,
}: {
  startGame: Accessor<boolean>;
  navigate: Navigator;
  onCleanup: (fn: () => void) => void;
}) => {
  const [heightWindow, setHeightWindow] = createSignal(window.innerHeight);

  function resizeUpdate() {
    setHeightWindow(window.innerHeight);
  }

  function navigateAfterPressEnter(ev: KeyboardEvent) {
    if (ev.key === "Enter") {
      // we skip animation
      if (startGame()) navigateToGame(navigate);
    }
  }

  function navigateAfterClick() {
    // we skip animation
    if (startGame()) navigateToGame(navigate);
  }

  window.addEventListener("resize", resizeUpdate);
  document.addEventListener("keypress", navigateAfterPressEnter);
  document.addEventListener("click", navigateAfterClick);

  // we clean events before leaving
  onCleanup(() => {
    window.removeEventListener("resize", resizeUpdate);
    document.removeEventListener("keypress", navigateAfterPressEnter);
    document.removeEventListener("click", navigateAfterClick);
  });

  return {
    heightWindow,
  };
};

const navigateToGame = (navigate: Navigator) => navigate("/game");

export default Page;
