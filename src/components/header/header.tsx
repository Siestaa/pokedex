import Link from 'next/link'
import { PokedexLogoIcon } from '../../../public/icons'
import styles from './styles.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link href="/" className={styles.logoIcon}>
				<PokedexLogoIcon />
			</Link>
		</header>
	)
}