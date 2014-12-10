var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var karma = require('gulp-karma');

gulp.task('uglify', function() {
    gulp.src('src/client/app/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/client/build'))
});

gulp.task('test', function() {
    return gulp.src([])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});