//...TASK: Scripts

import runSequence from 'run-sequence'
import ScriptCompiler from '../compiler/ScriptCompiler'

//...$ gulp scripts > Compile scripts for application and styleguide.
gulp.task('scripts', (cb) => {
  Logger.task('RUNNING TASK : scripts')
  runSequence(
    [
      'scripts:app',
      // 'scripts:guide',
    ],
  function () {
    Logger.taskComplete('FINISHED TASK : scripts')
    cb()
  })
})

/* $ gulp scripts:app */
gulp.task('scripts:app', function () {
  return ScriptCompiler.compileGlob (
    `${config.env[env].srcDir.scripts}/**/*.js`,
    config.env[env].dstDir.scripts,
    'app'
  )
})

/* $ gulp scripts:guide */
// gulp.task('scripts:styleguide', function () {
//   return ScriptCompiler.compileGlob(
//     `${config.env[env].src.gscripts}/**/*.js`,
//     config.env[env].src.gscripts,
//     'styleguide'
//   )
// })
