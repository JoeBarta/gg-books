import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

import { Provider } from 'react-redux'
import store from './app/store'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '2.2rem'
    },
    h3: {
      fontSize: '1.2rem'
    }
  },
  palette: {
    primary: {
      light: '#fed8b1',
      main: '#000080',
    },
    secondary: {
      light: '#f8f8ff',
      main: '#fed8b1',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
