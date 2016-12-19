'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
  js: 'src/**/*.js',
  dist: 'dist/'
};

gulp.task('es2015', () => {
  gulp.src(paths.js)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%=error.message%>')
    }))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('eslint', () => {
  gulp.src(paths.js)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%=error.message%>')
    }))
    .pipe(eslint());
})

gulp.task('esWatcher', () => {
  gulp.watch(paths.js, ['es2015', 'eslint']);
});

gulp.task('default', ['esWatcher']);
