import { CSSObject } from 'styled-components'
import { createContext, useContext, useMemo } from 'react'
import { styles } from './theme/styles'
import { tokens } from './theme/tokens'

export const theme = {
  tokens,
  styles,
} as const

export type Theme = typeof theme

export const ThemeContext = createContext<Theme>(theme)

export const useTheme = () => useContext(ThemeContext)

export type StylesFunction<C extends keyof Theme['styles']> = ReturnType<Theme['styles'][C]>

export type StylesProps<C extends keyof Theme['styles']> = StylesFunction<C> extends (
  props: infer P,
) => any
  ? P extends object
    ? P
    : {}
  : {}

export const useStyles = <C extends keyof Theme['styles']>(
  component: C,
  props?: StylesProps<C>,
) => {
  const theme = useTheme()
  return useMemo(
    () => theme.styles[component](theme.tokens)(props ?? {}),
    [component, theme, props],
  )
}
