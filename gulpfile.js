var gulp = require('gulp'),
    changed = require('gulp-changed'),
    livereload = require('gulp-livereload');

var src_files = 'phonecat/**/*.{html,jade,css,scss,js}';
var dest_dir = 'temp/watch';

gulp.task('livereload', function() {
  return gulp.src(src_files)
    //.pipe(changed(dest_dir))
    .pipe(gulp.dest(dest_dir))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(src_files, ['livereload'])
});

gulp.task('default', ['watch']);
