import { createElement, forwardRef } from 'react'
import { css } from '@emotion/css'
import { Styles } from './styles'

export const createStyled =
  <T>(useTheme: () => T) =>
  <K extends keyof JSX.IntrinsicElements>(tag: K) =>
  <X>(
    styles: (
      props: X & {
        theme: T
      },
    ) => Styles | Styles[],
  ) =>
    forwardRef((props: X & JSX.IntrinsicElements[K], ref) => {
      const theme = useTheme()
      return createElement(tag, {
        ...props,
        className: css(
          styles({
            ...props,
            theme,
          }),
        ),
        ref,
      })
    })
