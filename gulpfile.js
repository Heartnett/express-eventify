const gulp = require("gulp");
const eslint = require("gulp-eslint");
const uglify = require("gulp-uglify");
const pump = require("pump");
const buble = require("gulp-buble");

gulp.task("lint", () => {
    return gulp
        .src("./src/lib.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("minify", (cb) => {
    pump([
        gulp.src("src/*.js"),
        buble(),
        uglify(),
        gulp.dest("dist")
    ], cb);
});