import { Styles } from '@unstyled/styled'
import { tokens } from '../tokens'

export const cardContent: {
  default: Styles
  variants: Partial<{
    [index: string]: Styles
  }>
} = {
  default: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: tokens[0],
    paddingLeft: tokens[6],
    paddingRight: tokens[6],
    paddingBottom: tokens[0],
  },
  variants: {},
}
