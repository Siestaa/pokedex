import { useStore } from '@/models/rootStore'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowBackIcon } from '../../../public/icons'
import { PokemonType } from '../pokemonType/pokemonType'
import styles from "./styles.module.css"

export interface PokemonModel {
  abilities: string[]
  detailPageURL: string
  weight: number
  weakness: string[]
  number: string
  height: number
  collectibles_slug: string
  featured: string
  slug: string
  name: string
  ThumbnailAltText: string
  ThumbnailImage: string
  id: number
  type: Array<'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'water'>
}

export const PokemonInfoHeader = () => {
  const rootStore = useStore()
  const [pokemonInfo, setPokemonInfo] = useState<PokemonModel>({
    abilities: [],
    detailPageURL: "",
    weight: 0,
    weakness: [],
    number: "000",
    height: 0,
    collectibles_slug: "",
    featured: "",
    slug: "",
    name: "Unknown",
    ThumbnailAltText: "Pokemon",
    ThumbnailImage: "/default-pokemon.png",
    id: 0,
    type: ['bug'],
  })

  useEffect(() => {
    setPokemonInfo(rootStore.currentPokemon)
  }, [rootStore.currentPokemon])

  return (
    <div className={`${styles.infoHeader} ${styles[pokemonInfo.type[0]]}`}>
      <ArrowBackIcon className={styles.iconBack} />
      <Image className={styles.pokemonImage} src={pokemonInfo.ThumbnailImage} alt={pokemonInfo.ThumbnailAltText} width={180} height={180} />
      <div className={styles.mainInfo}>
        <span className={styles.pokemonId}>#{pokemonInfo.number}</span>
        <h2 className={styles.pokemonName}>{pokemonInfo.name}</h2>
        <div className={`${styles.typesCardContainer}`}>
          {pokemonInfo.type.map((type) =>
            <PokemonType key={type} pokemonType={type} />
          )}
        </div>
      </div>
      <span className={styles.pokemonNameBack}>{pokemonInfo.name}</span>
    </div>
  )
}
