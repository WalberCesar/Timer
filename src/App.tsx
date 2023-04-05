import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CycleContextProvider } from './Context/CycleContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvider>
        <BrowserRouter>
          <Router />

          <GlobalStyle />
        </BrowserRouter>
      </CycleContextProvider>
    </ThemeProvider>
  )
}
