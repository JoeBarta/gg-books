import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination'
import { Grid, makeStyles } from '@material-ui/core'

import useBooks from './hooks/useBooks'
import BookSearch from './features/bookSearch/BookSearch'
import BookList from './features/booksList/BookList'

import { RootState } from '../../app/rootReducer'

const useStyles = makeStyles((theme) => ({
  pagination: {
    padding: 40,
    color: theme.palette.primary.main
  },
}))

const BookListPage = () => {
  const classes = useStyles()
  const [page, handlePageChange] = useBooks()
  const { books, loading, count } = useSelector((state: RootState) =>  state.books)
  
  return (
    <section>
      <BookSearch page={page}/>
      <BookList books={books} loading={loading}/>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Pagination count={Math.round(count / 20)} page={page} onChange={handlePageChange} className={classes.pagination} variant="outlined"/>
      </Grid>
    </section>
  )
}

export default BookListPage
