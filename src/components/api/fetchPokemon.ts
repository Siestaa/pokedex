import axios from "axios";
import { Pokemon } from "../pokemonDetails/pokemonInfo.types";

export const fetchPokemon = (
  pokemonName: string,
  setIsLoading: (arg: boolean) => void,
  setPokemonInfo: (obj: Pokemon) => void
) => {
  const controller = new AbortController();
  setIsLoading(true);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      signal: controller.signal,
    })
    .then((response) => {
      if (!controller.signal.aborted) {
        setPokemonInfo(response.data as Pokemon);
      }
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.warn("Запрос был отменён:", error.message);
      } else {
        console.error("Ошибка при получении данных:", error);
      }
    })
    .finally(() => {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    });

  return () => {
    controller.abort();
  };
};
