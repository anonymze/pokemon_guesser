import ErrorImg from "@/assets/imgs/error.png";
import SuccessImg from "@/assets/imgs/success.png";
import { ErrorIcon } from "@/components/icons/ErrorIcon";
import { RestartIcon } from "@/components/icons/RestartIcon";
import { Button } from "@/components/ui/8bit/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/8bit/table";
import { useGameSettings } from "@/hooks/useGameSettings";
import { gameState } from "@/stores/game";
import { useNavigate } from "@solidjs/router";
import { Image } from "@unpic/solid";
import { Component, For } from "solid-js";

const Page: Component = () => {
  /* GAME */
  const settings = useGameSettings();

  /* ROUTING */
  const navigate = useNavigate();

  return (
    <main class="container h-dvh  overflow-auto">
      <h1 class="text-3xl text-center">RESULTS</h1>

      <Button
        onClick={() => {
          navigate("/");
        }}
        class="mt-5 group flex items-center gap-3 mx-auto w-80 bg-white text-foreground hover:text-white focus:text-white focus:bg-alternative hover:bg-alternative"
      >
        <ErrorIcon class=" group-hover:text-white group-focus:text-white " />
        Reset
      </Button>
      <Button
        onClick={() => {
          navigate("/game");
        }}
        class="mt-6 group flex items-center gap-3 mx-auto w-80 bg-white text-foreground hover:text-white focus:text-white focus:bg-alternative hover:bg-alternative"
      >
        <RestartIcon class="group-focus:text-white group-hover:text-white" />
        Restart
      </Button>

      <h2 class="mt-7 text-center text-foreground/80">
        SCORE{" "}
        <span class="text-warning">
          {gameState.score} / {settings.pokemonCount()}
        </span>
      </h2>

      {gameState.answers.length === 0 ? (
        <p class="text-center mt-6">You did not input any pokemon name during the game !</p>
      ) : (
        <Table>
          <TableCaption class="text-xs md:text-sm text-secondary">
            Thanks for playing !
          </TableCaption>
          <TableHeader>
            <TableRow class="[&>th]:text-foreground/80">
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Generation</TableHead>
              <TableHead>Input</TableHead>
              <TableHead class="text-right">State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={gameState.answers}>
              {(val) => {
                return (
                  <TableRow>
                    <TableCell class="font-medium">
                      <Image
                        src={val.pokemon.image}
                        width={60}
                        height={60}
                        layout="constrained"
                      />
                    </TableCell>
                    <TableCell>{val.pokemon.name}</TableCell>
                    <TableCell>{val.pokemon.generation}</TableCell>
                    <TableCell>{val.inputValue}</TableCell>
                    <TableCell class="text-right">
                      {val.state === "error" ? (
                        <Image
                          src={ErrorImg}
                          width={25}
                          height={25}
                          layout="constrained"
                          class="ml-auto"
                        />
                      ) : (
                        <Image
                          src={SuccessImg}
                          width={30}
                          height={30}
                          layout="constrained"
                          class="ml-auto"
                        />
                      )}
                    </TableCell>
                  </TableRow>
                );
              }}
            </For>
          </TableBody>
        </Table>
      )}
    </main>
  );
};

export default Page;
