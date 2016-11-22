var mongoose = require('mongoose')
Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Posts', postSchema);
