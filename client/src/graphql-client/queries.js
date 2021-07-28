import { gql } from '@apollo/client'

export const getAllBooks = gql`
  query getAllBooks {
    books {
      name
      id
    }
  }
`

export const getBookById = gql`
  query getBookById ($id: ID!) {
    book (id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  }
`
export const getAllAuthors = gql`
  query getAllAuthors {
    authors {
      id
      name
    }
  }
`
