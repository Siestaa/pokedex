"use client"

import Image from 'next/image'
import { useRef } from 'react'
import { PokeballIcon } from '../../../public/icons'
import { PokemonType } from '../pokemonType/pokemonType'
import { calculateCoordinate } from './calculateCoordinate'
import styles from "./styles.module.css"
interface PokemonCardProps {
	name: string
	number: string
	img: string
	types: Array<'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'water'>,
	alt: string
}

export const PokemonCard = ({ name, number, img, types, alt }: PokemonCardProps) => {
	const card = useRef<HTMLDivElement>(null)
	const glow = useRef<HTMLDivElement>(null)



	const getCoordinate = (e: MouseEvent) => {
		const bounds = card.current?.getBoundingClientRect()
		if (bounds) {
			calculateCoordinate(e, bounds, card as React.RefObject<HTMLDivElement>, glow as React.RefObject<HTMLDivElement>)
		}
	}

	const moveCard = () => {
		document.addEventListener('mousemove', getCoordinate)
	}

	const leaveCard = () => {
		document.removeEventListener('mousemove', getCoordinate)
		if (card.current) card.current.style.transform = ''
		if (glow.current) glow.current.style.backgroundImage = ''
	}


	return (
		<div className={`${styles.cardContainer}  ${styles[types[0]]}`}
			ref={card}
			onMouseEnter={moveCard}
			onMouseLeave={leaveCard}>
			<div ref={glow} className={styles.glow} />
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