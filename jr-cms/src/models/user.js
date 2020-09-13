const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// instance method and static method
// Model.static
// document.instance
schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
  // return true or false
  const validPassword = await bcrypt.compare(password, this.password);
  return validPassword;
};

// lifecycle hook
// pre save hook

const model = mongoose.model('User', schema);
module.exports = model;
