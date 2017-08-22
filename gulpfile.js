const gulp = require("gulp")
const eslint = require("gulp-eslint")
const esformatter = require("gulp-esformatter")

/*eslint-disable indent*/

gulp.task("eslint", () => gulp.src(["gulpfile.js", "**/*.js", "!node_modules/**"])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()))

gulp.task("format", () => gulp.src(["gulpfile.js", "**/*.js", "!node_modules/**"]).pipe(esformatter()).pipe(gulp.dest(".")))

/*eslint-enable*/

gulp.task("default", ["eslint", "format"])
