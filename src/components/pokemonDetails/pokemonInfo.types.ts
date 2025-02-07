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
