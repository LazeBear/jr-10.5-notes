const posts = [];
let currentId = 1;

function addPost(post) {
  const newPost = { ...post, id: currentId++ };
  // currentId = 1;
  // const post = { author, content,  }; // currentId = 1
  // currentId = currentId + 1;
  // currentId = 2;
  // ++currentId
  posts.push(newPost);
  return newPost;
}

function getAllPost() {
  return JSON.parse(JSON.stringify(posts)); // should return deep copy
}

function getPostById(id) {
  return posts.find((i) => i.id === id);
}

function updatePostById(id, newPost) {
  const postIndex = getPostIndexById(id);
  const updatedPost = { ...newPost, id };
  posts[postIndex] = updatedPost;
  return updatedPost;
}

function deletePostById(id) {
  const postIndex = getPostIndexById(id);
  const deletedPost = posts.splice(postIndex, 1);
  return deletedPost;
}

// does post exist
function getPostIndexById(id) {
  return posts.findIndex((i) => i.id === id);
}

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  getPostIndexById,
  updatePostById,
  deletePostById
};
