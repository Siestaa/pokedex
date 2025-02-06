"use client"

import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const PokemonDetails = observer(() => {
  const rootStore = useStore()
  useEffect(() => {
    rootStore.resetFilter()
  }, [])
  return (
    <></>
  )
})

export default PokemonDetails
