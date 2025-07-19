import fs from 'fs-extra';
import gulp from 'gulp';
import modernizr from 'modernizr';
import config from './config.js';


gulp.task('modernizr', function(done) {
  modernizr.build(config, function(output) {
    fs.outputFile('dist/modernizr.js', output).then(() => {
      done();
    })
  });
});


gulp.task('default', gulp.series('modernizr'));
