//...TASK > DATA.. .............................................................
import runSequence from 'run-sequence'

const argv = require('yargs').argv

gulp.task('data', function () {
    Logger.task('RUNNING TASK : Data')
    return gulp.src(`${config.env[env].srcDir.data}/**/*`)
        .pipe(gulp.dest(config.env[env].dstDir.data))
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : Data') })
})
