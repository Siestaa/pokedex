"use client"

import { useStore } from '@/models/rootStore'
import styles from "./styles.module.css"
import FilterIcon from "/public/icons/filter.svg"

export const FilterButton = () => {
	const rootStore = useStore()

	const onClick = () => {
		rootStore.openFilter(true)
		console.log(rootStore.showFilter)
	}

	return (
		<button type='button' className={styles.filterButton} onClick={onClick}>
			<FilterIcon className={styles.filterIcon} />
			Filters
		</button>
	)
}