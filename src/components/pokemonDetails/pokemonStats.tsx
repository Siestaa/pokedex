import { useEffect, useState } from 'react'
import { Pokemon, PokemonStat } from './pokemonInfo.types'
import styles from "./styles.module.css"

interface PokemonAboutProps {
  pokemonInfo: Pokemon
}

export const PokemonStats = ({ pokemonInfo }: PokemonAboutProps) => {
  const [stats, setStats] = useState<PokemonStat[] | null>(null)
  const [avgStat, setAvgStat] = useState(0)

  useEffect(() => {
    setStats(pokemonInfo.stats)
    setAvgStat(Math.ceil(pokemonInfo.stats?.reduce((acc, stat) => acc + stat.base_stat, 0) / pokemonInfo.stats?.length))
  }, [pokemonInfo])
  return (
    <div className={styles.aboutContainer}>
      {stats?.map((stat) => (
        <div key={stat.stat.name} className={styles.statsContainer}>
          <span className={styles.statsName}>{stat.stat.name.split('-').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')}</span>
          <span className={styles.statsValue}>{stat.base_stat}</span>
          <span style={{
            "--statWidth": `${stat.base_stat <= 100 ? stat.base_stat : 100}%` as unknown as string,
          } as React.CSSProperties} className={styles.statsLine}></span>
        </div>
      ))
      }
      <div className={styles.statsContainer}>
        <span>Total avg</span>
        <span>{avgStat}</span>
        <span style={{
          "--statWidth": `${avgStat}%` as unknown as string,
        } as React.CSSProperties} className={styles.statsLine}></span>
      </div>
    </div >
  )
}
