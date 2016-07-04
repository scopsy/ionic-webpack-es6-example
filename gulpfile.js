var gulp            = require('gulp');
var gutil           = require('gulp-util');
var bower           = require('bower');
var concat          = require('gulp-concat');
var sass            = require('gulp-sass');
var minifyCss       = require('gulp-minify-css');
var rename          = require('gulp-rename');
var sh              = require('shelljs');
var open            = require('open');
var path            = require('path');
var webpack         = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig   = require('./webpack.config.js');
var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./www/js/**/*.js']
};

gulp.task('default', ['sass']);

gulp.task('webpack', function (callback) {
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: true
    }));

    callback();
  });
});

gulp.task('webpack-dev-server', function (callback) {
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: path.join(__dirname, 'www'),
    stats: {
        colors: true
    }
}).listen(8100, 'localhost', function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);

    var url = 'http://localhost:8100/webpack-dev-server/index.html';
    open(url);
    gutil.log('[webpack-dev-server]', url);
  });
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['webpack']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
