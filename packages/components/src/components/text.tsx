import { css } from '@emotion/css'
import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'

export type TextProps = StylesProps<'text'> & HTMLAttributes<HTMLParagraphElement>

export const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const styles = useStyles('text', {})
  return <p {...props} ref={ref} className={css(styles)} />
})

Text.displayName = 'Text'
