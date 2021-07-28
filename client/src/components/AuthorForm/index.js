import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { addNewAuthor } from '../../graphql-client/mutations'
import { getAllAuthors } from '../../graphql-client/queries'

export const AuthorForm = () => {
  // init author form state
  const [newAuthor, setNewAuthor] = useState({
    name: '',
    age: ''
  })

  const { name, age } = newAuthor

  // GraphQL operations
  const [addAuthor] = useMutation(addNewAuthor);// omitted returned second result (dataMutation) from useMutation

  // author form handlers
  const handleSubmitAuthorForm = event => {
    event.preventDefault();
    addAuthor({
      variables: {
        name,
        age: parseInt(age)
      },
      refetchQueries: [
        {
          query: getAllAuthors
        }
      ]
    });
    setNewAuthor({
      name: '',
      age: ''
    })
  }
  const handleChangeAuthorFormValue = event => {
    setNewAuthor(() => ({
      ...newAuthor,
      [event.target.name]: event.target.value
    }))
  }
  return (
  <Form
    onSubmit={handleSubmitAuthorForm}
  >
    <Form.Group
      className="invisible"
    >
      <Form.Control />
    </Form.Group>
    <Form.Group>
      <Form.Control 
        type="text"
        name="name"
        value={name}
        placeholder="Author name"
        onChange={handleChangeAuthorFormValue}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control 
        type="number"
        name="age"
        value={age}
        placeholder="Author age"
        onChange={handleChangeAuthorFormValue}
      />
    </Form.Group>
    <Button
      className="float-right"
      variant="info"
      type="submit"
    >
      Add Author
    </Button>
  </Form>
  )
}