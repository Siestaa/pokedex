import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { SearchIcon } from '../../../public/icons'
import styles from './styles.module.css'

export const SearchPanel = observer(() => {
	const { searchByText, fetchPokemon, filters } = useStore()
	const searchInputRef = useRef<HTMLInputElement | null>(null)

	const handleSearch = () => {
		const searchValue = searchInputRef.current?.value?.trim()
		if (searchValue || filters.text !== '') {
			searchByText(searchValue ?? '')
			fetchPokemon()
			if (searchInputRef.current) {
				searchInputRef.current.value = ''
			}
		}
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch()
		}
	}

	return (
		<div className={styles.searchContainer}>
			<SearchIcon className={styles.searchIcon} />
			<input
				className={styles.searchInput}
				ref={searchInputRef}
				type="text"
				placeholder="Pokemon name, number or type"
				onKeyDown={handleKeyDown}
			/>
			<button
				className={styles.searchButton}
				onClick={handleSearch}
				type="button"
			>
				Search
			</button>
		</div>
	)
})