// var app = require('../server.js');
// // var express = require('../config/express.js');
// var request = require('supertest')(app);

describe('Routes', function() {
  beforeEach(function() {
    Post.remove({}, function() {
      var post = new Post({
        title: 'blog title',
        description: 'blog description'
      });
      post.save(function(err, res) {
        if (err) {
          return err;
        }
        done();
      })
    });
  });

  afterEach(function() {
    Post.remove({}, function() {
      done();
    })
  });

  it('should check the POST route', function(req, res) {
    var post = {
      title: 'new post',
      description: 'post description'
    }
    request
      .post('/blog')
      .set('Content-Type', 'application/json')
      .send(post)
      .expect(200)
      .end(function(err, res) {
        expect(err).toBeNull();
        expect(res).toBeDefined();
      });
  });
});
