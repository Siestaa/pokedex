import styles from "./styles.module.css"
import FilterIcon from "/public/icons/filter.svg"

export const FilterButton = () => {
	return (
		<button className={styles.filterButton}>
			<FilterIcon className={styles.filterIcon} />
			Filters
		</button>
	)
}