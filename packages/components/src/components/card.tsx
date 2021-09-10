import { PropsWithoutRef } from 'react'
import { useStyles } from '../system/styled'

export type CardProps = PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  variant?: string
}

export type CardComponent = React.ComponentType<CardProps>

export const Card: CardComponent = ({ variant, ...props }: CardProps) => {
  const className = useStyles(
    ({ theme }) => [
      theme.styles.card.default,
      variant ? theme.styles.card.variants[variant] ?? {} : {},
    ],
    {},
  )

  return <div {...props} className={className} />
}
