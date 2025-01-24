import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import styles from "./styles.module.css"
import Check from "/public//icons//check.svg"

enum Sorts {
	Min = "Lowest Number First",
	Max = "Highest Number First",
	AZ = "Alphabetically (A-Z)",
	ZA = "Alphabetically (Z-A)",
}

const sortOptions = [
	{ id: "MinId", text: Sorts.Min },
	{ id: "MaxId", text: Sorts.Max },
	{ id: "AToZ", text: Sorts.AZ },
	{ id: "ZToA", text: Sorts.ZA },
]

interface SortListProps {
	currentSort: string
	setCurrentSort: (el: string) => void
	setIsListOpen: (el: boolean) => void
}

export const SortList = observer(({ currentSort, setCurrentSort, setIsListOpen }: SortListProps) => {
	const rootStore = useStore()

	const handleSortChange = (sort: Sorts, id: string) => {
		setCurrentSort(sort)
		setIsListOpen(false)
		rootStore.changeSort(id)
	}

	return (
		<div className={styles.sortListContainer}>
			{sortOptions.map(({ id, text }) => (
				<div
					key={id}
					className={`${styles.sortItem} ${text === currentSort ? styles.activeSort : ""
						}`}
					onClick={() => handleSortChange(text, id)}
				>
					{text}
					{text === currentSort && <Check className={styles.checkIcon} />}
				</div>
			))}
		</div>
	)
})