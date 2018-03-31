var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  user: String,
  id: String,
  type: String,
  collaborate: String,
  name: String,
  description: String,
  github: String,
  link: String,
  skills: String,
  filelink: String,
  comments: [{
    user_id: String,
    username: String,
    comment: String
  }],
  like: Number,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);
