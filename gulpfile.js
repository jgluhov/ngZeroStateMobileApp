var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var koutoSwiss = require('kouto-swiss');
var less = require('gulp-less');

gulp.task('vendor', function() {
  gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/angular-touch/angular-touch.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js'
  ])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
    .pipe(browserify({ insertGlobals : true }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('templates', function() {
  gulp.src(['src/templates/*.jade','!src/templates/index.jade'])
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./www/templates'));
  gulp.src('src/templates/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./www'))
});

gulp.task('styl', function () {
  gulp.src('./src/styles/app.styl')
    .pipe(plumber())
    .pipe(stylus({use: koutoSwiss(), import: 'kouto-swiss'}))
    .pipe(gulp.dest('./www/css'))
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('uikit', function () {
  gulp.src('./src/vendor/uikit/uikit.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./www/css/vendor/uikit'))
});

gulp.task('fonts', function() {
  gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./www/fonts'))
});

gulp.task('images', function() {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./www/images'))
});



gulp.task('default', ['vendor', 'scripts', 'templates','styl','fonts','images', 'uikit'], function() {
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./src/templates/*.jade', ['templates']);
  gulp.watch('./src/styles/**/*.styl', ['styl']);
  gulp.watch('./src/vendor/uikit/**/*.less', ['uikit']);
});
