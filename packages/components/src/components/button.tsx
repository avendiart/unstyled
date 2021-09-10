import { PropsWithoutRef } from 'react'
import { useStyles } from '../system/styled'

export type ButtonProps = PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  variant?: string
}

export type ButtonComponent = React.ComponentType<ButtonProps>

export const Button: ButtonComponent = ({ variant, ...props }: ButtonProps) => {
  const className = useStyles(
    ({ theme }) => [
      theme.styles.button.default,
      variant ? theme.styles.button.variants[variant] ?? {} : {},
    ],
    {},
  )

  return <button {...props} className={className} />
}
