const express = require('express');
const {
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  addPost
} = require('../controllers/posts');
const validateId = require('../middleware/validateId');
const router = express.Router();

// GET localhost:3000/posts
router.get('', getAllPost);
router.post('', addPost);
// GET localhost:3000/posts/:id
router.get('/:id', validateId, getPostById);
router.put('/:id', validateId, updatePostById);
router.delete('/:id', validateId, deletePostById);

module.exports = router;
