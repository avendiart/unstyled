import { Styles } from '@unstyled/styled'
import { tokens } from '../tokens'

export const button: Styles = {
  cursor: 'pointer',
  appearance: 'none',
  borderWidth: '0px',
  borderRadius: '0px',
  paddingTop: tokens[3],
  paddingLeft: tokens[6],
  paddingRight: tokens[6],
  paddingBottom: tokens[3],
  lineHeight: '16px',
  fontSize: '16px',
  backgroundColor: '#eeeeee',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
}
