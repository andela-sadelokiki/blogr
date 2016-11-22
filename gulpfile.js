var gulp = require('gulp');
// var jade = require('gulp-jade');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({ script: 'server.js', stdout: true })
    .on('change')
    .on('restart', function() {
      console.log('>>restart');
    });
});

gulp.task('default', ['nodemon']);
