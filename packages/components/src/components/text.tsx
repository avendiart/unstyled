import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'
import { Box } from './box'

export type TextProps = StylesProps<'text'> & HTMLAttributes<HTMLParagraphElement>

export const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const styles = useStyles('text', {})
  return <Box as="p" {...props} ref={ref} styles={styles} />
})

Text.displayName = 'Text'
