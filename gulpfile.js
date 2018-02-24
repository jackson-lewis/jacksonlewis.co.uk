//  ////  ////  --  --|    GULP



var gulp 			= require( 'gulp' ),

	postcss 		= require( 'gulp-postcss' ),
	sass 			= require( 'gulp-sass' ),
	autoprefixer 	= require( 'autoprefixer' ),

    browserSync 	= require( 'browser-sync' ).create();


// SASSY GOODNESS
gulp.task( 'sass', function () {

  	var processors = [ autoprefixer ];

  	return gulp.src( 'scss/style.scss' )
  		.pipe( sass().on( 'error', sass.logError ) )
    	.pipe( postcss( processors ) )
    	.pipe( gulp.dest( 'prod/css' ) )
    	.pipe( browserSync.reload({
	    	stream: true
	    }))
});


// ALWAYS WATCHIN
gulp.task( 'watch', [ 'reload', 'sass' ], function(){
	gulp.watch( 'scss/**/*.scss', [ 'sass' ] )
	gulp.watch( 'prod/js/*.js', browserSync.reload )
	gulp.watch( 'prod/**/*.php' ).on( 'change', browserSync.reload );
})


// LINK BROWSERSYNC TO MAMP
gulp.task( 'reload', function() {
    browserSync.init({
        proxy: 'http://localhost/year%20three/creative/portfolio/site/build/prod/',
        port: 8080
    });
});