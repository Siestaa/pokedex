import { observer } from 'mobx-react-lite'
import styles from "./styles.module.css"

export const FilterApplyButtons = observer(() => {
	return (
		<div className={styles.buttonsContainer}>
			<button className={`${styles.button}`}>Reset filters</button>
			<button className={`${styles.button} ${styles.applyButton}`}>Apply filters</button>
		</div>
	)
})