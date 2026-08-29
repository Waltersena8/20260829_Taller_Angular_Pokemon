export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number; // en decímetros
  weight: number; // en hectogramos
}

/** Estructura parcial de la respuesta cruda de la PokeAPI. */
export interface PokeApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other?: {
      'official-artwork'?: { front_default: string | null };
      dream_world?: { front_default: string | null };
    };
    front_default: string | null;
  };
  types: { type: { name: string } }[];
}
