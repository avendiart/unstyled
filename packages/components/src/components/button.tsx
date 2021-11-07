import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'
import { Box } from './box'

export type ButtonProps = StylesProps<'button'> & HTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, ...props }, ref) => {
  const styles = useStyles('button', {
    variant,
  })

  return <Box as="button" {...props} ref={ref} styles={styles} />
})

Button.displayName = 'Button'
