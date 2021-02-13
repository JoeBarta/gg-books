import React, { ChangeEvent, Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
// purely for the fact this is a class component, with hooks a debounce fn() is fairly clean/simple 
import { debounce } from 'lodash'

import { fetchBooks, setLoadingStatus } from '../booksList/booksSlice'
import { BooksEndpointParam } from '../../../../api/booksApi'
import { AppDispatch } from '../../../../app/store'
import { Grid } from '@material-ui/core'

import './BookSearch.css'

// TODO
interface BookSearchProps {
  fetchBooks: any
  setLoadingStatus: any
  page: number
}

class BookSearch extends Component<BookSearchProps> {
  state = {
    search: "",
  }

  debounceApiCall = debounce(() => {
    const filters =[{type: 'all', values: [this.state.search]}]
    console.log('filters', filters)
    this.props.fetchBooks({ page: this.props.page, filters})
    this.props.setLoadingStatus(false)
  }, 1000)

  handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setLoadingStatus(true)
    const { target: { value } } = event
    this.setState({
      search: value
    })
    this.debounceApiCall()
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" className='search-input-container'>
        <TextField id="outlined-basic" variant="outlined" label="search..." type="search" onChange={this.handleOnChange}/>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchBooks: ({page, filters}: Omit<BooksEndpointParam, 'itemsPerPage'>) => dispatch(fetchBooks({ page, filters })),
    setLoadingStatus: (isLoading: boolean) => dispatch(setLoadingStatus(isLoading)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(BookSearch)
