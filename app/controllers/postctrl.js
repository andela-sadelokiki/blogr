var mongoose = require('mongoose');
var Post = require('../models/postmodel.js');

module.exports = {
  createPost: function(req, res) {
    var post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    post.save(function(err, newpost) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(201).json(newpost);
    });
  },

  // getPost: function(req, res) {
  //   Post.findOne({id: req.params.id}, func)
  // }
}
