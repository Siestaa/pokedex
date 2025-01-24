import styles from "./styles.module.css"
import Search from "/public/icons/search.svg"
export const SearchPanel = () => {
	return (
		<div className={styles.searchContainer}>
			<Search className={styles.searchIcon} />
			<input className={styles.searchInput} type='text' placeholder='Pokemon name, number or type' />
			<button className={styles.searchButton} type='button'>Search</button>
		</div>
	)
}