const Book = require('../models/Book');

// get books from database
const getAllBooks = async (condition = null) => condition === null ? await Book.find() : await Book.find(condition)

// get a book by its id from database
const getBookById = async (bookId) => await Book.findById(bookId)

// create a new book and write to database
const createNewBook = async (args) => {
  const newBook = new Book(args);
  return await newBook.save();
}

// delete a book by its id from database
const deleteBookById = async bookId => await Book.findByIdAndDelete(bookId)

// update a book
const updateBook = async ({ id, ...newData }) => await Book.findByIdAndUpdate(id, newData, {new: true})

module.exports = {
  getAllBooks,
  getBookById,
  createNewBook,
  deleteBookById,
  updateBook,
}