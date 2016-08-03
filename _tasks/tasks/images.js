//...TASK > Images..............................................................
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'

gulp.task('images', function () {
    Logger.task('RUNNING TASK : Images')
    // Copy and optimize images to build dir
    return gulp.src(`${config.env[env].srcDir.images}/**/*.{png,jpg,jpeg,gif}`)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(config.env[env].dstDir.images))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : Images') })
})
