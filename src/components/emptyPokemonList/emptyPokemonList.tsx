import { LoaderIcon } from '../../../public/icons'
import styles from "./styles.module.css"

export const EmptyPokemonList = () => {
	return (
		<div className={styles.listContainer}>
			<p className={styles.emptyText}></p>
			<LoaderIcon />
		</div>)

}