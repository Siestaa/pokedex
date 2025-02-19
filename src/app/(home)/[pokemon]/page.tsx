"use client"

import { Modal } from "@/components/modal/modal"
import { PokemonInfo } from '@/components/pokemonInfo/pokemonInfo'
import { useStore } from '@/models/rootStore'
import { useParams } from "next/navigation"
import { useEffect } from 'react'



const PokemonDetails = () => {
  const params = useParams()
  const pokemonName = params.pokemon as string

  const rootStore = useStore();

  useEffect(() => {
    rootStore.toggleScroll(true)

    return(() => {
      rootStore.toggleScroll(false)
    })
  })

  return (
    <Modal>
      <PokemonInfo pokemonName={pokemonName} />
    </Modal>
  )
}

export default PokemonDetails
