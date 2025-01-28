"use client"

import { useStore } from '@/models/rootStore'
import { FilterIcon } from '../../../../public/icons'
import styles from "../styles.module.css"

export const FilterButton = () => {
	const rootStore = useStore()

	const amountFilters = rootStore.filters.types.length + rootStore.filters.height.length + rootStore.filters.weight.length

	const onClick = () => {
		rootStore.toggleFilter(true)
	}

	return (
		<button type='button' className={styles.filterButton} onClick={onClick}>
			{amountFilters > 0 ? <div className={styles.filterAmount}>{amountFilters}</div> : <FilterIcon className={styles.filterIcon} />}
			Filters
		</button>
	)
}