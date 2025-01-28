import { PokemonTypeIcons, typeIcons } from './pokemonTypeIcons'
import styles from "./styles.module.css"

interface PokemonTypeProps {
	pokemonType: keyof typeof typeIcons
}

export const PokemonType = ({ pokemonType }: PokemonTypeProps) => {
	return (
		<div className={`${styles.typeContainer} ${styles[pokemonType]}`}>
			<PokemonTypeIcons type={pokemonType} />
			<span className={styles.typeText}>{pokemonType}</span>
		</div>
	)
}