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

  getPosts: function(req, res) {
    Post.find({}, function(err, posts) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(posts);
    });
  },

  getPost: function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(post);
    });
  },

  updatePost: function(req, res) {
    Post.update(req.params.id, req.body, function(err, updatedpost) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(updatedpost);
    });
  },

  deletePost: function(req, res) {
    Post.remove({ _id: req.params.id }, function(err, deleted) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json({
        message: 'deleted'
      });
    });
  }
}
