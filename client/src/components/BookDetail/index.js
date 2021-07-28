import { Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getBookById } from '../../graphql-client/queries';

export const BookDetail = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookById, {
    variables: {
      id: bookId
    },
    skip: bookId === null
  })
  
  if (loading) return <p>Loading Detail Book ....</p>

  if (error) return <p>Error on Get Detail Book!</p>

  const book = bookId !== null ? data.book : null;
  
  return (
    <Card
      bg="info"
      text="white"
      className="shadow"
    >
      <Card.Body>
        {
          book === null ? (
            <Card.Text>Please select a book</Card.Text>
          ) : (
            <>
              <Card.Title>Title: {book.name}</Card.Title>
              <Card.Subtitle>Genre: {book.genre}</Card.Subtitle>
              <Card.Text as="div">
                <p>Author: {book.author.name}</p>
                <p>Age: {book.author.age}</p>
                <p>All books by this author: </p>
                <ul>
                  {
                    book.author.books.map(bk => (
                      <li key={bk.id}>{bk.name}</li>
                    ))
                  }
                </ul>
              </Card.Text>
            </>
          )
        }
      </Card.Body>
    </Card>
  )
}