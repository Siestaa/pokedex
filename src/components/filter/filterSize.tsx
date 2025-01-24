import { useState } from 'react'
import { PokemonHeight, PokemonWeight } from './filterTypes'
import styles from "./styles.module.css"
import LargeHeight from '/public/icons/large-height.svg'
import LargeWeight from '/public/icons/large-weight.svg'
import MediumHeight from '/public/icons/medium-height.svg'
import MediumWeight from '/public/icons/medium-weight.svg'
import SmallHeight from '/public/icons/small-height.svg'
import SmallWeight from '/public/icons/small-weight.svg'

interface FilterTypeProps {
	size: PokemonHeight | PokemonWeight
	type: 'weight' | 'height'
}

export const FilterType = ({ size, type }: FilterTypeProps) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.typesContainer} onClick={() => setIsActive(prev => !prev)}>
			<SmallHeight />
			<SmallWeight />
			<MediumHeight />
			<MediumWeight />
			<LargeHeight />
			<LargeWeight />
		</div>
	)
}