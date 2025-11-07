import ItsPikachuAudio from "@/assets/audios/its_pikachu.mp3";
import PokemonBattleAudio from "@/assets/audios/pokemon_battle.mp3";
import ClefairyImg from "@/assets/imgs/clefairy.png";
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
import { GENERATIONS, HOW_MANY_POKEMONS, LANGUAGES } from "@/utils/config";
import { Image } from "@unpic/solid";
import { Component, For } from "solid-js";

const App: Component = () => {
  const settings = useGameSettings();
  const audio = useAudio({ enabled: () => settings.audio() === "1" });

  document.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") return;
  });

  return (
    <main class="lg:p-16 p-6 pt-16">
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

      <button
        onClick={() => audio.play(ItsPikachuAudio)}
        class="block mx-auto pt-8 pb-3 "
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

      <section class="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:place-items-start  gap-10 py-10 lgmax-w-[80%] w-full mx-auto">
        <div class="flex flex-col gap-4">
          <label>How much Pokemon ?</label>
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
          <label>In which language ?</label>
          <SelectLanguageDropdown
            languages={LANGUAGES}
            activeLanguage={settings.language()}
            setActiveLanguage={settings.setLanguage}
          ></SelectLanguageDropdown>
        </div>

        <div class="flex flex-col gap-5">
          <label>Which generations ?</label>
          <div class="grid grid-cols-3 gap-6 [&>button]:max-w-[50px]">
            <For each={GENERATIONS}>
              {(item) => (
                <Button
                  classList={{
                    "bg-muted": !settings.generations().includes(item),
                  }}
                  onClick={() => settings.setGenerations(item)}
                >
                  {item}
                </Button>
              )}
            </For>
          </div>
        </div>

        <div class="flex flex-col gap-5">
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
              Perfect spelling ?
            </label>
          </div>

          <div class="flex items-center justify-start">
            <Switch
              defaultChecked={settings.lives() !== "none"}
              id="lives"
              onChange={(value) => {
                settings.setLives(value ? "3" : "none");
              }}
            />
            <label class="pl-6 py-1" for="lives-input">
              3 lives ?
            </label>
          </div>
        </div>
      </section>

      <Button
        class="block mx-auto h-12 my-4"
        onClick={() => {
          audio.play(PokemonBattleAudio);
        }}
      >
        Start the game
      </Button>
    </main>
  );
};

export default App;
