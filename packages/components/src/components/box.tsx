import styled, { CSSObject } from 'styled-components'

export const Box = styled.div((props: { styles?: CSSObject | CSSObject[] }) => props.styles)
