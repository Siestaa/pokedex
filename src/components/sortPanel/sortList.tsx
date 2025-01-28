import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { CheckIcon } from '../../../public/icons'
import styles from './styles.module.css'

enum Sorts {
	Min = 'Lowest Number First',
	Max = 'Highest Number First',
	AZ = 'Alphabetically (A-Z)',
	ZA = 'Alphabetically (Z-A)',
}

const sortOptions = [
	{ id: 'MinId', label: Sorts.Min },
	{ id: 'MaxId', label: Sorts.Max },
	{ id: 'AToZ', label: Sorts.AZ },
	{ id: 'ZToA', label: Sorts.ZA },
]

interface SortListProps {
	currentSort: string
	setCurrentSort: (sort: string) => void
	setIsListOpen: (isOpen: boolean) => void
}

export const SortList = observer(
	({ currentSort, setCurrentSort, setIsListOpen }: SortListProps) => {
		const { changeSort } = useStore()

		const handleSortChange = (label: string, id: string) => {
			setCurrentSort(label)
			setIsListOpen(false)
			changeSort(id)
		}

		return (
			<div className={styles.sortListContainer}>
				{sortOptions.map(({ id, label }) => (
					<div
						key={id}
						className={`${styles.sortItem} ${label === currentSort ? styles.activeSort : ''
							}`}
						onClick={() => handleSortChange(label, id)}
					>
						{label}
						{label === currentSort && (
							<CheckIcon className={styles.checkIcon} />
						)}
					</div>
				))}
			</div>
		)
	}
)