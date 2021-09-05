import { css } from '@emotion/css'
import { Styles } from './styles'

export type UseStyles<T> = <X>(
  styles: (props: X & { theme: T }) => Styles | Styles[],
  props: X,
) => string

export const createUseStyles = <T>(useTheme: () => T) =>
  ((styles, props) => {
    const theme = useTheme()
    return css(
      styles({
        ...props,
        theme,
      }),
    )
  }) as UseStyles<T>
