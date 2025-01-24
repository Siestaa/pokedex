import { FilterButton } from '../filter/filterButton'
import { SortPanel } from '../sortPanel/sortPanel'
import styles from "./styles.module.css"

export const FilterSortPanel = () => {
	return (
		<div className={styles.container}>
			<SortPanel />
			<FilterButton />
		</div>
	)
}