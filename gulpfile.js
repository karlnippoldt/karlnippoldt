const { watch, series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const shell = require("gulp-shell");

function eleventy(cb) {
  shell("eleventy");
  cb();
}

function css() {
  return src("./src/assets/scss/main.scss")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(dest("./src/assets/css/"));
}

exports.watch = function() {
  watch("./src/assets/scss/**/*.scss", { ignoreInitial: false }, css);
};
exports.build = series(css, eleventy);
exports.default = series(css, eleventy);
