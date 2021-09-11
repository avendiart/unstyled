import { Styles } from '@unstyled/styled'
import { tokens } from '../tokens'

export const text: {
  default: Styles
  variants: Partial<{
    [index: string]: Styles
  }>
} = {
  default: {
    marginTop: tokens[0],
    marginLeft: tokens[0],
    marginRight: tokens[0],
    marginBottom: tokens[0],
    fontFamily: 'sans-serif',
    lineHeight: '24px',
    fontSize: '16px',
  },
  variants: {},
}
