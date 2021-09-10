import { PropsWithoutRef } from 'react'
import { useStyles } from '../system/styled'

export type CardActionsProps = PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  variant?: string
}

export type CardActionsComponent = React.ComponentType<CardActionsProps>

export const CardActions: CardActionsComponent = ({ variant, ...props }: CardActionsProps) => {
  const className = useStyles(
    ({ theme }) => [
      theme.styles.cardActions.default,
      variant ? theme.styles.cardActions.variants[variant] ?? {} : {},
    ],
    {},
  )

  return <div {...props} className={className} />
}
