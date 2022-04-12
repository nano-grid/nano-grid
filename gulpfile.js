'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('scss', () => {
  return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
  .pipe(cleanCSS({debug: true}, (details) => {
    console.log(`---------------- ${details.name}`);
    console.log(`originalSize => ${details.stats.originalSize}`);
    console.log(`minifiedSize => ${details.stats.minifiedSize}`);
  }))
  .pipe(gulp.dest('dist'));
});

// ----- watch
exports.watch = function () {
  gulp.watch('./scss/*.scss', ['sass']);
};