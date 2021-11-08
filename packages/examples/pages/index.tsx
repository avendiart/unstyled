import { NextPage } from 'next'
import * as Components from '@unstyled/components'

const Home: NextPage = () => {
  return (
    <Components.ThemeContext.Provider value={Components.theme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '32px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingBottom: '32px',
          gap: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '32px',
          }}
        >
          <Components.Button variant="secondary">Button</Components.Button>
          <Components.ThemeContext.Provider
            value={{
              ...Components.theme,
              styles: {
                ...Components.theme.styles,
                button: (tokens) => (props) => {
                  return [
                    ...Components.theme.styles.button(tokens)(props),
                    {
                      backgroundColor: '#00ffff',
                      color: '#ffffff',
                      ':hover': {
                        backgroundColor: '#ff0000',
                        color: '#ffffff',
                      },
                    },
                  ]
                },
              },
            }}
          >
            <Components.Button>Button</Components.Button>
          </Components.ThemeContext.Provider>
        </div>
        <Components.Card>
          <Components.CardContent>I&apos;m a card</Components.CardContent>
          <Components.Divider />
          <Components.CardActions>
            <Components.Button variant="primary">Confirm</Components.Button>
          </Components.CardActions>
        </Components.Card>
      </div>
    </Components.ThemeContext.Provider>
  )
}

export default Home
