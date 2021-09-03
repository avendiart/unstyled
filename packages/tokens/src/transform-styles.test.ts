import { transformStyles } from './transform-styles'

const tokens = {
  space: {
    '3': '12px',
    '4': '16px',
  },
}

describe('transformStyles', () => {
  it('transforms simple properties', () => {
    const styles = {
      paddingTop: '3',
      paddingLeft: '4',
      paddingRight: '4',
      paddingBottom: '3',
    }

    expect(transformStyles(tokens, styles)).toEqual({
      paddingTop: '12px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingBottom: '12px',
    })
  })
})
