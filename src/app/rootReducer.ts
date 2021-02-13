import { combineReducers } from '@reduxjs/toolkit'

import booksSlice from '../pages/BookListPage/features/booksList/booksSlice'

const rootReducer = combineReducers({
  books: booksSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
