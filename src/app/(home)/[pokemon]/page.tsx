"use client"

import { Modal } from "@/components/modal/modal"
import { PokemonInfo } from '@/components/pokemonInfo/pokemonInfo'
import axios from 'axios'
import { useParams } from "next/navigation"
import { useEffect, useState } from 'react'

const PokemonDetails = () => {
  const params = useParams()
  const pokemonName = params.pokemon as string
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState(null)
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
    <Modal>
      {isLoading ? <div>Loading...</div> : <PokemonInfo />
      }
    </Modal>
  )
}

export default PokemonDetails
