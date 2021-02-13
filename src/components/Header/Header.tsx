import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  text: {
    fontSize: '2.2rem',
    color: theme.palette.primary.main
  }
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <Typography variant="h1" className={classes.text}>
        The Book Club
      </Typography>
    </header>
  )
}
