import Image from 'next/image'
import { PokemonType } from '../pokemonType/pokemonType'
import styles from "./styles.module.css"
import { PokeballIcon } from '../../../public/icons'
interface PokemonCardProps {
	name: string
	number: string
	img: string
	types: Array<'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'water'>,
	alt: string
}

export const PokemonCard = ({ name, number, img, types, alt }: PokemonCardProps) => {
	return (
		<div className={`${styles.cardContainer}  ${styles[types[0]]}`}>
			<h2 className={styles.cardName}>{name}</h2>
			<p className={styles.cardNumber}>#{number}</p>
			<Image className={styles.cardImage} src={img} width={180} height={180} alt={alt} />
			<div className={`${styles.typesCardContainer}`}>
				{types.map((type) =>
					<PokemonType key={type} pokemonType={type} />
				)}
			</div>
			<PokeballIcon className={styles.pokebalIcon} />
		</div>
	)

}