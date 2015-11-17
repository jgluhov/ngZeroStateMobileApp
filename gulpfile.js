var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('vendor', function() {
  gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js'
  ])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('templates', function() {
  gulp.src('src/templates/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./www/templates'))
});

gulp.task('default', ['vendor', 'templates'], function() {

});
