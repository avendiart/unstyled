import { getTokenValue } from './get-token-value'

const tokens = {
  space: {
    xs: '32px',
  },
}

describe('getTokenValue', () => {
  it('returns the token value if found', () => {
    expect(getTokenValue(tokens, 'paddingRight', 'xs')).toEqual('32px')
  })

  it('returns the default value if not found', () => {
    expect(getTokenValue(tokens, 'paddingRight', '40px')).toEqual('40px')
  })
})
