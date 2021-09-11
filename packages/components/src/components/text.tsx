import { PropsWithoutRef } from 'react'
import { useStyles } from '../system/styled'

export type TextProps = PropsWithoutRef<JSX.IntrinsicElements['p']> & {
  variant?: string
}

export type TextComponent = React.ComponentType<TextProps>

export const Text: TextComponent = ({ variant, ...props }: TextProps) => {
  const className = useStyles(
    ({ theme }) => [
      theme.styles.text.default,
      variant ? theme.styles.text.variants[variant] ?? {} : {},
    ],
    {},
  )

  return <p {...props} className={className} />
}
