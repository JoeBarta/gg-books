import React from 'react'
import BookCard from './BookCard'
import { render } from '@testing-library/react'

const props = {
  book_author: ['George Michael'],
  book_publication_city: 'Landan mate',
  book_publication_country: 'UK',
  book_publication_year: '2003',
  book_pages: 420,
  book_title: 'Snappy Snaps, my memoir',
  id: 1,
}

test('renders as expected', () => {
  const { asFragment, getByText } = render(<BookCard {...props} />)
  expect(asFragment()).toMatchSnapshot()

  expect(getByText(`Title: ${props.book_title}`)).toBeInTheDocument()
  expect(getByText(`By: ${props.book_author[0]}`)).toBeInTheDocument()
  expect(getByText(`City: ${props.book_publication_city}`)).toBeInTheDocument()
  expect(getByText(`Country: ${props.book_publication_country}`)).toBeInTheDocument()
  expect(getByText(`Year: ${props.book_publication_year}`)).toBeInTheDocument()
  expect(getByText('Publishing details')).toBeInTheDocument()
})
