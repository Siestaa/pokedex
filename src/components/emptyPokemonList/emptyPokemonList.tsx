import { LoaderIcon } from '../../../public/icons'
import styles from "./styles.module.css"

export const EmptyPokemonList = () => {
	return (
		<div className={styles.listContainer}>
			<LoaderIcon />
			<p className={styles.emptyText}>No pokémon matched your search!</p>
		</div>)

}