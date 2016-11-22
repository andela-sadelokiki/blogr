var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/postctrl');

module.exports = function(app) {
  router.route('/')
    .post(postCtrl.createPost)
    .get(postCtrl.getPosts)

  router.route('/:id')
    .get(postCtrl.getPost)
    .put(postCtrl.updatePost)
    .delete(postCtrl.deletePost)

  app.use('/blog', router)
}
