// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");
const shell = require('gulp-shell');

// a task to generate the css with sass
gulp.task('css', function() {
    return gulp.src('./src/assets/scss/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});

// a task to generate site with eleventy
gulp.task('eleventy:build', shell.task('eleventy'));
gulp.task('eleventy:serve', shell.task('eleventy --serve'));

/*
  Watch folders for changess
*/
gulp.task('watch', function() {
    gulp.watch('./src/assets/scss/**/*.scss', gulp.parallel('css'));
});


/*
Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
    'css',
    'eleventy:build',
));

function defaultTask(cb) {
    cb();
}

exports.default = defaultTask