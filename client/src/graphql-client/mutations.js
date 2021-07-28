import { gql } from '@apollo/client';

export const addNewBook = gql`
  mutation addNewBook($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`

export const addNewAuthor = gql`
  mutation addNewAuthor($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`