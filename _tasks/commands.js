// ...gulp task series commands are defined here................................
import runSequence from 'run-sequence'

//...Let's get default..........................................................
gulp.task('default', (cb) => {
    let modeText = 'Beta'
    if      (env === 'stage')   { modeText = 'Stage'}
    else if (env === 'prod')    { modeText = 'Production'}
    Logger.notice('Running tasks in ${modeText} mode...')
    runSequence(
        'clean',
        [
            'styles',
            'sass',
            'scripts',
            'images',
            'svg',
            'fonts',
            'video',
            'data',
            'vendor',
            'pages',
        ],
        'cachebust-css-urls',
        'templating',
        'serve',
        'watch'
    )
})
