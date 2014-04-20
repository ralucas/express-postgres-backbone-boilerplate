var gulp    = require('gulp'),
    plugins = require("gulp-load-plugins")(),
    config  = require('./lib/config');

var paths = {
    scripts: ['./lib/*.js'],
    dest: './build/',
    test: './test/*.js'
};

gulp.task('test', function() {
    return gulp.src(paths.test)
        .pipe(plugins.mocha());
});

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(plugins.jshint());
});

gulp.task('run', function() {
    plugins.nodemon({
        script: 'server.js',
        ext: 'js json html',
        env: {'NODE:ENV': 'development'}
    }).on('restart', function() {
        console.log('Server Restarted');
    });
});

// TODO: Default task runs the tests, lints, starts the server,
// then watches for changes
gulp.task('default', ['lint', 'run']);

gulp.task('check', ['lint', 'test']);
