import { Styles } from '@unstyled/styled'

export const divider: {
  default: Styles
  variants: Partial<{
    [index: string]: Styles
  }>
} = {
  default: {
    height: '1px',
    width: '100%',
    marginTop: '0px',
    marginLeft: '0px',
    marginRight: '0px',
    marginBottom: '0px',
    background: '#eeeeee',
    border: 'none',
  },
  variants: {},
}
