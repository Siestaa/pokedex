export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource<PokemonForm>[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource<PokemonSpecies>;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface NamedAPIResource<T> {
  name: string;
  url: string;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource<Ability>;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource<Type>;
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource<Version>;
}

export interface PokemonHeldItem {
  item: NamedAPIResource<Item>;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource<Version>;
  rarity: number;
}

export interface PokemonMove {
  move: NamedAPIResource<Move>;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  version_group: NamedAPIResource<VersionGroup>;
  level_learned_at: number;
}

export interface PokemonStat {
  stat: NamedAPIResource<Stat>;
  effort: number;
  base_stat: number;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface PokemonTypePast {
  generation: NamedAPIResource<Generation>;
  types: PokemonType[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  version_group: NamedAPIResource<VersionGroup>;
  level_learned_at: number;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Move {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Generation {
  name: string;
  url: string;
}
export interface PokemonSpecies {
  name: string;
  url: string;
}
export interface Item {
  name: string;
  url: string;
}

export const defaultPokemon: Pokemon = {
  id: 1,
  name: "default-pokemon",
  base_experience: 0,
  height: 0,
  is_default: true,
  order: 0,
  weight: 0,
  abilities: [
    {
      is_hidden: false,
      slot: 1,
      ability: {
        name: "default-ability",
        url: "https://pokeapi.co/api/v2/ability/default-ability/",
      },
    },
  ],
  forms: [
    {
      name: "default-form",
      url: "https://pokeapi.co/api/v2/pokemon-form/default-form/",
    },
  ],
  game_indices: [
    {
      game_index: 0,
      version: {
        name: "default-version",
        url: "https://pokeapi.co/api/v2/version/default-version/",
      },
    },
  ],
  held_items: [
    {
      item: {
        name: "default-item",
        url: "https://pokeapi.co/api/v2/item/default-item/",
      },
      version_details: [
        {
          version: {
            name: "default-version",
            url: "https://pokeapi.co/api/v2/version/default-version/",
          },
          rarity: 0,
        },
      ],
    },
  ],
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  moves: [
    {
      move: {
        name: "default-move",
        url: "https://pokeapi.co/api/v2/move/default-move/",
      },
      version_group_details: [
        {
          move_learn_method: {
            name: "default-method",
            url: "https://pokeapi.co/api/v2/move-learn-method/default-method/",
          },
          version_group: {
            name: "default-group",
            url: "https://pokeapi.co/api/v2/version-group/default-group/",
          },
          level_learned_at: 0,
        },
      ],
    },
  ],
  past_types: [
    {
      generation: {
        name: "default-generation",
        url: "https://pokeapi.co/api/v2/generation/default-generation/",
      },
      types: [
        {
          slot: 1,
          type: {
            name: "default-type",
            url: "https://pokeapi.co/api/v2/type/default-type/",
          },
        },
      ],
    },
  ],
  sprites: {
    front_default: null,
    front_shiny: null,
    front_female: null,
    front_shiny_female: null,
    back_default: null,
    back_shiny: null,
    back_female: null,
    back_shiny_female: null,
  },
  cries: {
    latest: "https://pokeapi.co/media/cry/1/latest.mp3",
    legacy: "https://pokeapi.co/media/cry/1/legacy.mp3",
  },
  species: {
    name: "default-species",
    url: "https://pokeapi.co/api/v2/pokemon-species/default-species/",
  },
  stats: [
    {
      stat: {
        name: "default-stat",
        url: "https://pokeapi.co/api/v2/stat/default-stat/",
      },
      effort: 0,
      base_stat: 0,
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "default-type",
        url: "https://pokeapi.co/api/v2/type/default-type/",
      },
    },
  ],
};
