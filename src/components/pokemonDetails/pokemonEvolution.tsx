import { useStore } from '@/models/rootStore'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { EvolArrowIcon, PokeballBackIcon } from '../../../public/icons'
import { EvolutionChain, fetchEvolution } from '../api/fetchEvolution'
import styles from "./styles.module.css"

interface PokemonEvolutionProps {
  pokemonName: string
}

interface IFetchedPokemon {
  img: string,
  name: string
}

export const PokemonEvolution = ({ pokemonName }: PokemonEvolutionProps) => {

  const [evolList, setEvolvList] = useState<EvolutionChain | null>(null)
  const [fetchedPokemons, setFetchedPokemons] = useState<IFetchedPokemon[]>([])
  const rootStore = useStore()

  useEffect(() => {
    fetchEvolution(pokemonName, setEvolvList)

  }, [pokemonName])

  useEffect(() => {
    if (evolList?.steps.length === 0) return
    const pokemonForFetch: string[] = []

    evolList?.steps.map((step) => {
      step.forEach((name) => {
        if (name !== '???' && !/^-?\d+(\.\d+)?$/.test(name)) {
          console.log(name)
          if (!rootStore.pokemonsList.some((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase())) pokemonForFetch.push(name)
        }
      })
    })

    if (pokemonForFetch.length) {
      axios.get('/pokemons', {
        params: {
          page: 1,
          limit: 50,
          filters: JSON.stringify({
            types: [],
            height: [],
            weight: [],
            text: `${pokemonForFetch.join(',')}`,
            sort: "MinId",
          }),
        },
      }).then((response) => {
        response.data.pokemons.forEach((pokemon: any) => {
          setFetchedPokemons((prev) => [...prev, { name: pokemon.name, img: pokemon.ThumbnailImage }])
        })
      })
    }
  }, [evolList])

  return (
    <div className={styles.infoContainer}>
      {evolList?.steps.map((evolStep, index) => (
        <div key={index} className={styles.evolList}>
          <div className={styles.evolImageContainer}>
            <PokeballBackIcon className={styles.pokeballIcon} />
            <Image className={styles.evolImage} src={rootStore.pokemonsList.find((pokemon) => pokemon.name.toLowerCase() === evolStep[0]?.toLowerCase())?.ThumbnailImage ?? fetchedPokemons.find((pokemon) => pokemon.name.toLowerCase() === evolStep[0]?.toLowerCase())?.img ?? '/pokeballInfo.png'} alt={rootStore.pokemonsList.find((pokemon) => pokemon.name.toLowerCase() === evolStep[0]?.toLowerCase())?.ThumbnailAltText ?? ''} width={128} height={128} />
          </div>
          <div className={styles.lvlInfo}>
            <EvolArrowIcon className={styles.evolArrow} />
            <span>{`lvl ${evolStep[2]}`}</span>
          </div>
          <div className={styles.evolImageContainer}>
            <PokeballBackIcon className={styles.pokeballIcon} />
            <Image className={styles.evolImage} src={rootStore.pokemonsList.find((pokemon) => pokemon.name.toLowerCase() === evolStep[1]?.toLocaleLowerCase())?.ThumbnailImage ?? fetchedPokemons.find((pokemon) => pokemon.name.toLowerCase() === evolStep[1]?.toLocaleLowerCase())?.img ?? '/pokeballInfo.png'} alt={rootStore.pokemonsList.find((pokemon) => pokemon.name.toLowerCase() === evolStep[1]?.toLocaleLowerCase())?.ThumbnailAltText ?? ''} width={128} height={128} />
          </div>
        </div>
      ))}
    </div >
  )
}
