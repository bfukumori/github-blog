import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { PostProvider } from './contexts/DataContext'
import { Home } from './pages/Home'
import { Issue } from './pages/Issue'

import { GlobalStyles } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <PostProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issues/:number" element={<Issue />} />
        </Routes>
      </PostProvider>
    </ThemeProvider>
  )
}
