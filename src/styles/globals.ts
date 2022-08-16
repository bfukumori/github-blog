import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
}

body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
}
`
