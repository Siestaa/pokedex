import { IEvolution } from './pokemonInfo.types'
import styles from "./styles.module.css"

interface PokemonEvolution {
  pokemonEvolv: IEvolution[]
}

export const PokemonEvolution = ({ pokemonEvolv }: PokemonEvolution) => {


  return (
    <div className={styles.evolvsContainer}>
      {!!pokemonEvolv && pokemonEvolv.length >= 0 && pokemonEvolv.map((evolvItem) => (
        <div key={evolvItem.name}>
          {evolvItem.nestLevel === 2 && (
            <span>{`${evolvItem.name}`}</span>
          )}
        </div>
      ))}
    </div >
  )
}
