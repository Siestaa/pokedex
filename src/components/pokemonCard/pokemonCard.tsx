"use client"

import Image from 'next/image'
import Link from 'next/link'
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
  slug: string
}

export const PokemonCard = ({ name, number, img, types, alt, slug }: PokemonCardProps) => {
  const card = useRef<HTMLDivElement>(null)
  const glow = useRef<HTMLDivElement>(null)

  const getCoordinate = (e: MouseEvent) => {
    const bounds = card.current?.getBoundingClientRect()
    if (bounds) {
      calculateCoordinate(e, bounds, card as React.RefObject<HTMLDivElement>, glow as React.RefObject<HTMLDivElement>)
    }
  }

  const moveCard = () => {
    if (card.current) card.current.addEventListener('mousemove', getCoordinate)
    if (card.current) console.log(card.current.style.transform)
  }

  const leaveCard = () => {
    if (card.current) {
      card.current.removeEventListener('mousemove', getCoordinate)
      card.current.style.transform = ''
    }
    if (glow.current) glow.current.style.backgroundImage = ''
  }


  return (
    <Link href={`/${slug}`}>
      <div className={`${styles.cardContainer}  ${styles[types[0]]}`}
        ref={card}
        onMouseEnter={moveCard}
        onMouseLeave={leaveCard}>
        <div ref={glow} className={styles.glow} />
        <h2 className={styles.cardName}>{name}</h2>
        <p className={styles.cardNumber}>#{number}</p>
        <Image className={styles.cardImage} src={img} width={180} height={180} alt={alt} priority={true} />
        <div className={`${styles.typesCardContainer}`}>
          {types.map((type) =>
            <PokemonType key={type} pokemonType={type} />
          )}
        </div>
        <PokeballIcon className={styles.pokeballIcon} />
      </div>
    </Link>
  )

}
