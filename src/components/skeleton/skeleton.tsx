import styles from "./styles.module.css"

export const Skeleton = () => {
	return (
		<div className={styles.skeletonContainer}>
			<div className={styles.skeletonName}></div>
			<div className={styles.skeletonNumber}></div>
			<div className={styles.skeletonImage} />
			<div className={styles.skeletonTypesContainer}>
				{Array.from({ length: 2 }).map((_, index) => (
					<div key={index} className={styles.skeletonType}></div>
				))}
			</div>
		</div>
	)
}