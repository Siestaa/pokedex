"use client"

import { Modal } from "@/components/modal/modal"
import { useParams } from "next/navigation"

const PokemonDetails = () => {
  const params = useParams()
  const pokemonName = params.pokemon as string

  return (
    <Modal>
      <div className="">
        <h1>Покемон: {pokemonName}</h1>
        <p>Детальная информация о покемоне будет здесь.</p>
      </div>
    </Modal>
  )
}

export default PokemonDetails
