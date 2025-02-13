const gulp = require('gulp');
const replace = require('gulp-replace');

// Automatische Bilder
function generateImages() {
  return gulp.src('themes/**/*.html')
    .pipe(replace(/\[IMAGE:(.*?)\]/g, (match, tags) => {
      // Ersetze mit einem zufälligen Lorem Picsum Bild
      return `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`;
    }))
    .pipe(gulp.dest('docs/'));
}


exports.build = gulp.series(generateImages);
exports.default = exports.build;