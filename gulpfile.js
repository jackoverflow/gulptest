var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function(){
   return gulp.src('app/scss/styles.scss')
   		.pipe(sass())
   		.pipe(gulp.dest('app/src'))
});

//Uglify CSS
gulp.task('uglifycss', function () {
  gulp.src('app/src/styles.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('app/css/'));
});

//Watch Task
gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/src/*.css', ['uglifycss']);
})


gulp.task('default',['sass','uglifycss','watch']);

