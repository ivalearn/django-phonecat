var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload');

var debug = true;

var src_js = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/angular/angular.js',
  'app/app.js',
];

var src_css = [
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/bootstrap/dist/css/bootstrap-theme.css',
];

var src_sass = [
  'app/app.scss',
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

gulp.task('js', function() {
  var pipe = gulp.src(src_js)
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  return pipe;
});

gulp.task('css', function() {
  var pipe = gulp.src(src_css)
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  return pipe;
});

gulp.task('sass', function() {
  var pipe = gulp.src(src_sass)
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  return pipe;
});

gulp.task('jade', function() {
  var pipe = gulp.src(src_jade)
    .pipe(jade(jade_opts))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  return pipe;
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(src_js, ['js'])
  gulp.watch(src_css, ['css'])
  gulp.watch(src_sass, ['sass'])
  gulp.watch(src_jade, ['jade'])
});

gulp.task('default', ['js', 'css', 'sass', 'jade', 'watch']);
