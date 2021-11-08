import { CSSInterpolation } from '@emotion/css'
import { Tokens } from '../tokens'

export const divider = (tokens: Tokens) => (): CSSInterpolation => ({
  height: '1px',
  width: '100%',
  marginTop: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  background: '#eeeeee',
  border: 'none',
})
