export type Tokens = {
  space: {
    [index: string]: string
  }
}

const map: Partial<{
  [index: string]: keyof Tokens
}> = {
  paddingTop: 'space',
  paddingLeft: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  marginTop: 'space',
  marginLeft: 'space',
  marginRight: 'space',
  marginBottom: 'space',
}

export const getTokenValue = (tokens: Tokens, index: string, value: string | number) => {
  const token = map[index]
  if (token) {
    return tokens[token][value] ?? value
  }
  return value
}
