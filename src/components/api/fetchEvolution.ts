import axios from "axios";
import { IEvolution } from "../pokemonDetails/pokemonInfo.types";

const buildEvolutionChain = (
  responseEvol: any,
  currentEvol: IEvolution[] = [],
  level: number = 0
): IEvolution[] => {
  const nestLevel = level + 1;

  currentEvol.push({
    name: responseEvol.species.name ?? "Default",
    lvl: responseEvol.evolution_details?.[0]?.min_level ?? "0",
    isLast: !responseEvol.evolves_to || responseEvol.evolves_to.length === 0,
    nestLevel: nestLevel,
  });

  if (responseEvol.evolves_to && responseEvol.evolves_to.length > 0) {
    responseEvol.evolves_to.forEach((item: any) =>
      buildEvolutionChain(item, currentEvol, nestLevel)
    );
  }

  return currentEvol;
};

export const fetchEvolution = async (
  pokemonName: string,
  setEvolChain: (obj: IEvolution[]) => void
) => {
  const controller = new AbortController();

  try {
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`,
      {
        signal: controller.signal,
      }
    );

    const evolutionChainResponse = await axios.get(
      speciesResponse.data.evolution_chain.url,
      {
        signal: controller.signal,
      }
    );

    const evolvChain = buildEvolutionChain(evolutionChainResponse.data.chain);

    setEvolChain(evolvChain);
  } catch (error) {
    console.error("Error fetching evolution chain:", error);
  } finally {
    controller.abort();
  }
};
