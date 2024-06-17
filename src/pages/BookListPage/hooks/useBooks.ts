import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { fetchBooks } from '../features/booksList/booksSlice'
import useQuery from './useQuery'

type UseBooksTuple = [number, (event: ChangeEvent<unknown>, page: number) => void]

const useBooks = (): UseBooksTuple => {
  const dispatch = useDispatch()
  const history = useHistory()
  const query = useQuery()
  const [page, setPage] = useState(0)

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    history.push(`/?page=${value}`)
    setPage(value)
  }

  const getQuery = useCallback(() => {
    const hasPage = query.get('page')
    return hasPage
  }, [page])

  useEffect(() => {
    const hasPage = getQuery()
  
    if (hasPage) {
      dispatch(fetchBooks({ page: Number(hasPage) }))
    } else {
      dispatch(fetchBooks({}))
    }
  }, [dispatch, getQuery])

  return [page, handlePageChange]
}

export default useBooks

