import { createContext, useContext } from 'react'
import { styles } from './theme/styles'
import { tokens } from './theme/tokens'

export const theme = {
  tokens,
  styles,
} as const

export const ThemeContext = createContext(theme)

export const useTheme = () => {
  return useContext(ThemeContext)
}
