'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { PokemonAbout } from './pokemonAbout'
import { defaultPokemon, Pokemon } from './pokemonInfo.types'
import styles from "./styles.module.css"

interface PokemonDetailsProps {
  pokemonName: string
}

enum ITabs {
  about = 'about',
  stats = 'stats',
  evol = 'evol'
}

export const PokemonDetails = ({ pokemonName }: PokemonDetailsProps) => {
  const [currentTab, setCurrentTab] = useState('about')
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>(defaultPokemon)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, { signal: controller.signal })
      .then((response) => {
        if (!controller.signal.aborted) {
          setPokemonInfo(response.data)
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.warn("Запрос был отменён:", error.message)
        } else {
          setError("Не удалось загрузить данные покемона.")
          console.error("Ошибка при получении данных:", error)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => {
      controller.abort()
    }
  }, [pokemonName])

  return (
    <div className={styles.infoContainer}>
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
        {currentTab === ITabs.about ?
          <PokemonAbout pokemonInfo={pokemonInfo} />
          : currentTab === ITabs.stats ?
            <div>Stats</div>
            : <div>Evolv</div>
        }
      </div>
    </div>
  )
}
