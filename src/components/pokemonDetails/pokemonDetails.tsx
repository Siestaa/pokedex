'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from "./styles.module.css"

interface PokemonDetailsProps {
  pokemonName: string
}

interface PokemonInfoType {
  name: string
  weight: number
  height: number
  types: string[]
  abilities: string[]
  detailPageURL: string
}

export const PokemonDetails = ({ pokemonName }: PokemonDetailsProps) => {
  const [currentTab, setCurrentTab] = useState('about')
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoType | null>(null)
  const [error, setError] = useState<string | null>(null)

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
        <div className={`${styles.infoTab} ${currentTab === 'about' ? styles.isActive : null}`} onClick={() => setCurrentTab('about')}>About</div>
        <div className={`${styles.infoTab} ${currentTab === 'stats' ? styles.isActive : null}`} onClick={() => setCurrentTab('stats')}>Base stats</div>
        <div className={`${styles.infoTab} ${currentTab === 'evol' ? styles.isActive : null}`} onClick={() => setCurrentTab('evol')}>Evolution</div>
      </div>
    </div>
  )
}
