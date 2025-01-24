import { useState } from 'react'
import styles from "./styles.module.css"
import Checkbox from "/public/icons/check-box.svg"
import EmptyCheckbox from "/public/icons/empty-checkbox.svg"

interface FilterTypeProps {
	text: string
}

export const FilterType = ({ text }: FilterTypeProps) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.typesContainer} onClick={() => setIsActive(prev => !prev)}>
			{isActive ? <Checkbox /> : <EmptyCheckbox />}
			<span className={styles.typeText}>{text}</span>
		</div>
	)
}