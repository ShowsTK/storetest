import { FC, useContext } from 'react'
import { ThemeContext } from '../../core/providers/ThemeProvider.tsx'
import styles from './Toggler.module.less'
import { supportedThemes } from '../../core/types'

export const Toggler: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleSwitchTheme = () => {
    if (theme === supportedThemes.light) {
      setTheme(supportedThemes.dark)
    }
    if (theme === supportedThemes.dark) {
      setTheme(supportedThemes.light)
    }
  }

  return (
    <div className={styles.toggler} onClick={handleSwitchTheme} title='Switch theme'>
      <div className={styles.ball} data-theme={theme} />
    </div>
  )
}
