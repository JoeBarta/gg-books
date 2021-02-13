import React from "react"
import { Typography, makeStyles, Grid } from "@material-ui/core"

import { BooksState } from "./booksSlice"

import Loader from "../../../../components/Loader/Loader"
import BookCard from "../../../../components/BookCard/BookCard"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const BookList = ({ loading, books }: Omit<BooksState, 'count'>) => {
  const classes = useStyles()

  if (loading) return <Loader />
  if (books.length < 1) return <Typography variant='h3'>No books found</Typography>

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
        {books.map((book) => {
          return (
            <Grid key={book.id} item>
              <BookCard {...book}/>
            </Grid>
          )
        })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BookList
