import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import styles from "../styles.module.css"

export const FilterApplyButtons = observer(() => {
  const rootStore = useStore()
  const resetFilters = () => {
    rootStore.resetFilter()
    rootStore.toggleFilter(false)
    rootStore.toggleScroll(false)
    rootStore.fetchPokemon()
  }

  const useCustomFilters = () => {
    rootStore.toggleFilter(false)
    rootStore.toggleScroll(false)
    rootStore.fetchPokemon()
  }

  return (
    <div className={styles.buttonsContainer}>
      <button className={`${styles.button}`} onClick={resetFilters}>Reset filters</button>
      <button className={`${styles.button} ${styles.applyButton}`} onClick={useCustomFilters}>Apply filters</button>
    </div>
  )
})
