"use client"

import { Modal } from "@/components/modal/modal"
import { PokemonInfo } from '@/components/pokemonInfo/pokemonInfo'
import axios from 'axios'
import { useParams } from "next/navigation"
import { useEffect, useState } from 'react'



const PokemonDetails = () => {
  const params = useParams()
  const pokemonName = params.pokemon as string

  return (
    <Modal>
      <PokemonInfo pokemonName={pokemonName} />
      
    </Modal>
  )
}

export default PokemonDetails
