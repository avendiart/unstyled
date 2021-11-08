import { CSSInterpolation } from '@emotion/css'
import { Tokens } from '../tokens'

export const text = (tokens: Tokens) => (): CSSInterpolation => ({
  marginTop: tokens.space[0],
  marginLeft: tokens.space[0],
  marginRight: tokens.space[0],
  marginBottom: tokens.space[0],
  fontFamily: 'sans-serif',
  lineHeight: '24px',
  fontSize: '16px',
})
