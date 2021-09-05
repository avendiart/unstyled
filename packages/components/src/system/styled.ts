import { createStyled, createUseStyles } from '@unstyled/styled'
import { useTheme } from './theme'

export const useStyles = createUseStyles(useTheme)
export const styled = createStyled(useStyles)
