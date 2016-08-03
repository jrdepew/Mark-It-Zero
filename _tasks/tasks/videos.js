//...TASK > DATA.. .............................................................
const argv = require('yargs').argv

gulp.task('videos', function () {
    Logger.task('RUNNING TASK : Videos')
    return gulp.src(`${config.env[env].srcDir.videos}/**/*`)
        .pipe(gulp.dest(config.env[env].dstDir.videos))
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : Videos') })
})
