//...TASK: Watch
import runSequence from 'run-sequence'
import watch from 'gulp-watch'
import browserSync from 'browser-sync';

//...$ gulp watch > Watch files for changes and run associated build tasks.
gulp.task('watch', function() {
    Logger.task('Running Task :: Watch')
    watch(`${config.env[env].srcDir.sass}/**/*.{scss,sass}`, {
        name: 'SASS Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('sass')
    })
    watch(`${config.env[env].srcDir.css}/**/*`, {
        name: 'CSS Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('css')
    })
    watch(`${config.env[env].srcDir.jade}/**`, {
        name: 'Jade Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('jade')
    })
    watch(`${config.env[env].srcDir.scripts}/**`, {
        name: 'Script Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('scripts')
    })
    watch(`${config.env[env].srcDir.fonts}/**`, {
        name: 'Font Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('fonts')
    })
    watch(`${config.env[env].srcDir.images}/**`, {
        name: 'Image Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('images')
    })
    watch(`${config.env[env].srcDir.vendor}/**`, {
        name: 'Vendor Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('vendor')
    })
    watch(`${config.env[env].srcDir.data}/**`, {
        name: 'Data Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('data')
    })
    watch(`${config.env[env].srcDir.video}/**`, {
        name: 'Video Watcher',
        verbose: config.verbose
    }, function () {
        gulp.start('video')
    })
});
