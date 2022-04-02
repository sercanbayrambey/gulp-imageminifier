var gulp = require('gulp'); 
const imagemin = require('gulp-imagemin');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask

gulp.task('imagemin', function () {
    return gulp.src('images/**/*').pipe(imagemin()).pipe(gulp.dest('result/'));
});