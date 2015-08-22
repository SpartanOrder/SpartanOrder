var gulp = require('gulp'),

  //////////////////
  // Dependencies //
  //////////////////

  // Shell
  shell = require('gulp-shell'),

  // Prepocessing
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  autoprefixer = require('gulp-autoprefixer'),

  // Error Handling
  plumber = require('gulp-plumber'),

  // Easy Development :D
  connect = require('gulp-connect');

//////////////////////////////
// Simple Livereload Server //
//////////////////////////////

gulp.task('live-server', function() {
  connect.server({
    root: 'app',
    port: 8080,
    livereload: true
  });
});

//////////////////
// Default Task //
//////////////////

gulp.task('default', [
  'live-server',
  'script',
  'style',
  'watch'
]);

/////////////////////
// HTML Autoreload //
/////////////////////

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//////////////////////////
// Script Related Tasks //
//////////////////////////

gulp.task('script', function() {
  gulp.src('app/js/**/*.js')
    .pipe(plumber())
    // .pipe(uglify())
    // .pipe(gulp.dest('app/script/min/'))
    .pipe(connect.reload());
});

//////////////////////////
// Style Releated Tasks //
//////////////////////////

gulp.task('style', function() {
  gulp.src('app/scss/style.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('app/css/'))
    .pipe(connect.reload());
});

/////////////////////////
// Image Optimise Taks //
/////////////////////////

gulp.task('image', function() {
  gulp.src('app/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/imgs/build/'));
});



/////////////////
// Watch Tasks //
/////////////////

gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['script']);
  gulp.watch('app/scss/**/*.scss', ['style']);
  gulp.watch('app/*.html', ['html']);
});

