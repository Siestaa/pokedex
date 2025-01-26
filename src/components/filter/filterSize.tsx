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
	type: 'weight' | 'height',
}

const iconMapping = {
	height: {
		small: SmallHeight,
		medium: MediumHeight,
		large: LargeHeight,
	},
	weight: {
		small: SmallWeight,
		medium: MediumWeight,
		large: LargeWeight,
	},
}

export const FilterSize = ({ size, type }: FilterTypeProps) => {
	const [isActive, setIsActive] = useState(false)

	const IconComponent = iconMapping[type][size]

	return (
		<div
			className={`${styles.sizeContainer} ${isActive ? styles.activeSize : ''}`}
			onClick={() => setIsActive((prev) => !prev)}
		>
			<IconComponent className={styles.sizeIcon} />
		</div>
	)
}