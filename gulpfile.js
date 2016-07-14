var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean_css = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

var debug = true;

var src_js = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/angular/angular.js',
  'app/phone-app.js',
  'app/phone-list/phone-list.js',
];

var src_css = [
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/bootstrap/dist/css/bootstrap-theme.css',
];

var src_sass = [
  'app/phone-app.scss',
  'app/phone-list/phone-list.scss',
];

var src_jade = [
  'app/**/*.jade',
];

function basename(path) { return path.split('/').reverse()[0]; }

function scss2css(name) { return name.replace(/\.scss$/, '.css'); }

var jade_opts = {
    pretty: true,
    locals: {
      load_js: src_js.map(basename),
      load_css: src_css.map(basename).concat(src_sass.map(basename).map(scss2css)),
      debug: debug,
    }
};

var sass_opts = {
  outputStyle: 'expanded',
};

gulp.task('js', function() {
  var p = gulp.src(src_js)
  if (!debug) {
    p = p.pipe(concat('all.js'))
         .pipe(uglify());
  }
  p = p.pipe(gulp.dest('dist'))
       .pipe(livereload());
  return p;
});

gulp.task('css', function() {
  var p = gulp.src(src_css);
  if (!debug) {
    p = p.pipe(concat('all.css'))
         .pipe(clean_css({ keepSpecialComments: 0 }));
  }
  p = p.pipe(gulp.dest('dist'))
       .pipe(livereload());
  return p;
});

gulp.task('sass', function() {
  var p = gulp.src(src_sass).pipe(sass(sass_opts));
  if (!debug) {
    p = p.pipe(concat('sass.css'))
         .pipe(clean_css());
  }
  p = p.pipe(gulp.dest('dist'))
       .pipe(livereload());
  return p;
});

gulp.task('jade', function() {
  var p = gulp.src(src_jade)
    .pipe(jade(jade_opts))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  return p;
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(src_js, ['js'])
  gulp.watch(src_css, ['css'])
  gulp.watch(src_sass, ['sass'])
  gulp.watch(src_jade, ['jade'])
});

gulp.task('default', ['js', 'css', 'sass', 'jade', 'watch']);
