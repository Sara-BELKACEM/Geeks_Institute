const knex = require('../config/knex');

const getAllPosts = () => knex('posts').select('*');
const getPostById = (id) => knex('posts').where({ id }).first();
const createPost = (post) => knex('posts').insert(post).returning('*');
const updatePost = (id, post) => knex('posts').where({ id }).update(post).returning('*');
const deletePost = (id) => knex('posts').where({ id }).del();

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
