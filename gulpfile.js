"use strict";
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	filter = require('gulp-filter'),
	mocha = require('gulp-mocha');


function watch(){
	gulp.watch(['**/*.js', '!node_modules/**/*.js'], test);
}

function test(){
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({reporter: 'spec', ui: 'bdd'}));
}

function lint(){
	return gulp.src('**/*.js')
		.pipe(filter(['*', '!node_modules/**/*']))
		.pipe(jshint({node: true}))
		.pipe(jshint.reporter('default'));
}

var runTests = gulp.series(lint, test);

gulp.task('default', runTests);
gulp.task('watch', watch);
