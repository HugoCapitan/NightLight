const path        = require('path');
const gulp        = require('gulp');
const babel       = require('gulp-babel');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const html2string = require('gulp-html2string');

gulp.task('scripts', () => {
  gulp.src([
    'src/js/nightlight.module.js', 
    'src/js/*.js'
  ])
  .pipe(babel({ presets: ['es2015'] }))  
  .pipe(concat('nightlight.js'))
  .pipe(gulp.dest('dist'))
});

gulp.task('templates', () => {
  gulp.src('src/templates/*.html')
  .pipe(html2string({
    base: path.join(__dirname, 'src/templates'),
    createObj: true,
    objName: 'TEMPLATES'
  }))
  .pipe(concat('nightlight-tpls.js'))
  .pipe(gulp.dest('dist'))
})

gulp.task('styles', () => {
  gulp.src('src/styles/*.css')
  .pipe(concat('nightlight.css'))
  .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['scripts'])
  gulp.watch('src/styles/*.css', ['styles'])
  gulp.watch('src/templates/*.html', ['templates'])
})

gulp.task('default', ['scripts', 'templates', 'styles', 'watch']);