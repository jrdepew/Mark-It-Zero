//...TASK: SVGs.................................................................

/* $ gulp svgs */
gulp.task('svgs', function () {
  Logger.task('RUNNING TASK : svgs')
  return gulp.src(`${config.env[env].srcDir.svgs}/**/*.svg`)
    .pipe(gulp.dest(config.env[env].dstDir.svgs))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : svgs') })
})
