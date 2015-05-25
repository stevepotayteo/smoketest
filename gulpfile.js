var gulp = require('gulp');
var mocha = require('gulp-mocha');
var selenium = require('selenium-standalone');

gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('integration', ['selenium'], function () {
    return gulp.src('test/spec/**/*.js', {read: false}).pipe(mocha({reporter: 'nyan', timeout: 99999}));
});

gulp.task('test', ['integration'], function () {
    selenium.child.kill();
});
