import { css } from '@emotion/css'
import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'

export type CardProps = StylesProps<'card'> & HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const styles = useStyles('card', {})
  return <div {...props} ref={ref} className={css(styles)} />
})

Card.displayName = 'Card'
