const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-css');
const { watch, process } = require('gulp');

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('app/'));
});
gulp.task('css', function () { // 2.
    return gulp.src('src/**/*.css')

        .pipe(css())
        .pipe(gulp.dest('app/'));
});

gulp.task('js', () => { // 3.
    return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('app/'));
});


gulp.task('build', gulp.parallel('html', 'css', 'js'));

gulp.task('default', function () {
    watch(['main.js', 'src/**/*.js', 'src/**/*.css', 'src/index.html'], gulp.parallel('build'));
});
