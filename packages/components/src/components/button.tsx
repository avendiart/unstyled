import { css } from '@emotion/css'
import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'

export type ButtonProps = StylesProps<'button'> & HTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, ...props }, ref) => {
  const styles = useStyles('button', {
    variant,
  })

  return <button {...props} ref={ref} className={css(styles)} />
})

Button.displayName = 'Button'
