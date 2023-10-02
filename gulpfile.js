var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const debug = require('gulp-debug');
var imageResize = require('gulp-image-resize');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask

gulp.task('imagemin', function () {
    return gulp.src('images/**/*')

        .pipe(debug({ title: 'minify start for:' }),)
       /*  .pipe(imageResize({
            width: 1440,
            crop: false,
            upscale: true,
            imageMagick: true
        })) */
        .pipe(debug({ title: 'resized image:' }),)
        .pipe(
            imagemin([
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.mozjpeg({ quality: 85, progressive: true }),
            ]))
        //.pipe(webp())
        .pipe(gulp.dest('result/'))
        .pipe(debug({ title: 'minified::' }),)
});
