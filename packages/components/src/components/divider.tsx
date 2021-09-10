import { PropsWithoutRef } from 'react'
import { useStyles } from '../system/styled'

export type DividerProps = PropsWithoutRef<JSX.IntrinsicElements['hr']> & {
  variant?: string
}

export type DividerComponent = React.ComponentType<DividerProps>

export const Divider: DividerComponent = ({ variant, ...props }: DividerProps) => {
  const className = useStyles(
    ({ theme }) => [
      theme.styles.divider.default,
      variant ? theme.styles.divider.variants[variant] ?? {} : {},
    ],
    {},
  )

  return <hr {...props} className={className} />
}
