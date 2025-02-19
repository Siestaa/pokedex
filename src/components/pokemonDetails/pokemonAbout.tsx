import { useEffect, useState } from 'react'
import { Pokemon } from './pokemonInfo.types'
import styles from "./styles.module.css"

interface PokemonAboutProps {
  pokemonInfo: Pokemon
  isLoading: boolean
}

export const PokemonAbout = ({ pokemonInfo, isLoading }: PokemonAboutProps) => {
  const [types, setTypes] = useState('')
  const [abilities, setAbilities] = useState('')

  useEffect(() => {
    setTypes(pokemonInfo.types.map((typeObj) => typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)).join(', '))
    setAbilities(pokemonInfo.abilities.map((abilObj) => abilObj.ability.name.charAt(0).toUpperCase() + abilObj.ability.name.slice(1)).join(', '))
  }, [pokemonInfo])
  return (
    <div className={styles.infoContainer}>
      <div className={styles.aboutStatsContainer}>
        <span>Species</span>
        <span className={isLoading ? styles.loadInfo : ''}>{`${isLoading ? '' : types}`}</span>
      </div>
      <div className={styles.aboutStatsContainer}>
        <span>Height</span>
        <span className={isLoading ? styles.loadInfo : ''}>{`${isLoading ? '' : pokemonInfo.height * 10} ${isLoading ? '' : 'cm'}`}</span>
      </div>
      <div className={styles.aboutStatsContainer}>
        <span>Weight</span>
        <span className={isLoading ? styles.loadInfo : ''}>{`${isLoading ? '' : pokemonInfo.weight / 10} ${isLoading ? '' : 'kg'}`}</span>
      </div>
      <div className={styles.aboutStatsContainer}>
        <span>Abilities</span>
        <span className={isLoading ? styles.loadInfo : ''}>{`${isLoading ? '' : abilities}`}</span>
      </div>
    </div>
  )
}
