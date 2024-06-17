import React from 'react'
import { Route } from "react-router-dom"
import { Container, makeStyles } from "@material-ui/core"

import './App.css'
import BookListPage from '../pages/BookListPage/BookListPage'
import { Header } from '../components/Header/Header'
  
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Header />
        <main>
          <Route exact path="/" component={BookListPage} />
        </main>
      </Container >
    </div>
  )
}

export default App
