const db = require('../config/db');

module.exports = {
  getAll: () => db('books'),
  getById: (id) => db('books').where({ id }).first(),
  create: (book) => db('books').insert(book).returning('*'),
  update: (id, book) => db('books').where({ id }).update(book),
  remove: (id) => db('books').where({ id }).del(),
};
