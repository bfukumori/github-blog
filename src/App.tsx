import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div>Hello World</div>
    </ThemeProvider>
  )
}
