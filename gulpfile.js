const gulp = require("gulp")
const eslint = require("gulp-eslint")
/*eslint-disable indent*/
gulp.task("eslint", () => gulp.src(["gulpfile.js", "**/*.js", "!node_modules/**"])
                              .pipe(eslint())
                              .pipe(eslint.format())
                              .pipe(eslint.failAfterError()))
/*eslint-enable*/

gulp.task("default", ["eslint"])
