import { css } from '@emotion/css'
import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'

export type CardContentProps = StylesProps<'cardContent'> & HTMLAttributes<HTMLDivElement>

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, ref) => {
  const styles = useStyles('cardContent', {})
  return <div {...props} ref={ref} className={css(styles)} />
})

CardContent.displayName = 'CardContent'
