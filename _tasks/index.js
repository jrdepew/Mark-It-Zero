//...Let's get some stuff.......................................................
import gulp from 'gulp'
import fs from 'fs'
import gutil from 'gulp-util'
import crypto from 'crypto'
import config from './config/config'
import Logger from './util/Logger'
import pkg from '../package.json'

const argv = require('yargs').argv

//...setup build env............................................................
var env = 'beta'
if      (argv.stage)    {   env = 'stage'   }
else if (argv.prod)     {   env = 'prod'    }

// ...Globals...................................................................
global.env = env
global.gulp = gulp
global.Logger = Logger
global.config = config
//global.proot = proot.master
//global.pname = proot.name

// ...Startup Banner log........................................................
Logger.banner('M A R K:::I T:::Z E R O')
Logger.header(`${pkg.name} @version ${pkg.version}`)
Logger.header(`By ${pkg.author.name} <${pkg.author.url}>`)

// ...Set cachebusting unique hash value if enabled for current build...........
global.CACHEBUST_HASH = false
if (config.env[env].cachebustAssets) {
    let currentDate = (new Date()).valueOf().toString()
    let random = Math.random().toString()
    global.CACHEBUST_HASH = crypto.createHash('md5').update(currentDate + random).digest('hex')
}

// ...Require all gulp tasks....................................................
Logger.notice('Autoloading the tasks...')
const tasks = fs.readdirSync('./_tasks/tasks/')
tasks.forEach(function (task) {
    if (/\.js/.test(task)) {
        require(`./tasks/${task}`)
    }
})

// ...Require gulp commands.....................................................
require('./commands')
