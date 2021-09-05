import { css } from '@emotion/css'
import { createUseStyles } from './create-use-styles'

describe('useStyles', () => {
  it('creates a hook', () => {
    const useStyles = createUseStyles(() => ({
      tokens: {
        space: {
          '3': '12px',
          '4': '16px',
        },
      },
    }))

    const result = useStyles(
      ({ theme }) => ({
        paddingTop: theme.tokens.space[3],
        paddingLeft: theme.tokens.space[4],
        paddingRight: theme.tokens.space[4],
        paddingBottom: theme.tokens.space[3],
      }),
      { variant: 'primary' },
    )

    expect(result).toEqual(
      css({
        paddingTop: '12px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '12px',
      }),
    )
  })
})
