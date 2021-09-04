import { NextPage } from 'next'
import { mergeDeepRight } from 'ramda'
import { Button, theme as defaultTheme, ThemeContext } from '@unstyled/components'

const customTheme = mergeDeepRight(defaultTheme, {
  styles: {
    button: {
      backgroundColor: '#0000ff',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#ff0000',
        color: '#ffffff',
      },
    },
  },
})

const Home: NextPage = () => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <div
        style={{
          display: 'flex',
          paddingTop: '32px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingBottom: '32px',
          gap: '32px',
        }}
      >
        <Button>Button</Button>
        <ThemeContext.Provider value={customTheme}>
          <Button>Button</Button>
        </ThemeContext.Provider>
      </div>
    </ThemeContext.Provider>
  )
}

export default Home
