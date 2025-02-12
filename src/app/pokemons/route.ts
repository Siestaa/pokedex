import { NextResponse } from "next/server";
import { allPokemons } from "./list";

interface Pokemon {
  abilities: string[];
  detailPageURL: string;
  weight: number;
  weakness: string[];
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  ThumbnailAltText: string;
  ThumbnailImage: string;
  id: number;
  type: string[];
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = 50;

  const defaultFilters = {
    types: [] as string[],
    height: [] as string[],
    weight: [] as string[],
    text: "",
    sort: "MinId",
  };

  const customFilters = (() => {
    try {
      return JSON.parse(
        url.searchParams.get("filters") || JSON.stringify(defaultFilters)
      );
    } catch {
      return defaultFilters;
    }
  })();

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const sortStrategies: Record<string, (a: Pokemon, b: Pokemon) => number> = {
    MinId: (a, b) => a.id - b.id,
    MaxId: (a, b) => b.id - a.id,
    AToZ: (a, b) => a.name.localeCompare(b.name),
    ZToA: (a, b) => b.name.localeCompare(a.name),
  };

  const sortedPokemons = [...allPokemons].sort(
    sortStrategies[customFilters.sort] || sortStrategies.MinId
  );

  const applyRangeFilter = (
    items: Pokemon[],
    filters: string[],
    key: "height" | "weight",
    ranges: Record<string, (value: number) => boolean>
  ): Pokemon[] => {
    if (filters.length === 0) return items;
    return items.filter((item) =>
      filters.some((filter) => ranges[filter](item[key]))
    );
  };

  const sizeRanges = {
    height: {
      small: (value: number) => value < 10,
      medium: (value: number) => value >= 10 && value < 100,
      large: (value: number) => value >= 100,
    },
    weight: {
      small: (value: number) => value < 10,
      medium: (value: number) => value >= 10 && value < 100,
      large: (value: number) => value >= 100,
    },
  };

  let filteredPokemons = sortedPokemons;

  if (customFilters.text) {
    filteredPokemons = filteredPokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(customFilters.text.toLowerCase()) ||
        pokemon.type.some((item) =>
          item.includes(customFilters.text.toLowerCase())
        ) ||
        pokemon.number.includes(customFilters.text) ||
        pokemon.slug.includes(customFilters.text)
    );
  }

  if (customFilters.types.length > 0) {
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      pokemon.type.some((type) => customFilters.types.includes(type))
    );
  }

  filteredPokemons = applyRangeFilter(
    filteredPokemons,
    customFilters.height,
    "height",
    sizeRanges.height
  );
  filteredPokemons = applyRangeFilter(
    filteredPokemons,
    customFilters.weight,
    "weight",
    sizeRanges.weight
  );

  const paginatedPokemons = filteredPokemons.slice(startIndex, endIndex);

  return NextResponse.json({
    page,
    totalPokemons: filteredPokemons.length,
    totalPages: Math.ceil(filteredPokemons.length / limit),
    pokemons: paginatedPokemons,
  });
}
