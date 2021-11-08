import { css } from '@emotion/css'
import { forwardRef, HTMLAttributes } from 'react'
import { StylesProps, useStyles } from '../system/theme'

export type CardActionsProps = StylesProps<'cardActions'> & HTMLAttributes<HTMLDivElement>

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>((props, ref) => {
  const styles = useStyles('cardActions', {})
  return <div {...props} ref={ref} className={css(styles)} />
})

CardActions.displayName = 'CardActions'
