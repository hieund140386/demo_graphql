const Author = require('../models/Author');

// create a new author
const createNewAuthor = async (args) => {
  const newAuthor = new Author(args);
  return await newAuthor.save();
};

// get all authors
const getAllAuthors = async () => await Author.find()

// get author by his id
const getAuthorById = async (authorId) => await Author.findById(authorId)

// delete an author by his id
const deleteAuthorById = async authorId => await Author.findByIdAndDelete(authorId)

// update an author
const updateAuthor = async ({ id, ...newData }) => await Author.findByIdAndUpdate(id, newData, {new: true})

module.exports = {
  getAllAuthors,
  getAuthorById,
  createNewAuthor,
  deleteAuthorById,
  updateAuthor,
};