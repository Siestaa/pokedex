import { FilterType } from './filterType'
import { PokemonType } from './filterTypes'
import styles from "./styles.module.css"
import Cross from "/public/icons/cross.svg"

export const FilterPanel = () => {
	const pokemonTypes: { id: string; text: PokemonType }[] = Object.values(PokemonType).map((type) => ({
		id: type.toLowerCase(),
		text: type,
	}))

	return (
		<div className={styles.filterContainer}>
			<div className={styles.titleContainer}>
				<h2 className={styles.filterTitle}>Filters</h2>
				<Cross />
			</div>
			<div className={styles.typesContainer}>
				<h3 className={styles.typesTitle}>Types</h3>
				{pokemonTypes.map((type) => <div className={styles.typeContainer}>
					<FilterType key={type.id} text={type.text} />
				</div>)}
			</div>
			<div className={styles.typesContainer}>
				<h3 className={styles.typesTitle}>Height</h3>

			</div>
			<div className={styles.typesContainer}>
				<h3 className={styles.typesTitle}>Weight</h3>

			</div>
		</div>
	)
}