import { SimplePseudos, StandardProperties } from 'csstype'

export type Styles<L extends string | number = string, T extends string = string> = {
  [P in keyof StandardProperties<L, T>]?: StandardProperties<L, T>[P]
} &
  {
    [P in `&${SimplePseudos}`]?: {
      [P in keyof StandardProperties<L, T>]?: StandardProperties<L, T>[P]
    }
  }
