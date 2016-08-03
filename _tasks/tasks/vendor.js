//...TASK > DATA.. .............................................................
const argv = require('yargs').argv

gulp.task('vendor', function () {
    Logger.task('RUNNING TASK : Vendor')
    return gulp.src(`${config.env[env].srcDir.vendor}/**/*`)
        .pipe(gulp.dest(config.env[env].dstDir.vendor))
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : Vendor') })
})
