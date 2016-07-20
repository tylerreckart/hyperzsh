var gulp       = require('gulp')
var lintspaces = require('gulp-lintspaces')

gulp.task('test', function() {
  return gulp.src('hyperzsh.zsh-theme')
    .pipe(lintspaces(
      options = {
        newline: true,
        newlineMaximum: 2,
        traillinespaces: true,
        indentation: 'spaces',
        spaces: 2
      }
    ))
    .pipe(lintspaces.reporter())
})
