import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
  Icon,
} from "@material-ui/core"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import { Book } from "../../api/booksApi"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    maxWidth: 275,
    color: theme.palette.primary.main,
  },
  content: {
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
    color: theme.palette.primary.main,
  },
}))

const BookCard = ({
  book_author,
  book_publication_city,
  book_publication_country,
  book_publication_year,
  book_pages,
  book_title
}: Book) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.root}
        title={`Title: ${book_title}`}
        subheader= {`By: ${book_author[0]}`}
      />
      {book_author.length > 1 && <Typography variant='subtitle2'>Also Written by: </Typography>}
      {book_author.length > 1
        ? book_author.map((author: string, idx: number) => {
          if (idx !== 1) {
            return <Typography variant="body2" color="textSecondary" component="p">{author}</Typography>
          }
          return
        })
        : null
      }
      <CardContent className={classes.content}>
        <Icon>
          <LibraryBooksIcon />
        </Icon>
        <Typography variant='subtitle2'>Page Count: {book_pages}</Typography>
        <Typography variant="body2" color="textPrimary" component="p">Publishing details</Typography>
        <Typography variant="body2" color="textSecondary" component="p">City: {book_publication_city}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Country: {book_publication_country}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Year: {book_publication_year}</Typography>
      </CardContent>
    </Card>
  )
}

export default BookCard
