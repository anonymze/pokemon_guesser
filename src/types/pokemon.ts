export interface Pokemon {
  id: number;
  name: string;
  names: Record<string, string>;
  generation: number | string;
  types: string[];
  image: string;
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string | null;
    back_shiny: string | null;
  };
}
