const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('../schema/schema');
const resolvers = require('../resolver/resolver');

const bookService = require('../services/bookService');
const authorService = require('../services/authorService');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    bookService,
    authorService
  })
});


module.exports = {
  server
}