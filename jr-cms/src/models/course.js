const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    // course code
    _id: {
      type: String,
      uppercase: true,
      alias: 'code'
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: 'This is default information'
    },
    students: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
      select: false
    },
    __v: {
      type: Number,
      select: false
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
    timestamps: true
  }
);

// schema.virtual('code').get(function () {
//   return this._id;
// });

const Model = mongoose.model('Course', schema);

module.exports = Model;
