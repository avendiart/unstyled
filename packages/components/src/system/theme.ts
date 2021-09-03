import { createContext, useContext } from 'react'
import { styles } from './theme/styles'
import { tokens } from './theme/tokens'

export const ThemeContext = createContext({
  tokens,
  styles,
} as const)

export const useTheme = () => {
  return useContext(ThemeContext)
}
