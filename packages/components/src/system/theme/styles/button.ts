import { CSSObject } from 'styled-components'
import { Tokens } from '../tokens'

export const button =
  (tokens: Tokens) =>
  ({ variant }: { variant?: 'primary' | 'secondary' }): CSSObject[] => {
    return [
      {
        cursor: 'pointer',
        borderWidth: '0px',
        borderRadius: '0px',
        paddingTop: tokens.space[3],
        paddingLeft: tokens.space[6],
        paddingRight: tokens.space[6],
        paddingBottom: tokens.space[3],
        lineHeight: '16px',
        fontSize: '16px',
      },
      variant === 'primary'
        ? {
            backgroundColor: '#0000ff',
            color: '#ffffff',
            ':hover': {
              backgroundColor: '#000000',
              color: '#ffffff',
            },
          }
        : {},
      variant === 'secondary'
        ? {
            backgroundColor: '#eeeeee',
            color: '#000000',
            ':hover': {
              backgroundColor: '#000000',
              color: '#ffffff',
            },
          }
        : {},
    ]
  }
