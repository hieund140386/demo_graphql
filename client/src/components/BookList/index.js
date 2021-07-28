import { Card, CardColumns, Row, Col } from 'react-bootstrap';
import { BookDetail } from '../BookDetail'
import { useQuery } from '@apollo/client'
import { getAllBooks } from '../../graphql-client/queries'
import { useState } from 'react';

export const BookList = () => {
  const { loading, error, data } = useQuery(getAllBooks)

  // init state
  const [selectedBook, setSelectedBook] = useState(null)
  
  if (loading) return <p>Loading books ...</p>

  if (error) return <p>Error Loading books!</p>

  // handlers
  const handleSelectBook = (bookId) => {
    setSelectedBook(bookId)
  }
  return (
    <Row>
      <Col
        xs={8}
      >
        <CardColumns>
          {
            data.books.map(({ name, id}) => (
              <Card
                border="info"
                text="info"
                className="text-center shadow"
                key={id}
                onClick={() => handleSelectBook(id)}
              >
                <Card.Body>
                  {name}
                </Card.Body>
              </Card>
            ))
          }
        </CardColumns>
      </Col>
      <Col>
        <BookDetail 
          bookId={selectedBook}
        />
      </Col>
    </Row>

  )
}