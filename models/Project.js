var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  type: String,
  collaborate: String,
  name: String,
  description: String,
  github: String,
  link: String,
  skills: String,
  filelink: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);
