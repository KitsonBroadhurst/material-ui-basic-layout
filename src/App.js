import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './theme'

import Item from './components/item'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Item />
  </ThemeProvider>
)
export default App