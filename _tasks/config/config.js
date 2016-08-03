//...Configuration Settings.....................................................
import gutil from 'gulp-util'

// ...Projects..................................................................
if(gutil.env.mpui === true) {
    var proot = {
        master: 'MPUI/',
        name: 'MPUI'
    }
}
//...Directories................................................................
const MASTER        = './master/'
const GUIDE         = './styles/'
const ROOT          = proot.master
const B_ROOT        = proot.master + './_beta/'
const S_ROOT        = proot.master + './_stage/'
const P_ROOT        = proot.master + './_prod/'

//...HERE WE GO.................................................................
export default {
    verbose:true,
    env: {
        beta: {
            html: {
                minify:         false,
            },
            style: {
                optimize:       false,
                sourcemaps:     true,
            },
            scripts: {
                bundle:         false,
                uglify:         false,
                stripDebug:     false,
                sourcemaps:     true,
            },
            cachebustAssets:    false,
            srcDir: {
                root:           B_ROOT,
                styles:         B_ROOT + 'css/',
                sass:           B_ROOT + 'sass/',
                scripts:        B_ROOT + 'scripts/',
                pages:          B_ROOT + 'jade/',
                fonts:          B_ROOT + 'fonts/',
                images:         B_ROOT + 'images/',
                svgs:           B_ROOT + 'svg/',
                videos:         B_ROOT + 'video/',
                data:           B_ROOT + 'data/',
                vendor:         B_ROOT + 'vendor/',
                guide:          B_ROOT + 'guide/',
            },
            dstDir: {
                root:           S_ROOT,
                styles:         S_ROOT + 'css/',
                sass:           S_ROOT + 'css/',
                scripts:        S_ROOT + 'scripts/',
                pages:          S_ROOT + '',
                fonts:          S_ROOT + 'fonts/',
                images:         S_ROOT + 'images/',
                svgs:           S_ROOT + 'svg/',
                videos:         S_ROOT + 'video/',
                data:           S_ROOT + 'data/',
                vendor:         S_ROOT + 'vendor/',
                guide:          S_ROOT + 'guide/',
            },
        },
        stage: {
            html: {
                minify:         true,
            },
            styles: {
                optimize:       true,
                sourcemaps:     false,
            },
            scripts: {
                bundle:         true,
                uglify:         true,
                stripDebug:     true,
                sourcemaps:     false,
            },
            cachebustAssets:    true,
            srcDir: {
                root:           B_ROOT,
                styles:         B_ROOT + 'css/',
                sass:           B_ROOT + 'sass/',
                scripts:        B_ROOT + 'scripts/',
                pages:          B_ROOT + 'jade/',
                fonts:          B_ROOT + 'fonts/',
                images:         B_ROOT + 'images/',
                svgs:           B_ROOT + 'svg/',
                videos:         B_ROOT + 'video/',
                data:           B_ROOT + 'data/',
                vendor:         B_ROOT + 'vendor/',
                guide:          B_ROOT + 'guide/',
            },
            dstDir: {
                root:           S_ROOT,
                styles:         S_ROOT + 'css/',
                sass:           S_ROOT + 'css/',
                scripts:        S_ROOT + 'scripts/',
                pages:          S_ROOT + '',
                fonts:          S_ROOT + 'fonts/',
                images:         S_ROOT + 'images/',
                svgs:           S_ROOT + 'svg/',
                videos:         S_ROOT + 'video/',
                data:           S_ROOT + 'data/',
                vendor:         S_ROOT + 'vendor/',
                guide:          S_ROOT + 'guide/',
            },
        },
        prod: {
            html: {
                minify:         true,
            },
            styles: {
                optimize:       true,
                sourcemaps:     false,
            },
            scripts: {
                bundle:         true,
                uglify:         true,
                stripDebug:     true,
                sourcemaps:     false,
            },
            cachebustAssets:    true,
            srcDir: {
                root:           B_ROOT,
                styles:         B_ROOT + 'css/',
                sass:           B_ROOT + 'sass/',
                scripts:        B_ROOT + 'scripts/',
                pages:          B_ROOT + 'jade/',
                fonts:          B_ROOT + 'fonts/',
                images:         B_ROOT + 'images/',
                svgs:           B_ROOT + 'svg/',
                videos:         B_ROOT + 'video/',
                data:           B_ROOT + 'data/',
                vendor:         B_ROOT + 'vendor/',
                guide:          B_ROOT + 'guide/',
            },
            dstDir: {
                root:           P_ROOT,
                styles:         P_ROOT + 'css/',
                sass:           P_ROOT + 'css/',
                scripts:        P_ROOT + 'scripts/',
                pages:          P_ROOT + '',
                fonts:          P_ROOT + 'fonts/',
                images:         P_ROOT + 'images/',
                svgs:           P_ROOT + 'svg/',
                videos:         P_ROOT + 'video/',
                data:           P_ROOT + 'data/',
                vendor:         P_ROOT + 'vendor/',
                guide:          P_ROOT + 'guide/',
            },
        },
    },
};

//...
