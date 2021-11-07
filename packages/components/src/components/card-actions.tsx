import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'
import { Box } from './box'

export type CardActionsProps = StylesProps<'cardActions'> & HTMLAttributes<HTMLDivElement>

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>((props, ref) => {
  const styles = useStyles('cardActions', {})
  return <Box {...props} ref={ref} styles={styles} />
})
