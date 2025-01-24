import styles from "./styles.module.css"

interface PokemonTypeProps {
	pokemonType: string
}

export const PokemonType = ({ pokemonType }: PokemonTypeProps) => {
	return (
		<div className={`${styles.typeContainer} ${styles[pokemonType]}`}>
			<span className={styles.typeText}>{pokemonType}</span>
		</div>
	)
}