import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { CrossIcon } from '../../../public/icons'
import styles from "./styles.module.css"
import { FilterApplyButtons } from './ui/filterApplyButtons'
import { FilterSize } from './ui/filterSize'
import { FilterType } from './ui/filterType'
import { PokemonHeight, PokemonType, PokemonWeight } from './ui/filterTypes'

const preventScroll = (event: WheelEvent | TouchEvent) => {
  event.preventDefault()
}

const disableScroll = () => {
  const mainComp = document?.querySelector<HTMLElement>(".blockScroll")
  if (mainComp) {
    mainComp.addEventListener("wheel", preventScroll, { passive: false })
    mainComp.addEventListener("touchmove", preventScroll, { passive: false })
  }

}

const enableScroll = () => {
  const mainComp = document?.querySelector<HTMLElement>(".blockScroll")
  if (mainComp) {
    mainComp.removeEventListener("wheel", preventScroll)
    mainComp.removeEventListener("touchmove", preventScroll)
  }
}

export const FilterPanel = observer(() => {
  const rootStore = useStore()

  const pokemonTypes: { id: string; text: PokemonType }[] = Object.values(PokemonType).map((type) => ({
    id: type.toLowerCase(),
    text: type,
  }))

  const pokemonHeights: { id: string, size: PokemonHeight }[] = Object.values(PokemonHeight).map((size) => ({
    id: size.toLowerCase(),
    size: size
  }))

  const pokemonWeights: { id: string, size: PokemonWeight }[] = Object.values(PokemonWeight).map((size) => ({
    id: size.toLowerCase(),
    size: size
  }))

  const closeFilter = () => {
    rootStore.toggleFilter(false)
    rootStore.toggleScroll(false)
  }

  useEffect(() => {
    disableScroll()

    return () => {
      enableScroll()
    }
  }, [])


  return (
    <>
      <div className='filterBlur' onClick={closeFilter} />
      <div className={styles.filterContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.filterTitle}>Filters</h2>
          <CrossIcon className={styles.crossIcon} onClick={closeFilter} />
        </div>
        <div className={styles.typesContainer}>
          <h3 className={styles.typesTitle}>Types</h3>
          {pokemonTypes.map((type) => <div key={type.id} className={styles.typeContainer}>
            <FilterType text={type.text} />
          </div>)}
        </div>
        <div className={styles.typesContainer}>
          <h3 className={styles.typesTitle}>Height</h3>
          {pokemonHeights.map((size) => <FilterSize key={size.id} size={size.size} type='height' />)}
        </div>
        <div className={styles.typesContainer}>
          <h3 className={styles.typesTitle}>Weight</h3>
          {pokemonWeights.map((size) => <FilterSize key={size.id} size={size.size} type='weight' />)}
        </div>
        <FilterApplyButtons />
      </div>
    </>
  )
})
