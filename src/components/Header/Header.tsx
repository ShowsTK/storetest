import { Menu } from '../Menu/Menu'
import styles from './Header.module.less'
import { Toggler } from '../Toggler/Toggler.tsx'
import { FC } from 'react'
import { FilterIcon } from '../Icons/Filter'
import commonStyles from '../../styles/common.module.less'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs.tsx'

export const Header: FC = () => (
  <header className={commonStyles.wrapper}>
    <div className={styles.searchNav}>
      <input type='text' className={styles.search} placeholder='Search' />
      <Menu />
    </div>
    <div className={styles.optionsNav}>
      <Breadcrumbs />
      <div className={styles.options}>
        <Toggler />
        <FilterIcon />
      </div>
    </div>
  </header>
)
