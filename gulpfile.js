var gulp = require('gulp'),
    gutil = require('gulp-util'),
    flatten = require('gulp-flatten'),
    rimraf = require('rimraf'),
    exec = require('child_process').spawn,
    NwBuilder = require('node-webkit-builder');

gulp.task('copy-js', function () {
    return gulp.src('vendor/**/*.min.js')
        .pipe(flatten())
        .pipe(gulp.dest('./build/src/js'));
});

gulp.task('copy-css', function () {
    return gulp.src('vendor/**/*.min.css')
        .pipe(flatten())
        .pipe(gulp.dest('./build/src/css'));
});

gulp.task('copy-app', function () {
    return gulp.src(['app/**', 'package.json'])
        .pipe(gulp.dest('./build/src'));
});

gulp.task('copy', ['copy-js', 'copy-css', 'copy-app']);

gulp.task('clean-release', function (cb) {
    rimraf('./build/release', cb);
});

gulp.task('build-nw', ['copy', 'clean-release'], function () {
    var nw = new NwBuilder({
        platforms: ['win'],
        files: 'build/src/**',
        // winIco: 'build/src/ico/main.ico',
        buildDir: 'build/release',
        cacheDir: 'build/cache'
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        // Ignore 'Zipping... messages
        if (msg.indexOf('Zipping') !== 0)
            console.log(msg)
    });

    // Build returns a promise
    nw.build().then(function () {
       console.log('All Done!');
    }).catch(function (error) {
        console.error(error);
    });
});

gulp.task('run', function () {
    exec('build/release/Ping/win/nw.exe')
});

gulp.task('build', ['build-nw']);

gulp.task('default', ['build']);
