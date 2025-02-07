'use client'

import { useStore } from '@/models/rootStore'
import { useEffect } from 'react'
import { PokemonDetails } from '../pokemonDetails/pokemonDetails'
import { PokemonInfoHeader } from './pokemonInfoHeader'
import styles from "./styles.module.css"

interface PokemonInfoProps {
  pokemonName: string
}

export const PokemonInfo = ({ pokemonName }: PokemonInfoProps) => {
  const rootStore = useStore()

  useEffect(() => {
    rootStore.fetchCurrentPokemon(pokemonName)
  }, [pokemonName])

  return (
    <div className={styles.infoContainer}>
      <PokemonInfoHeader />
      <PokemonDetails pokemonName={pokemonName} />
    </div>
  )
}
