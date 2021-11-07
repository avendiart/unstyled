import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'
import { Box } from './box'

export type CardContentProps = StylesProps<'cardContent'> & HTMLAttributes<HTMLDivElement>

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, ref) => {
  const styles = useStyles('cardContent', {})
  return <Box {...props} ref={ref} styles={styles} />
})

CardContent.displayName = 'CardContent'
