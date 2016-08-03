//...TASK: Styles
import runSequence from 'run-sequence'
import StyleCompiler from '../compiler/StyleCompiler'

//...$ gulp styles > Preprocess styles for application and styleguide.
gulp.task('sass', (cb) => {
  Logger.task('RUNNING TASK : SASS')
  runSequence(
    [
      'sass:app',
      // 'sass:guide',
    ],
  function () {
    Logger.taskComplete('FINISHED TASK : SASS')
    cb()
  })
})

gulp.task('sass:app', function () {
  return StyleCompiler.compileGlob(
    `${config.env[env].srcDir.sass}/**/*.{scss,sass}`,
    config.env[env].dstDir.sass,
    'app'
  )
})

/* $ gulp sass:styleguide */
// gulp.task('sass:guide', function () {
//   return StyleCompiler.compileGlob(
//     `${config.env[env].src.guide}/**/*.{scss,sass}`,
//     config.env[env].src.guide,
//     'styleguide'
//   )
// })
