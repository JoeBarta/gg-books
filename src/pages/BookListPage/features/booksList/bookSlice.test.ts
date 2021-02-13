import books, { getBooksSuccess, setLoading } from './booksSlice'

const initialState = {
  books: [],
  loading: true,
  count: 0
}

describe('books reducer', () => {
  it('should handle initial state', () => {
    expect(books(undefined, {})).toEqual(initialState)
  })

  it('should handle getBooksSuccess', () => {
    expect(
      books(initialState, {
        type: getBooksSuccess.type,
        payload: {
          books: ['test'],
          count: 2000
        }
      })
    ).toEqual({
      books: ['test'],
      count: 2000,
      loading: false
    })
  })

  it('should handle setLoading', () => {
    expect(
      books(initialState, {
        type: setLoading.type,
        payload: false
      })
    ).toEqual({
      books: [],
      count: 0,
      loading: false
    })
  })
})
