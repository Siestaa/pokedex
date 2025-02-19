'use client'
import { useEffect, useState } from 'react'
import { fetchPokemon } from '../api/fetchPokemon'
import { PokemonAbout } from './pokemonAbout'
import { PokemonEvolution } from './pokemonEvolution'
import { defaultPokemon, Pokemon } from './pokemonInfo.types'
import { PokemonStats } from './pokemonStats'
import styles from "./styles.module.css"

interface PokemonDetailsProps {
  pokemonName: string
}

enum ITabs {
  about = 'about',
  stats = 'stats',
  evol = 'evol',
}

export const PokemonDetails = ({ pokemonName }: PokemonDetailsProps) => {
  const [currentTab, setCurrentTab] = useState('about')
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>(defaultPokemon)

  useEffect(() => {
    fetchPokemon(pokemonName,
      setIsLoading,
      setPokemonInfo)
  }, [pokemonName])

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.infoTabs}>
        {Object.values(ITabs).map((tab) => (
          <div
            key={tab}
            className={`${styles.infoTab} ${currentTab === tab ? styles.isActive : ''}`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>
      <div className={styles.currentInfo}>
        {currentTab === ITabs.about ? (
          <PokemonAbout pokemonInfo={pokemonInfo} isLoading={isLoading} />
        ) : currentTab === ITabs.stats ? (
          <PokemonStats pokemonInfo={pokemonInfo} />
        ) : (
          <PokemonEvolution pokemonName={pokemonName} />
        )}
      </div>
    </div>
  )
}
