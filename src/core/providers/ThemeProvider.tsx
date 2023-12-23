import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { supportedThemes, ThemeType } from '../types'

interface iThemeContext {
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<iThemeContext>({
  theme: supportedThemes.light,
  setTheme: () => {},
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const keyThemeStorage = 'color-theme'
  const themeValue = localStorage.getItem(keyThemeStorage)
  const [theme, setTheme] = useState<ThemeType>(
    !!themeValue ? (themeValue as ThemeType) : supportedThemes.light
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(keyThemeStorage, theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
