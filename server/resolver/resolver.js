const { books, authors } = require('../data/static');
const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
  // Query: extract data from database
  Query: {
    books: async (parent, args, context) => await context.bookService.getAllBooks(),
    book: async (parent, args, context) => await context.bookService.getBookById(args.id),
    authors: async (parent, args, context) => await context.authorService.getAllAuthors(),
    author: async (parent, args, context) => await context.authorService.getAuthorById(args.id)
  },
  Book: {
    author: async (parent, args, context) => await context.authorService.getAuthorById(parent.authorId)
  },
  Author: {
    books: async (parent, args, context) => await context.bookService.getAllBooks({authorId: parent._id})
  },
  // Mutation: create data & write it to database
  Mutation: {
    createAuthor: async (parent, args, context) => await context.authorService.createNewAuthor(args),
    deleteAuthor: async (parent, args, context) => await context.authorService.deleteAuthorById(args.id),
    updateAuthor: async (parent, args, context) => await context.authorService.updateAuthor(args),
    createBook: async (parent, args, context) => await context.bookService.createNewBook(args),
    deleteBook: async (parent, args, context) => await context.bookService.deleteBookById(args.id),
    updateBook: async (parent, args, context) => await context.bookService.updateBook(args),
  }
}

module.exports = resolvers;