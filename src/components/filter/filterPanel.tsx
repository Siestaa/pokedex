import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { FilterApplyButtons } from './filterApplyButtons'
import { FilterSize } from './filterSize'
import { FilterType } from './filterType'
import { PokemonHeight, PokemonType, PokemonWeight } from './filterTypes'
import styles from "./styles.module.css"
import Cross from "/public/icons/cross.svg"

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
		rootStore.openFilter(false)
	}

	return (
		<div className={styles.filterContainer}>
			<div className={styles.titleContainer}>
				<h2 className={styles.filterTitle}>Filters</h2>
				<Cross className={styles.crossIcon} onClick={closeFilter} />
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
	)
})