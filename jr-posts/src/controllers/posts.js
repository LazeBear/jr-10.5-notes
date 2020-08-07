const postModel = require('../models/posts');

function getAllPost(req, res) {
  const posts = postModel.getAllPost();
  return res.json(posts);
}

function addPost(req, res) {
  const { author, content } = req.body;
  const post = postModel.addPost({ author, content });
  return res.status(201).json(post);
}

function getPostById(req, res) {
  const { id } = req.params; // id: string
  // validate params -> id
  const post = postModel.getPostById(id);
  return res.json(post);
}

function updatePostById(req, res) {
  const { id } = req.params; // id: string
  const { author, content } = req.body;
  const updatedPost = postModel.updatePostById(id, { author, content });
  return res.json(updatedPost);
}

function deletePostById(req, res) {
  const { id } = req.params; // id: string
  const deletedPost = postModel.deletePostById(id);
  // 200
  // 200 + deleted resource
  // 204 (no content)
  return res.json(deletedPost);
}

// commonjs vs es

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById
};
