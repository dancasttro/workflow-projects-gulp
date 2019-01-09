'use strict';

/****************************************************************
1. DEPENDENCIES
****************************************************************/

// var gulp = require('gulp'),
//     config = require('./gulp.conf.js'),
//     header = require('gulp-header'),
//     browserSync = require('browser-sync'),
//     reload = browserSync.reload,
//     requireDir = require('require-dir'),
//     dir = requireDir('./tasks');

// gulp.task('build', [config.tasks.styles, config.tasks.cssmin, config.tasks.jsmin, config.tasks.imagemin,config.tasks.zip]);

// gulp.task('start', [config.tasks.styles, config.tasks.imagemin, config.tasks.jsconcat, config.tasks.browsersync]);

// gulp.task('default',['start'], function() {
//   gulp.watch('src/styles/**/*.scss', [config.tasks.styles, reload]);
//   gulp.watch(config.src.js, [config.tasks.jslint, reload]);
//   gulp.watch('src/imgs/*.{png,jpg,gif}', [config.tasks.imagemin, reload]);
//   gulp.watch('public/*.html', reload);
// });


const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);
