import { CSSObject } from 'styled-components'
import { Tokens } from '../tokens'

export const cardActions = (tokens: Tokens) => (): CSSObject => ({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row-reverse',
  paddingTop: tokens.space[0],
  paddingLeft: tokens.space[6],
  paddingRight: tokens.space[6],
  paddingBottom: tokens.space[0],
  gap: tokens.space[3],
})
