/* global process */

const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const makeDir = require('make-dir');
const proxy = require('http-proxy-middleware');
const rename = require('gulp-rename');
const rev = require('gulp-rev');
const revFormat = require('gulp-rev-format');
const sass = require('gulp-sass');
const semaphore = require('stream-semaphore');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function browserSyncProxy(request, response, next) {
    let target = 'http://' + request.headers.host.replace(':3000', '');
    proxy({
        changeOrigin: false,
        logLevel: 'warn',
        onProxyReq: function (proxyReq) {
            proxyReq.setHeader('x-browser-sync', 'true');
        },
        target,
        xfwd: true
    })(request, response, next);
}

function handleError(error) {
    gutil.log(gutil.colors.red('[Error]') + '\n' + error);
    gutil.beep();
    if (browserSync.active === false) {
        process.exit();
    }
}

function jsBase() {
    return browserify(
            {
                base: '.',
                debug: true,
                entries: 'js/interitty.js'
            })
            .transform('babelify', {
                presets: ['es2015']
            })
            .bundle()
            .pipe(source('js/interitty.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                largeFile: true,
                loadMaps: true
            }));
}

function sassBase() {
    return gulp.src(
            [
                'css/*.scss'
            ], {base: '.'})
            .pipe(sourcemaps.init({
                largeFile: true,
                loadMaps: true
            }))
            .pipe(sass().on('error', handleError));
}

gulp.task('clean-css', () =>
    del([
        '../www/assets/css'
    ], {
        force: true
    })
);

gulp.task('clean-js', () =>
    del([
        '../www/assets/js'
    ], {
        force: true
    })
);

gulp.task('default', ['js', 'sass']);

gulp.task('dev', ['default'], function () {
    browserSync.init({
        injectChanges: true,
        logLevel: 'warn',
        logSnippet: false,
        middleware: [
            browserSyncProxy
        ],
        open: false
    });

    gulp.watch('js/*.js', ['js']);
    gulp.watch('css/*.scss', ['sass']);
});

gulp.task('js', ['clean-js', 'js-dev', 'js-prod']);

gulp.task('js-dev', () =>
    jsBase().pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('../www/assets'))
            .pipe(browserSync.stream({
                once: true
            }))
);

gulp.task('js-prod', () =>
    jsBase().pipe(uglify().on('error', handleError))
            .pipe(rev())
            .pipe(revFormat({
                prefix: '.',
                suffix: '.cache'
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('../www/assets'))
            .pipe(semaphore.lockStream('manifest', 'js'))
            .pipe(rev.manifest({
                path: '../www/assets/manifest.json',
                merge: true
            }))
            .pipe(gulp.dest('.'))
            .pipe(semaphore.unlockStream('manifest', 'js'))
);

gulp.task('sass', ['clean-css', 'sass-dev', 'sass-prod']);

gulp.task('sass-dev', () =>
    sassBase().pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('../www/assets'))
            .pipe(browserSync.stream({
                once: true
            }))
);

gulp.task('sass-prod', () =>
    sassBase().pipe(cleanCSS({compatibility: '*'}))
            .pipe(rev())
            .pipe(revFormat({
                prefix: '.',
                suffix: '.cache'
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('../www/assets'))
            .pipe(semaphore.lockStream('manifest', 'sass'))
            .pipe(rev.manifest({
                path: '../www/assets/manifest.json',
                merge: true
            }))
            .pipe(gulp.dest('.'))
            .pipe(semaphore.unlockStream('manifest', 'sass'))
);
