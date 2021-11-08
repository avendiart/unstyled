import { css } from '@emotion/css'
import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'

export type DividerProps = StylesProps<'divider'> & HTMLAttributes<HTMLHRElement>

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const styles = useStyles('divider', {})
  return <hr {...props} ref={ref} className={css(styles)} />
})

Divider.displayName = 'Divider'
