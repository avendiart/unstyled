import { PropsWithoutRef } from 'react'
import { useStyles } from '../system/styled'

export type CardContentProps = PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  variant?: string
}

export type CardContentComponent = React.ComponentType<CardContentProps>

export const CardContent: CardContentComponent = ({ variant, ...props }: CardContentProps) => {
  const className = useStyles(
    ({ theme }) => [
      theme.styles.cardContent.default,
      variant ? theme.styles.cardContent.variants[variant] ?? {} : {},
    ],
    {},
  )

  return <div {...props} className={className} />
}
