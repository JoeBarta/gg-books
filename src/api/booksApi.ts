import { BASE_URL } from '../constants'

export interface Book {
  book_author: string[]
  book_publication_city:string
  book_publication_country:string
  book_publication_year:string
  book_pages: number
  book_title:string
  id: number
}

export interface BooksEndpointRes {
  books: Book[]
  count: number
}

export interface BooksEndpointParam {
  page?: number
  itemsPerPage?: number
  filters?: string[]
}

export async function getBooks({ page = 1, itemsPerPage = 20, filters = []}: BooksEndpointParam) {
  try {
    const data = await fetch(BASE_URL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page,
        itemsPerPage,
        filters,
      })
    })
    return await data.json()
  } catch (err) {
    console.error(err)
    return new Error('failed to fetch books')
  }
}
