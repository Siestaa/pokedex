import axios from "axios";
import { EvolutionChainInfo } from "../pokemonDetails/pokemonInfo.types";

type EvolutionStep = [string, string, string] | [];

export interface EvolutionChain {
  steps: EvolutionStep[];
}

const buildEvolutionChain = (
  responseEvol: EvolutionChainInfo,
  currentEvol: EvolutionChain = { steps: [] }
): EvolutionChain => {
  const evolList = currentEvol;

  if (responseEvol.evolves_to.length > 0) {
    responseEvol.evolves_to.forEach((evol) => {
      const evolStep: EvolutionStep = [
        responseEvol.species.name,
        evol.species.name,
        evol.evolution_details[0]?.min_level?.toString() ?? "???",
      ];

      evolList.steps.push(evolStep);

      buildEvolutionChain(evol, evolList);
    });
  }

  return evolList;
};

export const fetchEvolution = async (
  pokemonName: string,
  setEvolChain: (obj: EvolutionChain) => void
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
