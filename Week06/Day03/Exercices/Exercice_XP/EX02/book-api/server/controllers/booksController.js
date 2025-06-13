const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
};

exports.getBookById = async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.getById(bookId);
  if (book) res.status(200).json(book);
  else res.status(404).json({ message: 'Book not found' });
};

exports.createBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = await Book.create({ title, author, publishedYear });
  res.status(201).json(newBook);
};
