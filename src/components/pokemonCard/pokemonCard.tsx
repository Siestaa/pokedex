import Image from 'next/image'
import { PokemonType } from '../pokemonType/pokemonType'
import styles from "./styles.module.css"
interface PokemonCardProps {
	name: string
	number: string
	img: string
	types: string[]
}

export const PokemonCard = ({ name, number, img, types }: PokemonCardProps) => {
	return (
		<div className={`${styles.cardContainer}  ${styles[types[0]]}`}>
			<h2 className={styles.cardName}>{name}</h2>
			<p className={styles.cardNumber}>#{number}</p>
			<Image className={styles.cardImage} src={img} width={180} height={180} alt='' />
			<div className={`${styles.typesCardContainer}`}>
				{types.map((type) =>
					<PokemonType key={type} pokemonType={type} />
				)}
			</div>
		</div>
	)

}