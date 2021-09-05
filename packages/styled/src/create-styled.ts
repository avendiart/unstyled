import { cx } from '@emotion/css'
import { createElement, forwardRef } from 'react'
import { UseStyles } from './create-use-styles'
import { Styles } from './styles'

export const createStyled =
  <T>(useStyles: UseStyles<T>) =>
  <K extends keyof JSX.IntrinsicElements>(tag: K) =>
  <X>(
    styles: (
      props: X & {
        theme: T
      },
    ) => Styles | Styles[],
  ) =>
    forwardRef((props: X & JSX.IntrinsicElements[K], ref) => {
      const _className = useStyles(styles, props)
      return createElement(tag, {
        ...props,
        className: cx(_className, props.className),
        ref,
      })
    })
