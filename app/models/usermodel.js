var mongoose = require('mongoose')
Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type::String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Users', userSchema);
