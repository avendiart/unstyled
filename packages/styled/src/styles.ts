import { SimplePseudos, StandardLonghandProperties } from 'csstype'

export type Styles<L extends string | number = string, T extends string = string> = {
  [P in keyof StandardLonghandProperties<L, T>]?: StandardLonghandProperties<L, T>[P]
} &
  {
    [P in `&${SimplePseudos}`]?: {
      [P in keyof StandardLonghandProperties<L, T>]?: StandardLonghandProperties<L, T>[P]
    }
  }
