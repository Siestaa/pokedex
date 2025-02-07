import { useEffect, useState } from 'react'
import { Pokemon } from './pokemonInfo.types'
import styles from "./styles.module.css"

interface PokemonAboutProps {
  pokemonInfo: Pokemon
}

export const PokemonAbout = ({ pokemonInfo }: PokemonAboutProps) => {
  const [types, setTypes] = useState('')
  const [abilities, setAbilities] = useState('')

  useEffect(() => {
    setTypes(pokemonInfo.types.map((typeObj) => typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)).join(', '))
    setAbilities(pokemonInfo.abilities.map((abilObj) => abilObj.ability.name.charAt(0).toUpperCase() + abilObj.ability.name.slice(1)).join(', '))
  }, [pokemonInfo])
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutStatsContainer}>
        <span>Species</span>
        <span>{types}</span>
      </div>
      <div className={styles.aboutStatsContainer}>
        <span>Height</span>
        <span>{pokemonInfo.height * 10}cm</span>
      </div>
      <div className={styles.aboutStatsContainer}>
        <span>Weight</span>
        <span>{pokemonInfo.weight / 10}kg</span>
      </div>
      <div className={styles.aboutStatsContainer}>
        <span>Abilities</span>
        <span>{abilities}</span>
      </div>
    </div>
  )
}
