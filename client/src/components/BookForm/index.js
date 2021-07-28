import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAllAuthors, getAllBooks } from '../../graphql-client/queries';
import { addNewBook } from '../../graphql-client/mutations';

export const BookForm = () => {

  // init BookForm state
  const [newBook, setNewBook] = useState({
    title: '',
    genre: '',
    authorId: ''
  })
  
  const { title, genre, authorId } = newBook
  
  // GraphQL operations
  const { loading, error, data } = useQuery(getAllAuthors);

  const [addBook] = useMutation(addNewBook); // omitted returned second result (dataMutation) from useMutation

  // book form handlers
  const handleSubmitBookForm = event => {
    event.preventDefault();
    addBook(
      {
        variables: {
          name: title,
          genre,
          authorId
        },
        refetchQueries: [
          {
            query: getAllBooks
          }
        ]
      }
    );
    // reset form
    setNewBook({
      title: '',
      genre: '',
      authorId: ''
    })
  }
  const handleChangeBookFormValue = event => {
    setNewBook(() => ({
      ...newBook,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <Form
      onSubmit={handleSubmitBookForm}
    >
      <Form.Group>
        <Form.Control 
          type="text"
          name="title"
          value={title}
          placeholder="Book title"
          onChange={handleChangeBookFormValue}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          type="text"
          name="genre"
          value={genre}
          placeholder="Book genre"
          onChange={handleChangeBookFormValue}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          as="select"
          name="authorId"
          value={authorId || 'Select Author'}
          onChange={handleChangeBookFormValue}
        >
          {
            loading ? <option>Loading authors ...</option> : (
              error ? <option>Error on Loading Authors!</option> : (
                (
                  <>
                    <option disabled>Select Author</option>
                    {data.authors.map(author => (
                      <option
                        key={author.id}
                        value={author.id}
                      >
                        {author.name}
                      </option>
                    ))}
                  </>
                )
              )
            )
          }
        </Form.Control>
      </Form.Group>
      <Button
        className="float-right"
        variant="info"
        type="submit"
      >
        Add Book
      </Button>
    </Form>
  )
}