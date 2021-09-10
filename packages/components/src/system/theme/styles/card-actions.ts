import { Styles } from '@unstyled/styled'
import { tokens } from '../tokens'

export const cardActions: {
  default: Styles
  variants: Partial<{
    [index: string]: Styles
  }>
} = {
  default: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    paddingTop: tokens[0],
    paddingLeft: tokens[6],
    paddingRight: tokens[6],
    paddingBottom: tokens[0],
    gap: tokens[3],
  },
  variants: {},
}
