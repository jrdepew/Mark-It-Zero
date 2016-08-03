//...TASK > Jade..............................................................
import jade from 'gulp-pug'
import plumber from 'gulp-plumber'

const argv = require('yargs').argv

gulp.task('jade', function () {
    Logger.task('RUNNING TASK : Jade')
    return gulp.src(`${config.env[env].srcDir.jade}/**/*`)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(config.env[env].dstDir.jade))
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : Jade') })
})
