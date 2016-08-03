//...TASK > Styles .............................................................
import cleanCSS from 'gulp-clean-css'
import csscomb from 'gulp-csscomb'

const argv = require('yargs').argv

gulp.task('css', function () {
    Logger.task('RUNNING TASK : CSS')
    return gulp.src(`${config.env[env].srcDir.css}/**/*`)
        .pipe(cleanCSS())
        .pipe(csscomb().on('error', gutil.log))
        .pipe(gulp.dest(config.env[env].dstDir.css))
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : CSS') })
})
