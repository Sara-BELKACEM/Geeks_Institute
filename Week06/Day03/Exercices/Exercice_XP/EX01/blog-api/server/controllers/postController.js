const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    console.error('getAll error:', err);
    res.status(500).json({ error: 'Server error: failed to get posts' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    console.error('getOne error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const [newPost] = await Post.createPost({ title, content });
    res.status(201).json(newPost);
  } catch (err) {
    console.error('create error:', err);
    res.status(500).json({ error: 'Server error: failed to create post' });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, content } = req.body;
    const [updatedPost] = await Post.updatePost(req.params.id, { title, content });
    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
    res.json(updatedPost);
  } catch (err) {
    console.error('update error:', err);
    res.status(500).json({ error: 'Server error: failed to update post' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Post.deletePost(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('delete error:', err);
    res.status(500).json({ error: 'Server error: failed to delete post' });
  }
};
