import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getBooks, Book, BooksEndpointRes, BooksEndpointParam } from '../../../../api/booksApi'
import { AppThunk } from '../../../../app/store'

export interface BooksState {
  books: Book[]
  count: number
  loading: boolean
}

const initialBookstate: BooksState = {
  books: [],
  count: 0,
  loading: true
}

const books = createSlice({
  name: 'books',
  initialState: initialBookstate,
  reducers: {
    getBooksSuccess(state, { payload }: PayloadAction<BooksEndpointRes>) {
      state.books = payload.books.map(book => book)
      state.count = payload.count
      state.loading = false
    },
    setLoading(state, { payload }: PayloadAction<boolean> ) {
      state.loading = payload
    }
  }
})

export const {
  getBooksSuccess,
  setLoading,
} = books.actions

export default books.reducer

export const fetchBooks = ({ page, itemsPerPage, filters }: BooksEndpointParam): AppThunk => async dispatch => {
  try {
    const books = await getBooks({ page, itemsPerPage, filters })
    dispatch(getBooksSuccess(books))
  } catch (err) {
    console.error(err)
  }
}

export const setLoadingStatus = (isLoading: boolean): AppThunk => dispatch => {
  dispatch(setLoading(isLoading))
}
