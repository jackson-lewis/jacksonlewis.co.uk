$(document).ready(function() {

	var width 	= $(window).width();


	if ( width < 767 ) {

		function nav_verify() {
			var verify = $( 'nav' ).children( 'ul' ).children( 'li' );

			if ( verify.css( 'left' ) == '0px' ) {
				var q = true;
			}

			if ( q === true ) {
				verify.css({ left: 300, opacity: 0 });
			} else {
				var i = 0, j, k,
					items = $( 'nav' ).children( 'ul' ).children( 'li' );

				setTimeout( function() {
					for ( i; i <= items.length; i++ ) {

						k = i * 50;

						if ( i <= 3 ) {
							slider( $( 'nav' ).children( 'ul' ).first().children( 'li:nth-child('+i+')' ), 0 + k );
						} else if ( i > 3 ) {
							j = i - 3;
							slider( $( 'nav' ).children( '#site' ).children( 'li:nth-child(' + j + ')' ), 0 + k );
						}
					}
				}, 100 );

				function slider( item, timer ) {
					item.delay( timer ).animate({ left: 0, opacity: 1 }, 800 );
				}
			}
		}

		$("#toggle").click( function() {

			$(this).toggleClass('change');
			$('body').toggleClass('no-scroll');
			$( 'nav' ).fadeToggle();

			nav_verify();
		});

		$('header li').click(function() {
            $('nav').fadeOut(400);
            $('#toggle').removeClass('change');
            $('body').removeClass('no-scroll');

            nav_verify();
        });

	}


	var industry  		= $( 'div[data-chapter="industry"] h2' ).offset().top - 59,
		initiation  	= $( 'div[data-chapter="initiation"]' ).offset().top - 59,
		cv  			= $( 'div[data-chapter="cv"]' ).offset().top - 59,
		business_card  	= $( 'div[data-chapter="business card"]' ).offset().top - 59,
		portfolio  		= $( 'div[data-chapter="portfolio"]' ).offset().top - 59,

		chap_1 			= $('li[data-link="industry"]'),
		chap_2 			= $('li[data-link="initiation"]'),
		chap_3 			= $('li[data-link="cv"]'),
		chap_4 			= $('li[data-link="business card"]'),
		chap_5 			= $('li[data-link="portfolio"]');


	$(window).on('scroll', function() {

		var scroll 		= $(this).scrollTop(),
			c_pink      = '#D9377E',
			c_blue		= '#375096';

		if ( width < 1260 ) {

			if ( scroll > industry && scroll < initiation ) {
	            chap_1.css({ 'color': c_pink });
	        } else {
	            chap_1.css({ 'color': c_blue });
	        }

	        if ( scroll > initiation && scroll < cv ) {
	            chap_2.css({ 'color': c_pink });
	        } else {
	            chap_2.css({ 'color': c_blue });
	        }

	        if ( scroll > cv && scroll < business_card ) {
	            chap_3.css({ 'color': c_pink });
	        } else {
	            chap_3.css({ 'color': c_blue });
	        }

	        if ( scroll > business_card && scroll < portfolio ) {
	            chap_4.css({ 'color': c_pink });
	        } else {
	            chap_4.css({ 'color': c_blue });
	        }

	        if ( scroll > portfolio ) {
	            chap_5.css({ 'color': c_pink });
	        } else {
	            chap_5.css({ 'color': c_blue });
	        }

		} else {

			if ( scroll > industry && scroll < initiation ) {
	            chap_1.css({ 'color': c_pink, 'padding-right': 6 });
	        } else {
	            chap_1.css({ 'color': c_blue, 'padding-right': 0 });
	        }

	        if ( scroll > initiation && scroll < cv ) {
	            chap_2.css({ 'color': c_pink, 'padding-right': 6 });
	        } else {
	            chap_2.css({ 'color': c_blue, 'padding-right': 0 });
	        }

	        if ( scroll > cv && scroll < business_card ) {
	            chap_3.css({ 'color': c_pink, 'padding-right': 6 });
	        } else {
	            chap_3.css({ 'color': c_blue, 'padding-right': 0 });
	        }

	        if ( scroll > business_card && scroll < portfolio ) {
	            chap_4.css({ 'color': c_pink, 'padding-right': 6 });
	        } else {
	            chap_4.css({ 'color': c_blue, 'padding-right': 0 });
	        }

	        if ( scroll > portfolio ) {
	            chap_5.css({ 'color': c_pink, 'padding-right': 6 });
	        } else {
	            chap_5.css({ 'color': c_blue, 'padding-right': 0 });
	        }

		}


    });

    $( chap_1 ).click(function() { $( 'body' ).animate({ scrollTop: industry + 1 }, 2200 ); });
	$( chap_2 ).click(function() { $( 'body' ).animate({ scrollTop: initiation + 1 }, 2200 ); });
	$( chap_3 ).click(function() { $( 'body' ).animate({ scrollTop: cv + 1 }, 2200 ); });
	$( chap_4 ).click(function() { $( 'body' ).animate({ scrollTop: business_card + 1 }, 2200 ); });
	$( chap_5 ).click(function() { $( 'body' ).animate({ scrollTop: portfolio + 1 }, 2200 ); });


	// SCROLL EVENT - HEADER STATE CHANGES
    function header_state() {
		$(window).scroll(function() {


	    	if ( width <= 767 ) { // MOBILE

				var scroll = $(this).scrollTop(),
					trigger = 280,
					header = $('header'),
		            hamburger = $('.hamburger');
				

				if (scroll > trigger) {
					$(header).addClass( 'header-bg' );
				} 
				
				else if (scroll < trigger){
					$(header).removeClass( 'header-bg' );
				}

			} else if ( width > 767 && width < 1260 ) { // DESKTOP

				var scroll = $(this).scrollTop(),
					trigger = 480,
					header = $('header');
				

				if (scroll > trigger) {

					$( header ).css({ 
						'-webkit-backdrop-filter': 'blur(2px)',
						'background-color': 'rgba(250, 250, 234,.9)'
					}, 200);

		            $( header ).addClass( 'alt-login-colour' );
		            $( 'nav ul a' ).addClass( 'alt-text-colour' );
		            $( 'nav ul li' ).addClass( 'alt-hover-colour' );
				} 
				
				else if (scroll < trigger){

					$( header ).css({ 
						'-webkit-backdrop-filter': 'blur(0px)',
						'background-color': 'rgba(250, 250, 234,0)'
					}, 200);

		            $( header ).removeClass( 'alt-login-colour' );
		            $( 'nav ul a' ).removeClass( 'alt-text-colour' );
		            $( 'nav ul li' ).removeClass( 'alt-hover-colour' );
				}
			}

		});

	}
	header_state();


	// PARALLAX DOCS
    function parallax_docs() {

		var stage = $( window ),
			scrollTop = window.pageYOffset,
			scrollOpa,

			heading = $( '.docs-hero h1' ),
			heading_offset = 0,
			heading_appr = heading.css('opacity'),

			intro = $( '.docs-hero p' ),
			intro_offset = 0,
			intro_appr = intro.css('opacity'),

			image = $( '.docs-hero .image' ),
			image_appr = image.css('opacity');


		stage.on( 'scroll resize', function() {

			scrollTop = window.pageYOffset,
			scrollOpa = scrollTop / 100;


			var w = heading_offset + scrollTop / 6,
				z = heading_appr - scrollOpa / 4;
			heading.css({ 
				'left': w,
				'opacity': z
			});

			var w = intro_offset - scrollTop / 6,
				z = intro_appr - scrollOpa / 2;
			intro.css({ 
				'left': w,
				'opacity': z
			});

			var z = image_appr - scrollOpa / 3;
			image.css({ 
				'opacity': z
			});


		});


		stage.trigger( 'scroll' );
	};
	parallax_docs();

});