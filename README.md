# Alarm Clock

#### An Epicodus project in Javascript using Gulp, Bower, Sass, Moment, and HTML 06.27.17

#### **By Anabel Ramirez and David Wilson**

## Description

This web application will allow a user to set an alarm.

**STARTING NEW PROJECT**

Two installations necessary for SASS:
1.  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2.  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

| Package | Installation | Variable | Task |
|:---:|:---:|:---:|:---:|
| npm |$ npm init |none needed | none |
| bower |$ bower init |none needed | none |
| gulp |$ npm install gulp --save-dev |var gulp = require('gulp'); | none |
| browser-sync |$ npm install browser-sync --save-dev |var browserSync = require('browser-sync').create(); | none |
| browserify |$ npm install browserify --save-dev|var browserify = require('browserify'); | gulp.task('jsBrowserify', ['concatInterface'], function() {return browserify({ entries: ['./tmp/allConcat.js'] }).bundle().pipe(source('app.js')).pipe(gulp.dest('./build/js'));}); |
| browserify dependencies |$ npm install vinyl-source-stream --save-dev |var source = require('vinyl-source-stream'); | none |
| concat |$ npm install gulp-concat --save-dev |var concat = require('gulp-concat'); | gulp.task('concatInterface', function() {return gulp.src(['./js/*-interface.js']).pipe(concat('allConcat.js')).pipe(gulp.dest('./tmp'));}); |
| uglify(minify) |$ npm install gulp-uglify --save-dev |var uglify = require('gulp-uglify'); | gulp.task("minifyScripts", ["jsBrowserify"], function(){return gulp.src("./build/js/app.js").pipe(uglify()).pipe(gulp.dest("./build/js"));}); |
| utilities |$ npm install gulp-util --save-dev |var utilities = require('gulp-util'); <br> var buildProduction = utilities.env.production; | gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){browserSync.reload();});</br>gulp.task('bowerBuild', ['bower'], function(){browserSync.reload();});</br>gulp.task('htmlBuild', function() {browserSync.reload();}); |
| del(clean) |$ npm install del --save-dev |var del = require('del'); | gulp.task("clean", function(){return del(['build', 'tmp']);}); |
| jshint(error checking) |$ npm install jshint --save-dev |var jshint = require('gulp-jshint'); | gulp.task('jshint', function(){return gulp.src(['js/wildcard.js']).pipe(jshint()).pipe(jshint.reporter('default'));}); |
| same as above |$ npm install gulp-jshint --save-dev |none needed | none |
| bower-files |$ npm install bower-files --save-dev |var lib = require('bower-files')(); | gulp.task('bowerCSS', function () {return gulp.src(lib.ext('css').files).pipe(concat('vendor.css')).pipe(gulp.dest('./build/css'));});</br>gulp.task('bowerJS', function () {return gulp.src(lib.ext('js').files).pipe(concat('vendor.min.js')).pipe(uglify()).pipe(gulp.dest('./build/js'));});</br>gulp.task('bower', ['bowerJS', 'bowerCSS']); |
| jquery |$ bower install jquery --save |none needed | reference build task |
| bootstrap |$ bower install bootstrap --save |"overrides":{</br>"bootstrap": {</br>"main": [</br>"less/bootstrap.less", </br>"dist/css/bootstrap.css", </br>"dist/js/bootstrap.js"]}}| reference build task |
| moment |$ bower install moment --save |none needed | reference build task |
| sass | gem install sass </br> npm install gulp-sass gulp-sourcemaps --save-dev | var sass = require('gulp-sass'); </br> var sourcemaps = require('gulp-sourcemaps'); | gulp.task('cssBuild', function() {return gulp.src(['scss/*.scss']).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('./build/css')).pipe(browserSync.stream());}); |
|build | no install | no variables | gulp.task('serve', function() {browserSync.init({server: {baseDir: "./",index: "index.html"}});gulp.watch(['js/wildcard.js'], ['jsBuild']);gulp.watch(['bower.json'], ['bowerBuild']);gulp.watch(['wildcard.html'], ['htmlBuild']);gulp.watch(["scss/wildcard.scss"], ['cssBuild']);});</br>gulp.task('build', ['clean'], function(){if (buildProduction) {gulp.start('minifyScripts');} else {gulp.start('jsBrowserify');}gulp.start('bower');gulp.start('cssBuild');}); |


**CLONING PROJECT**

| Package | Installation |
|:---:|:---:|
| npm |$ npm install |
| bower |$ bower install |

## Setup/Installation Requirements



## Known Bugs



## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used

* Javascript
* HTML
* SASS
* Gulp
* Bower

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Anabel Ramirez and David Wilson**
