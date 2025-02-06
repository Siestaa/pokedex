
import { PokedexLogoIcon } from '../../../public/icons'
import styles from './styles.module.css'

export const Header = () => {

  return (
    <header className={styles.header}>
      <PokedexLogoIcon className={styles.logoIcon} onClick={() => window.location.href = '/'} />
    </header>
  )
}
