//...TASK > FONTS. .............................................................
import runSequence from 'run-sequence'

const argv = require('yargs').argv

/* $ gulp fonts */
gulp.task('fonts', function () {
  Logger.task('RUNNING TASK : fonts')
  return gulp.src(`${config.env[env].srcDir.fonts}/**/*`)
    .pipe(gulp.dest(config.env[env].dstDir.fonts))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : fonts') })
})
