import { getTokenValue, Tokens } from './get-token-value'

export const transformStyles = (tokens: Tokens, styles: object) =>
  Object.fromEntries(
    Object.entries(styles).map(([index, value]) => [index, getTokenValue(tokens, index, value)]),
  )
