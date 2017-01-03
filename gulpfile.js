let gulp = require('gulp');
let removeComments = require('gulp-strip-comments');
let sass = require('gulp-sass');

gulp.task('default',['html', 'css', 'js']);

gulp.task('html', function() {
    gulp.src('shop.html')
    .pipe(removeComments())
    .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
    gulp.src('shop.scss')
    .pipe(sass())
    .pipe(removeComments())
    .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    gulp.src('shop.js')
    .pipe(removeComments())
    .pipe(gulp.dest('public/'));
});