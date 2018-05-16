/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
module.exports = {

    src: {
      main    : 'src',
      styles  : 'src/styles/app.scss',
      js      : 'src/scripts/*.js',
      imgs    : 'src/imgs/*.{png,jpg,gif}',
      fonts   : 'src/fonts'
    },
    dist: {
      main    : 'public',
      styles  : 'public/styles/',
      js      : 'public/scripts/',
      imgs    : 'public/imgs/*',
      fonts   : 'public/fonts/'
    },
    tasks: {
      imagemin    : 'imagemin',
      jslint      : 'jslint',
      jsmin       : 'jsmin',
      jsconcat    : 'jsconcat',
      jsbower     : 'jsbower',
      styles      : 'styles',
      cssmin      : 'cssmin',
      cssconcat   : 'cssconcat',
      html        : 'html',
      imgs        : 'imgs',
      browsersync : 'browsersync',
      zip         : 'zip'
    },
    syncConfig: {
      files: ['src/styles/*.scss','src/scripts/*.js', 'public/*.html', 'public/imgs/*.{png,jpg,gif}'],
      server: {
        baseDir: 'public',
        index: 'index.html'
      }
    }
}
