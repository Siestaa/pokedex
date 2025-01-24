import Image from 'next/image'
import styles from './styles.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Image src="/icons/Pokedex-logo.svg" alt='Logo' width={296} height={44} priority={false} />
		</header>
	)
}