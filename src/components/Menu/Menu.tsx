import styles from './Menu.module.less'
import { FC, useState } from 'react'

export const Menu: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <nav
      className={styles.menuMain}
      onClick={() => setIsActive(!isActive)}
      onBlur={() => {
        isActive && setIsActive(!isActive)
      }}
    >
      <button
        className={`${styles.menuToggle} ${styles.btnResetStyles} ${isActive && styles.active}`}
      >
        <span />
      </button>
      <ul className={`${styles.menu} ${isActive && styles.active}`}>
        <li className={styles.menuItem}>
          <a href='#' className={styles.menuLink}>
            Home
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#' className={styles.menuLink}>
            Catalog
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#' className={styles.menuLink}>
            Discounts
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#' className={styles.menuLink}>
            Contacts
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#' className={styles.menuLink}>
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}
