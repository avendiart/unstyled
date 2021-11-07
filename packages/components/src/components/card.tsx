import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'
import { Box } from './box'

export type CardProps = StylesProps<'card'> & HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const styles = useStyles('card', {})
  return <Box {...props} ref={ref} styles={styles} />
})

Card.displayName = 'Card'
