import { PokemonType } from "@/components/filter/ui/filterTypes";
import axios from "axios";
import { flow, Instance, types as t } from "mobx-state-tree";
import { PokemonFiltersModel, PokemonModel } from "./pokemonModel";

export const RootStore = t
  .model("RootStore", {
    pokemonsList: t.array(PokemonModel),
    currentPage: t.optional(t.number, 0),
    itemsPerPage: t.optional(t.number, 50),
    totalItems: t.optional(t.number, 1025),
    showFilter: t.optional(t.boolean, false),
    filters: PokemonFiltersModel,
    blockScroll: t.optional(t.boolean, false),
    currentPokemon: t.optional(PokemonModel, {
      id: 0,
      name: "",
      slug: "",
      featured: "",
      collectibles_slug: "",
      detailPageURL: "",
      ThumbnailImage: "/pokeballInfo.png",
      ThumbnailAltText: "",
      number: "",
      height: 0,
      weight: 0,
      type: [],
    }),
  })
  .actions((store) => {
    const fetchPokemon = flow(function* (page = 1) {
      try {
        const response = yield axios.get("/pokemons", {
          params: {
            page,
            limit: store.itemsPerPage,
            filters: JSON.stringify(store.filters),
          },
        });

        if (page === 1) {
          store.pokemonsList.replace(response.data.pokemons);
        } else {
          store.pokemonsList.push(...response.data.pokemons);
        }

        store.currentPage = page;
        store.totalItems = response.data.totalPokemons;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    const changeSort = (sort = "MinId") => {
      store.filters.sort = sort;
    };

    const toggleFilter = (showFilter = false) => {
      store.showFilter = showFilter;
    };

    const changeCustomFilters = (filter: PokemonType) => {
      if (store.filters.types.includes(filter)) {
        store.filters.types.splice(store.filters.types.indexOf(filter), 1);
      } else {
        store.filters.types.push(filter);
      }
    };

    const changeFilterSize = (size: string, type: "height" | "weight") => {
      if (store.filters[type].includes(size)) {
        store.filters[type].splice(store.filters[type].indexOf(size), 1);
      } else {
        store.filters[type].push(size);
      }
    };

    const resetFilter = () => {
      store.filters.types.replace([]);
      store.filters.height.replace([]);
      store.filters.weight.replace([]);
      store.filters.text = "";
      store.filters.sort = "MinId";
    };

    const resetFilterText = () => {
      store.filters.text = "";
    };

    const changeTotalItems = (value: number) => {
      store.totalItems = value;
    };

    const searchByText = (text: string) => {
      store.filters.text = text;
    };

    const fetchCurrentPokemon = (pokemon: string) => {
      const foundPokemon = store.pokemonsList.find(
        (pokemonItem) =>
          pokemon.toLowerCase() === pokemonItem.slug.toLowerCase()
      );
      if (foundPokemon) {
        store.currentPokemon = JSON.parse(JSON.stringify(foundPokemon));
      }
    };

    const toggleScroll = (isBlock: boolean) => {
      isBlock
        ? (rootStore.blockScroll = true)
        : (rootStore.blockScroll = false);
    };

    return {
      fetchPokemon,
      changeSort,
      toggleFilter,
      changeFilterSize,
      changeCustomFilters,
      resetFilter,
      changeTotalItems,
      searchByText,
      fetchCurrentPokemon,
      resetFilterText,
      toggleScroll,
    };
  });

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;

export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      pokemonsList: [],
      showFilter: false,
      filters: {
        types: [],
        height: [],
        weight: [],
        text: "",
        sort: "MinId",
      },
      currentPokemon: {
        id: 0,
        name: "Pokemon",
        slug: "",
        featured: "",
        collectibles_slug: "",
        detailPageURL: "",
        ThumbnailImage: "/pokeballInfo.png",
        ThumbnailAltText: "",
        number: "0000",
        height: 0,
        weight: 0,
        type: ["bug"],
      },
    });
  }

  return rootStore;
}
