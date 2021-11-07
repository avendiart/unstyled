import { CSSObject } from 'styled-components'
import { Tokens } from '../tokens'

export const card = (tokens: Tokens) => (): CSSObject => ({
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
  paddingTop: tokens.space[6],
  paddingLeft: tokens.space[0],
  paddingRight: tokens.space[0],
  paddingBottom: tokens.space[6],
  gap: tokens.space[6],
  border: '1px solid #eeeeee',
})
