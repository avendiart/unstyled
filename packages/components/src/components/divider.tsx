import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'
import { Box } from './box'

export type DividerProps = StylesProps<'divider'> & HTMLAttributes<HTMLHRElement>

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const styles = useStyles('divider', {})
  return <Box as="hr" {...props} ref={ref} styles={styles} />
})

Divider.displayName = 'Divider'
