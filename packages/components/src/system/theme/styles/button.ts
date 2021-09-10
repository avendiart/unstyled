import { Styles } from '@unstyled/styled'
import { tokens } from '../tokens'

export const button: {
  default: Styles
  variants: Partial<{
    [index: string]: Styles
  }>
} = {
  default: {
    cursor: 'pointer',
    borderWidth: '0px',
    borderRadius: '0px',
    paddingTop: tokens[3],
    paddingLeft: tokens[6],
    paddingRight: tokens[6],
    paddingBottom: tokens[3],
    lineHeight: '16px',
    fontSize: '16px',
  },
  variants: {
    primary: {
      backgroundColor: '#0000ff',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#000000',
        color: '#ffffff',
      },
    },
    secondary: {
      backgroundColor: '#eeeeee',
      color: '#000000',
      '&:hover': {
        backgroundColor: '#000000',
        color: '#ffffff',
      },
    },
  },
}
