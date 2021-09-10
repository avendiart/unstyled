import { Styles } from '@unstyled/styled'
import { tokens } from '../tokens'

export const card: {
  default: Styles
  variants: Partial<{
    [index: string]: Styles
  }>
} = {
  default: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingTop: tokens[6],
    paddingLeft: tokens[0],
    paddingRight: tokens[0],
    paddingBottom: tokens[6],
    gap: tokens[6],
    border: '1px solid #eeeeee',
  },
  variants: {},
}
