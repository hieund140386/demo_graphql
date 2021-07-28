import { Row, Col } from 'react-bootstrap'
import { AuthorForm } from '../AuthorForm'
import { BookForm } from '../BookForm'

export const Forms = () => {

  return (
    <Row>
      <Col xs={6}>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  )
}