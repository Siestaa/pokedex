import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { LargeHeightIcon, LargeWeightIcon, MediumHeightIcon, MediumWeightIcon, SmallHeightIcon, SmallWeightIcon } from '../../../../public/icons'
import styles from "../styles.module.css"
import { PokemonHeight, PokemonWeight } from './filterTypes'

interface FilterTypeProps {
	size: PokemonHeight | PokemonWeight
	type: 'weight' | 'height',
}

const iconMapping = {
	height: {
		small: SmallHeightIcon,
		medium: MediumHeightIcon,
		large: LargeHeightIcon,
	},
	weight: {
		small: SmallWeightIcon,
		medium: MediumWeightIcon,
		large: LargeWeightIcon,
	},
}

export const FilterSize = observer(({ size, type }: FilterTypeProps) => {
	const rootStore = useStore()
	const [isActive, setIsActive] = useState(rootStore.filters[type].includes(size))

	const IconComponent = iconMapping[type][size]

	const toggleSize = (size: PokemonHeight | PokemonWeight, type: 'height' | 'weight') => {
		rootStore.changeFilterSize(size, type)
		setIsActive(prev => !prev)
	}

	return (
		<div
			className={`${styles.sizeContainer} ${isActive ? styles.activeSize : ''}`}
			onClick={() => toggleSize(size, type)}
		>
			<IconComponent className={styles.sizeIcon} />
		</div>
	)
})