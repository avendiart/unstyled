import { CSSObject } from 'styled-components'
import { Tokens } from '../tokens'

export const cardContent = (tokens: Tokens) => (): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: tokens.space[0],
  paddingLeft: tokens.space[6],
  paddingRight: tokens.space[6],
  paddingBottom: tokens.space[0],
})
