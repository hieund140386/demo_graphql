import { Container } from 'react-bootstrap'
import { BookList } from './components/BookList'
import { Forms } from './components/Forms' 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { baseUrl } from './configs/api'

const client = new ApolloClient({
  uri: `${baseUrl}`,
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Container
        className="py-3 mt-3"
        style={{ backgroundColor: "lightcyan"}}
      >
        <h1 className="text-center text-info mb-3">
          My books
        </h1>
        <hr />
        <Forms />
        <hr />
        <BookList />
      </Container>
    </ApolloProvider>
  );
}

export default App;
