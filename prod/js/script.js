// SCRIPT.JS v1.2


$(document).ready(function() {

	var width 	= $(window).width();


	$( window ).resize( function() {
		width = $( this ).width();

		header_state();
		misc();
	});


	// FADE INS
	$( '.hero-background' ).hide().fadeIn( 6000 );
	$( '.p-h1' ).hide().delay( 600 ).fadeIn();


	// NAVIGATION
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




	// SCROLL EVENT - HEADER STATE CHANGES
    function header_state() {
		$( window ).scroll( function() {

			var trigger;

			if ( $( 'main' ).css( 'display' ) == 'block' ) {
				trigger = 280;

				if ( width > 767 && width < 1260 ) {
					trigger = trigger + 200;
				}

			} else {

				trigger = 0;
			}


	    	if ( width <= 767 ) { // MOBILE

				var scroll = $( this ).scrollTop(),
					header = $( 'header' ),
		            hamburger = $( '.hamburger' );
				

				if ( scroll > trigger ) {
					$( header ).addClass( 'header-bg' );
				} 
				
				else if ( scroll < trigger ) {
					$( header ).removeClass( 'header-bg' );
				}

			} else if ( width > 767 && width < 1260 ) { // DESKTOP

				var scroll = $( this ).scrollTop(),
					header = $( 'header' );
				

				if ( scroll > trigger ) {

					$( header ).css({ 
						'-webkit-backdrop-filter': 'blur(2px)',
						'background-color': 'rgba(250, 250, 234,.9)'
					}, 200);
				} 
				
				else if ( scroll < trigger ){

					$( header ).css({ 
						'-webkit-backdrop-filter': 'blur(0px)',
						'background-color': 'rgba(250, 250, 234,0)'
					}, 200);
				}
			}

		});

	}
	header_state();




	// MISC FUNCTIONS
	function misc() {
		if ( width > 1260 ) {

	    	var h2_height    = $( 'h2' ).height(),
				logo_height  = $( 'header img' ).outerHeight(true),
				h2_mar       = logo_height - h2_height;

			$( 'h2' ).css( 'margin-bottom', h2_mar );
	    }

		if ( width < 767 ) {

			var main_width = $( 'main' ).width(),
				main_width = main_width - 40;
			$( '.p-h1, .p-p' ).width( main_width );


			var main = $( 'main' ),
				full = main.outerWidth( true ),
				reg  = main.width();

			var margin = ( full - reg ) / -2;

			$( '.hero' ).css( 'left', margin );
			$( '.about div' ).css( 'left', margin - 20 );

		} else {

			var main_width = $( 'main' ).width(),
				main_width = main_width - 40;
			$( '.p-h1, .p-p' ).width( main_width );

			var main = $( 'main' ),
				full = main.outerWidth( true ),
				reg  = main.width();

			var margin = ( full - reg ) / -2;

			$( '.hero' ).css( 'left', margin );
		}

		setTimeout( function() {
			var cont    = $( '.p-h1' ).offset().top,
				heading = $( '.p-h1' ).outerHeight(),
				para    = $( '.p-p' );
				para.css( 'top', cont + heading );
		}, 610 );
		


		var window_h   = $( window ).height(),
			contact_h  = $( '.contact' ).height(),
			footer_h   = $( 'footer' ).innerHeight(),
			diff = window_h - contact_h - footer_h;

		if ( width < 1260 ) { diff = diff - 120; }
		else 				{ diff = diff - 60; }
		if ( diff < 0 ) { diff = 0; }
		$( '.contact' ).css( 'margin-bottom', diff + 2 );




		var logo_h = $( 'header' ).children( 'img' ).height(),
			menu = $( 'header' ).children( 'div' ),
			menu_h = menu.height(),
			m_diff = logo_h - menu_h;

		menu.css( 'margin-top', m_diff / 2 );
	}
	misc();












	// PORTFOLIO NAVIGATION 
	var about  		= $( '.about h2' ).offset().top,
    	projects  	= $( '.projects h2' ).offset().top,
    	contact  	= $( '.contact h2' ).offset().top;

	if ( width < 1260 ) {
		about = about - 120;
		projects = projects - 120;
		contact = contact - 120;
	} else {
		about = about - 60;
		projects = projects - 60;
		contact = contact - 60;
	}

	var a 			= $( 'li[ data-link="about" ]' ),
		p 			= $( 'li[ data-link="projects" ]' ),
		c 			= $( 'li[ data-link="contact" ]' ),
		c_pink      = '#D9377E',
		c_blue		= '#375096';


	$(window).on('scroll', function() {

		var portfolio   = $( 'main' ).css( 'display' ).toString(),
		    project     = $( '.project' ).css( 'display' ).toString(),
		    progression = $( '.progression' ).css( 'display' ).toString(),
		    cv          = $( '.cv' ).css( 'display' ).toString();

		var scroll 		= $(this).scrollTop(),
			c_pink      = '#D9377E',
			c_blue		= '#375096';

		if ( portfolio == 'block' ) {

			if ( width < 1260 ) {

				if ( scroll > about && scroll < projects ) {
		            a.addClass( 'pink' );
		        } else {
		            a.removeClass( 'pink' );
		        }

		        if ( scroll > projects && scroll < contact ) {
		            p.addClass( 'pink' );
		        } else {
		            p.removeClass( 'pink' );
		        }

		        if ( scroll > contact ) {
		            c.addClass( 'pink' );
		        } else {
		            c.removeClass( 'pink' );
		        }

			} else {

				if ( scroll > about && scroll < projects ) {
		            a.addClass( 'pink-move' );
		        } else {
		            a.removeClass( 'pink-move' );
		        }

		        if ( scroll > projects && scroll < contact ) {
		            p.addClass( 'pink-move' );
		        } else {
		            p.removeClass( 'pink-move' );
		        }

		        if ( scroll > contact ) {
		            c.addClass( 'pink-move' );
		        } else {
		            c.removeClass( 'pink-move' );
		        }

			}

		} else if ( project == 'block' ) {

			if ( width < 1260 ) { p.addClass( 'pink' ); } 
			else { p.addClass( 'pink-move' ); }

		} else if ( progression == 'block' ) {

			var pro = $('li[data-link="progression"]');
			if ( width < 1260 ) { pro.addClass( 'pink' ); }
			else { pro.addClass( 'pink-move' ); }

		} else if ( cv == 'block' ) {

			var cv_l = $( 'li[ data-link="cv" ]' );
			if ( width < 1260 ) { cv_l.addClass( 'pink' ); }
			else { cv_l.addClass( 'pink-move' ); }
		}
    });

	
	$( a ).click(function() { $( 'body' ).animate({ scrollTop: about + 1 }, 2200 ); back_to_portfolio(); });
	$( p ).click(function() { $( 'body' ).animate({ scrollTop: projects + 1 }, 2200 ); back_to_portfolio(); });
	$( c ).click(function() { $( 'body' ).animate({ scrollTop: contact + 1 }, 2200 ); back_to_portfolio(); });
    
    $( '[ data-project ]' ).click( function() { 
    	open_container( 'project' );
    	if ( width >= 1260 ) { set_closer(); }
    	project_selector( $( this ).data( 'project' ) );
    	project(); 
    });
    $( '#close-case' ).click( function() { $( 'body' ).animate({ scrollTop: projects + 1 }, 1000 ); back_to_portfolio(); });

	$( '[ data-link="progression" ]' ).click( function() { open_container( 'progression' ); });
	$( '[ data-link="cv" ]' ).click( function() { open_container( 'cv' ); cv(); });


	function back_to_portfolio() {
		$( '.container, footer' ).fadeOut( 400 );

		setTimeout( function() {
			$( 'nav' ).children( 'ul' ).last().children( 'li' ).removeClass( 'pink pink-move' );
		}, 410);

		setTimeout( function() {
			$( 'main, main .hero, footer' ).fadeIn();
		}, 1000);
	}


	function open_container( type ) {

		$( 'body' ).animate({ scrollTop: 0 }, 1000 );
		$( '.container, main, main .hero, footer' ).fadeOut( 400 );

		setTimeout( function() {
			$( '.'+ type +', footer' ).fadeIn();
		}, 1000);

		$( 'nav' ).children( 'ul' ).last().children( 'li' ).removeClass( 'pink pink-move' );
		if ( width < 1260 ) { $( '[ data-link="'+ type +'" ]' ).addClass( 'pink' ); }
		else { $( '[ data-link="'+ type +'" ]' ).addClass( 'pink-move' ); }
		
		if ( type !== 'project' ) {

			setTimeout( function() {
				$( 'nav' ).children( 'ul' ).first().children( 'li' ).removeClass( 'pink pink-move' );
			}, 1000);
		} else {
			setTimeout( function() {
				$( 'nav' ).children( 'ul' ).first().children( 'li' ).removeClass( 'pink pink-move' );
				
				if ( width < 1260 ) { $( '[ data-link="projects" ]' ).addClass( 'pink' ); }
				else { $( '[ data-link="projects" ]' ).addClass( 'pink-move' ); }
			}, 1000);
		}
	}

	function set_closer() {

		var ul_h   = $( 'nav' ).children( 'ul' ).first().outerHeight();
		var close = $( '.case-closer' );
		var new_pos = ul_h - 28 + 60;
		close.css( 'top', new_pos );
	}

	var height;
	if ( width < 768 ) 	{ height = window.screen.height; portfolio(); }
	else 				{ height = $(window).height(); portfolio_plus(); }


	function project_selector( project ) {

		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var content = this.responseText,
                	data = JSON.parse( content ),
                	img_url = 'assets/projects/' + project;


                $( '.project h2' ).text( project );
                $( '.project .pro-hero img' ).attr( 'src', img_url +'/feature.jpg' );
                $( '.project .pro-hero p' ).html( data.desc );

                var i = 0, j, length = data.details.length;
                while ( i < length ) {
                	j = i + 2;
                	$( '.project .pro-hero' ).find( 'ul' ).first().children( 'li:nth-of-type( '+ j +' )' ).text( data.details[ i ] );
            		i++; }

                var i = 0, j, length = data.stats.length;
                while ( i < length ) {
                	j = i + 2;
            		$( '.project .pro-hero' ).find( 'ul' ).last().children( 'li:nth-of-type( '+ j +' )' ).text( data.stats[ i ] );
            		i++; }

            	$( '.project article:nth-of-type( 1 ) p' ).html( data.brief );
            	$( '.project article:nth-of-type( 1 ) img' ).attr( 'src', img_url +'/brief.jpg' );

            	$( '.project article:nth-of-type( 2 ) p' ).html( data.focus );
            	$( '.project article:nth-of-type( 2 ) img' ).attr( 'src', img_url +'/focus.jpg' );

            	$( '.project article:nth-of-type( 3 ) p' ).html( data.wireframes );
            	$( '.project article:nth-of-type( 3 ) img' ).attr( 'src', img_url +'/wireframes.jpg' );

            	$( '.project article:nth-of-type( 4 ) p' ).html( data.designs );
            	$( '.project article:nth-of-type( 4 ) img' ).attr( 'src', img_url +'/designs.jpg' );



            	$( '.case-closer a:nth-of-type( 1 )' ).html( 'visit ' + project );
            	$( '.case-closer a:nth-of-type( 1 )' ).attr( 'href', data.url );

            }
        };
        xmlhttp.open( "GET", "include/data.php?project=" + project, true );
        xmlhttp.send();
	}


	function portfolio() {

		var about_h2    		    = $( '.about h2' ).offset().top - height,
			about_img    		    = $( '.about div' ).offset().top - height,
			about_p_1    		    = $( '.about p:nth-of-type( 1 )' ).offset().top - height,
			about_p_2    		    = $( '.about p:nth-of-type( 2 )' ).offset().top - height,
			about_p_3    		    = $( '.about p:nth-of-type( 3 )' ).offset().top - height,
			about_p_4    		    = $( '.about p:nth-of-type( 4 )' ).offset().top - height;

		var projects_h2    		    = $( '.projects h2' ).offset().top - height,
			projects_li_1    		= $( '.projects li:nth-of-type( 1 )' ).offset().top - height,
			projects_li_2    		= $( '.projects li:nth-of-type( 2 )' ).offset().top - height,
			projects_li_3    		= $( '.projects li:nth-of-type( 3 )' ).offset().top - height,
			projects_li_4    		= $( '.projects li:nth-of-type( 4 )' ).offset().top - height,
			projects_li_5    		= $( '.projects li:nth-of-type( 5 )' ).offset().top - height;

		var contact_h2    		    = $( '.contact h2' ).offset().top - height,
			contact_p_1    			= $( '.contact p' ).offset().top - height,
			contact_p_2    			= $( '.contact div:nth-of-type( 1 )' ).offset().top - height,
			contact_p_3    			= $( '.contact div:nth-of-type( 2 )' ).offset().top - height,

			form_h4    				= $( 'form h4' ).offset().top - height,
			form_name_l    			= $( 'form div:nth-of-type( 1 ) label' ).offset().top - height,
			form_name_i    			= $( 'form div:nth-of-type( 1 ) input' ).offset().top - height,
			form_email_l    		= $( 'form div:nth-of-type( 2 ) label' ).offset().top - height,
			form_email_i    		= $( 'form div:nth-of-type( 2 ) input' ).offset().top - height,
			form_message_l    		= $( 'form' ).children( 'label' ).offset().top - height,
			form_message_i    		= $( 'form' ).children( 'textarea' ).offset().top - height,
			form_submit    			= $( 'form input[ type="submit" ]' ).offset().top - height;

		$( window ).scroll( function() {

			var scrollTop = window.pageYOffset;

			if ( scrollTop > about_h2  ) { $( '.about h2' ).addClass( 'a_heading' ); }
			if ( scrollTop > about_img ) { $( '.about div' ).addClass( 'a_para' ); }
			if ( scrollTop > about_p_1 ) { $( '.about p:nth-of-type(1)' ).addClass( 'a_para' ); }
			if ( scrollTop > about_p_2 ) { $( '.about p:nth-of-type(2)' ).addClass( 'a_para' ); }
			if ( scrollTop > about_p_3 ) { $( '.about p:nth-of-type(3)' ).addClass( 'a_para' ); }
			if ( scrollTop > about_p_4 ) { $( '.about p:nth-of-type(4)' ).addClass( 'a_para' ); }



			if ( scrollTop > projects_h2 ) { $( '.projects h2' ).addClass( 'a_heading' ); }

			if ( scrollTop > projects_li_1       ) { $( '.projects li:nth-of-type(1) .image' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_1 + 200 ) { $( '.projects li:nth-of-type(1) h4' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_1 + 240 ) { $( '.projects li:nth-of-type(1) p' ).addClass( 'a_para' ); }
			if ( scrollTop > projects_li_1 + 280 ) { $( '.projects li:nth-of-type(1) a' ).addClass( 'a_para' ); }

			if ( scrollTop > projects_li_2       ) { $( '.projects li:nth-of-type(2) .image' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_2 + 200 ) { $( '.projects li:nth-of-type(2) h4' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_2 + 240 ) { $( '.projects li:nth-of-type(2) p' ).addClass( 'a_para' ); }
			if ( scrollTop > projects_li_2 + 280 ) { $( '.projects li:nth-of-type(2) a' ).addClass( 'a_para' ); }

			if ( scrollTop > projects_li_3       ) { $( '.projects li:nth-of-type(3) .image' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_3 + 200 ) { $( '.projects li:nth-of-type(3) h4' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_3 + 240 ) { $( '.projects li:nth-of-type(3) p' ).addClass( 'a_para' ); }
			if ( scrollTop > projects_li_3 + 280 ) { $( '.projects li:nth-of-type(3) a' ).addClass( 'a_para' ); }

			if ( scrollTop > projects_li_4       ) { $( '.projects li:nth-of-type(4) .image' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_4 + 200 ) { $( '.projects li:nth-of-type(4) h4' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_4 + 240 ) { $( '.projects li:nth-of-type(4) p' ).addClass( 'a_para' ); }
			if ( scrollTop > projects_li_4 + 280 ) { $( '.projects li:nth-of-type(4) a' ).addClass( 'a_para' ); }

			if ( scrollTop > projects_li_5       ) { $( '.projects li:nth-of-type(5) .image' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_5 + 200 ) { $( '.projects li:nth-of-type(5) h4' ).addClass( 'a_heading' ); }
			if ( scrollTop > projects_li_5 + 240 ) { $( '.projects li:nth-of-type(5) p' ).addClass( 'a_para' ); }
			if ( scrollTop > projects_li_5 + 280 ) { $( '.projects li:nth-of-type(5) a' ).addClass( 'a_para' ); }



			if ( scrollTop > contact_h2 ) { $( '.contact h2' ).addClass( 'a_heading' ); }

			if ( scrollTop > contact_p_1 ) { $( '.contact p' ).addClass( 'a_para' ); }
			if ( scrollTop > contact_p_2 ) { $( '.contact' ).children( '.details' ).first().addClass( 'a_para' ); }
			if ( scrollTop > contact_p_3 ) { $( '.contact' ).children( '.details' ).last().addClass( 'a_para' ); }

			if ( scrollTop > form_h4 ) { $( 'form h4' ).addClass( 'a_heading' ); }
			if ( scrollTop > form_name_l ) { $( 'form div:nth-of-type(1) label' ).addClass( 'a_para' ); }
			if ( scrollTop > form_name_i ) { $( 'form div:nth-of-type(1) input' ).addClass( 'a_para' ); }
			if ( scrollTop > form_email_l ) { $( 'form div:nth-of-type(2) label' ).addClass( 'a_para' ); }
			if ( scrollTop > form_email_i ) { $( 'form div:nth-of-type(2) input' ).addClass( 'a_para' ); }
			if ( scrollTop > form_message_l ) { $( 'form' ).children( 'label' ).addClass( 'a_para' ); }
			if ( scrollTop > form_message_i ) { $( 'form' ).children( 'textarea' ).addClass( 'a_para' ); }
			if ( scrollTop > form_submit ) { $( 'form' ).children( 'input' ).addClass( 'a_para' ); }

		});
	}

	function portfolio_plus() {

		var height = $( window ).height();

		var about_h2    		    = $( '.about h2' ).offset().top - height,
			about_img    		    = $( '.about div' ).offset().top - height + 25,
			about_p_1    		    = $( '.about p:nth-of-type( 1 )' ).offset().top - height,
			about_p_2    		    = $( '.about p:nth-of-type( 2 )' ).offset().top - height,
			about_p_3    		    = $( '.about p:nth-of-type( 3 )' ).offset().top - height,
			about_p_4    		    = $( '.about p:nth-of-type( 4 )' ).offset().top - height;

		var projects_h2    		    = $( '.projects h2' ).offset().top - height,
			projects_li_1    		= $( '.projects li:nth-of-type( 1 )' ).offset().top - height,
			projects_li_2    		= $( '.projects li:nth-of-type( 2 )' ).offset().top - height,
			projects_li_3    		= $( '.projects li:nth-of-type( 3 )' ).offset().top - height + 25,
			projects_li_4    		= $( '.projects li:nth-of-type( 4 )' ).offset().top - height + 50,
			projects_li_5    		= $( '.projects li:nth-of-type( 5 )' ).offset().top - height;

		var contact_h2    		    = $( '.contact h2' ).offset().top - height,
			contact_img    			= $( '.contact div[ data-bg ]' ).offset().top - height + 50,
			contact_p_1    			= $( '.contact' ).children( 'p' ).offset().top - height,
			contact_p_2    			= $( '.contact .details:nth-of-type( 1 )' ).offset().top - height + 25,
			contact_p_3    			= $( '.contact .details:nth-of-type( 2 )' ).offset().top - height + 50,

			form_h4    				= $( 'form h4' ).offset().top - height,
			form_name_l    			= $( 'form div:nth-of-type( 1 ) label' ).offset().top - height,
			form_name_i    			= $( 'form div:nth-of-type( 1 ) input' ).offset().top - height,
			form_email_l    		= $( 'form div:nth-of-type( 2 ) label' ).offset().top - height + 25,
			form_email_i    		= $( 'form div:nth-of-type( 2 ) input' ).offset().top - height + 25,
			form_message_l    		= $( 'form' ).children( 'label' ).offset().top - height,
			form_message_i    		= $( 'form' ).children( 'textarea' ).offset().top - height,
			form_submit    			= $( 'form input[ type="submit" ]' ).offset().top - height;



			$( window ).scroll( function() {
				var scrollTop = window.pageYOffset;

				if ( $( '.about p:nth-of-type(4)' ).hasClass( 'a_para' ) === false ) {

					if ( scrollTop > about_h2  ) { $( '.about h2' ).addClass( 'a_heading' ); }
					if ( scrollTop > about_img ) { $( '.about div' ).addClass( 'a_para' ); }
					if ( scrollTop > about_p_1 ) { $( '.about p:nth-of-type(1)' ).addClass( 'a_para' ); }
					if ( scrollTop > about_p_2 ) { $( '.about p:nth-of-type(2)' ).addClass( 'a_para' ); }
					if ( scrollTop > about_p_3 ) { $( '.about p:nth-of-type(3)' ).addClass( 'a_para' ); }
					if ( scrollTop > about_p_4 ) { $( '.about p:nth-of-type(4)' ).addClass( 'a_para' ); }

				}

				if ( $( '.projects li:nth-of-type(5) a' ).hasClass( 'a_para' ) === false ) {

					if ( scrollTop > projects_h2 ) { $( '.projects h2' ).addClass( 'a_heading' ); }

					if ( scrollTop > projects_li_1 ) {
						$( '.projects li:nth-of-type(1) .image' ).addClass( 'a_para' );
						setTimeout( function() { $( '.projects li:nth-of-type(1) h4' ).addClass( 'a_heading' ); }, 200 );
						setTimeout( function() { $( '.projects li:nth-of-type(1) p' ).addClass( 'a_heading' ); }, 300 );
						setTimeout( function() { $( '.projects li:nth-of-type(1) a' ).addClass( 'a_heading' ); }, 400 );
					}

					if ( scrollTop > projects_li_2 ) {
						$( '.projects li:nth-of-type(2) .image' ).addClass( 'a_para' );
						setTimeout( function() { $( '.projects li:nth-of-type(2) h4' ).addClass( 'a_para' ); }, 200 );
						setTimeout( function() { $( '.projects li:nth-of-type(2) p' ).addClass( 'a_para' ); }, 300 );
						setTimeout( function() { $( '.projects li:nth-of-type(2) a' ).addClass( 'a_para' ); }, 400 );
					}

					if ( scrollTop > projects_li_3 ) {
						$( '.projects li:nth-of-type(3) .image' ).addClass( 'a_para' );
						setTimeout( function() { $( '.projects li:nth-of-type(3) h4' ).addClass( 'a_para' ); }, 200 );
						setTimeout( function() { $( '.projects li:nth-of-type(3) p' ).addClass( 'a_para' ); }, 300 );
						setTimeout( function() { $( '.projects li:nth-of-type(3) a' ).addClass( 'a_para' ); }, 400 );
					}

					if ( scrollTop > projects_li_4 ) {
						$( '.projects li:nth-of-type(4) .image' ).addClass( 'a_para' );
						setTimeout( function() { $( '.projects li:nth-of-type(4) h4' ).addClass( 'a_para' ); }, 200 );
						setTimeout( function() { $( '.projects li:nth-of-type(4) p' ).addClass( 'a_para' ); }, 300 );
						setTimeout( function() { $( '.projects li:nth-of-type(4) a' ).addClass( 'a_para' ); }, 400 );
					}

					if ( scrollTop > projects_li_5 ) {
						$( '.projects li:nth-of-type(5) .image' ).addClass( 'a_heading' );
						setTimeout( function() { $( '.projects li:nth-of-type(5) h4' ).addClass( 'a_para' ); }, 200 );
						setTimeout( function() { $( '.projects li:nth-of-type(5) p' ).addClass( 'a_para' ); }, 300 );
						setTimeout( function() { $( '.projects li:nth-of-type(5) a' ).addClass( 'a_para' ); }, 400 );
					}
				}

				if ( $( 'form' ).children( 'input' ).hasClass( 'a_para' ) === false ) {

					if ( scrollTop > contact_h2 ) { $( '.contact h2' ).addClass( 'a_heading' ); }

					if ( scrollTop > contact_p_1 ) { $( '.contact' ).children( 'p' ).addClass( 'a_para' ); }
					if ( scrollTop > contact_img ) { $( '.contact div[ data-bg ]' ).addClass( 'a_para' ); } 
					if ( scrollTop > contact_p_2 ) { $( '.contact .details:nth-of-type( 1 )' ).addClass( 'a_para' ); }
					if ( scrollTop > contact_p_3 ) { $( '.contact .details:nth-of-type( 2 )' ).addClass( 'a_para' ); }

					if ( scrollTop > form_h4 ) { $( 'form h4' ).addClass( 'a_heading' ); }
					if ( scrollTop > form_name_l ) { $( 'form div:nth-of-type(1) label' ).addClass( 'a_para' ); }
					if ( scrollTop > form_name_i ) { $( 'form div:nth-of-type(1) input' ).addClass( 'a_para' ); }
					if ( scrollTop > form_email_l ) { $( 'form div:nth-of-type(2) label' ).addClass( 'a_para' ); }
					if ( scrollTop > form_email_i ) { $( 'form div:nth-of-type(2) input' ).addClass( 'a_para' ); }
					if ( scrollTop > form_message_l ) { $( 'form' ).children( 'label' ).addClass( 'a_para' ); }
					if ( scrollTop > form_message_i ) { $( 'form' ).children( 'textarea' ).addClass( 'a_para' ); }
					if ( scrollTop > form_submit ) { $( 'form' ).children( 'input' ).addClass( 'a_para' ); }
				}
			});
	}





	function project() {
		$( '.project *' ).removeClass( 'a_para a_heading' );

		var height  = $( window ).height();
		setTimeout( function() { fade_ins_project( height ); }, 1010 );

		setTimeout( function() {
			$( '.pro-hero h2' ).addClass( 'a_heading' );

			setTimeout( function() { $( '.pro-hero .image' ).addClass( 'a_para' ); }, 200 );
			setTimeout( function() { $( '.pro-hero p' ).addClass( 'a_para' ); }, 400 );
			setTimeout( function() { $( '.pro-hero ul:nth-of-type( 1 )' ).addClass( 'a_para' ); }, 600 );
			setTimeout( function() { $( '.pro-hero ul:nth-of-type( 2 )' ).addClass( 'a_para' ); }, 800 );
		}, 1400 );

		if ( width >= 1260 ) {
			setTimeout( function() { $( '.case-closer a:nth-of-type( 1 )' ).addClass( 'a_para' ); }, 400 );
			setTimeout( function() { $( '.case-closer a:nth-of-type( 2 )' ).addClass( 'a_para' ); }, 600 );
		}

	}
	function fade_ins_project( h ) {

		var height = h;

		var brief_h3		= $( '.project article:nth-of-type( 1 ) h3' ).offset().top - height,
			brief_p			= $( '.project article:nth-of-type( 1 ) p' ).offset().top - height,
			brief_img		= $( '.project article:nth-of-type( 1 ) .image' ).offset().top - height;

		var focus_h3		= $( '.project article:nth-of-type( 2 ) h3' ).offset().top - height,
			focus_img		= $( '.project article:nth-of-type( 2 ) .image' ).offset().top - height,
			focus_p			= $( '.project article:nth-of-type( 2 ) p' ).offset().top - height;

		var wireframes_h3	= $( '.project article:nth-of-type( 3 ) h3' ).offset().top - height,
			wireframes_img	= $( '.project article:nth-of-type( 3 ) .image' ).offset().top - height,
			wireframes_p	= $( '.project article:nth-of-type( 3 ) p' ).offset().top - height;

		var designs_h3		= $( '.project article:nth-of-type( 4 ) h3' ).offset().top - height,
			designs_img		= $( '.project article:nth-of-type( 4 ) .image' ).offset().top - height,
			designs_p		= $( '.project article:nth-of-type( 4 ) p' ).offset().top - height;

		var dev_1_h3		= $( '.project article:nth-of-type( 5 ) h3' ).offset().top - height,
			dev_1_p_1		= $( '.project article:nth-of-type( 5 ) p:nth-of-type( 1 )' ).offset().top - height,
			dev_1_code		= $( '.project article:nth-of-type( 5 ) .code' ).offset().top - height,
			dev_1_p_2		= $( '.project article:nth-of-type( 5 ) p:nth-of-type( 2 )' ).offset().top - height;

		if ( dev_1_code == dev_1_p_2 ) { dev_1_p_2 = dev_1_p_2 + 50; }

		var dev_2_h3		= $( '.project article:nth-of-type( 6 ) h3' ).offset().top - height,
			dev_2_p_1		= $( '.project article:nth-of-type( 6 ) p:nth-of-type( 1 )' ).offset().top - height,
			dev_2_code		= $( '.project article:nth-of-type( 6 ) .code' ).offset().top - height,
			dev_2_p_2		= $( '.project article:nth-of-type( 6 ) p:nth-of-type( 2 )' ).offset().top - height;

		if ( dev_2_code == dev_2_p_2 ) { dev_2_p_2 = dev_2_p_2 + 50; }

		var summary_img		= $( '.project article:nth-of-type( 7 ) .image' ).offset().top - height,
			summary_h3		= $( '.project article:nth-of-type( 7 ) h3' ).offset().top - height,
			summary_p		= $( '.project article:nth-of-type( 7 ) p' ).offset().top - height;

		var case_nav 		= $( '.case-closer' ).offset().top - height;


		$( window ).scroll( function() {
			var scrollTop = window.pageYOffset;

			if ( scrollTop > brief_h3 ) { $( '.project article:nth-of-type( 1 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > brief_p ) { $( '.project article:nth-of-type( 1 ) p' ).addClass( 'a_para' ); }
			if ( scrollTop > brief_img ) { $( '.project article:nth-of-type( 1 ) .image' ).addClass( 'a_para' ); }

			if ( scrollTop > focus_h3 ) { $( '.project article:nth-of-type( 2 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > focus_img ) { $( '.project article:nth-of-type( 2 ) .image' ).addClass( 'a_para' ); }
			if ( scrollTop > focus_p ) { $( '.project article:nth-of-type( 2 ) p' ).addClass( 'a_para' ); }

			if ( scrollTop > wireframes_h3 ) { $( '.project article:nth-of-type( 3 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > wireframes_img ) { $( '.project article:nth-of-type( 3 ) .image' ).addClass( 'a_para' ); }
			if ( scrollTop > wireframes_p ) { $( '.project article:nth-of-type( 3 ) p' ).addClass( 'a_para' ); }

			if ( scrollTop > designs_h3 ) { $( '.project article:nth-of-type( 4 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > designs_img ) { $( '.project article:nth-of-type( 4 ) .image' ).addClass( 'a_para' ); }
			if ( scrollTop > designs_p ) { $( '.project article:nth-of-type( 4 ) p' ).addClass( 'a_para' ); }

			if ( scrollTop > dev_1_h3 ) { $( '.project article:nth-of-type( 5 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > dev_1_p_1 ) { $( '.project article:nth-of-type( 5 ) p:nth-of-type( 1 )' ).addClass( 'a_para' ); }
			if ( scrollTop > dev_1_code ) { $( '.project article:nth-of-type( 5 ) .code' ).addClass( 'a_para' ); }
			if ( scrollTop > dev_1_p_2 ) { $( '.project article:nth-of-type( 5 ) p:nth-of-type( 2 )' ).addClass( 'a_para' ); }

			if ( scrollTop > dev_2_h3 ) { $( '.project article:nth-of-type( 6 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > dev_2_p_1 ) { $( '.project article:nth-of-type( 6 ) p:nth-of-type( 1 )' ).addClass( 'a_para' ); }
			if ( scrollTop > dev_2_code ) { $( '.project article:nth-of-type( 6 ) .code' ).addClass( 'a_para' ); }
			if ( scrollTop > dev_2_p_2 ) { $( '.project article:nth-of-type( 6 ) p:nth-of-type( 2 )' ).addClass( 'a_para' ); }

			if ( scrollTop > summary_img ) { $( '.project article:nth-of-type( 7 ) .image' ).addClass( 'a_para' ); }
			if ( scrollTop > summary_h3 ) { $( '.project article:nth-of-type( 7 ) h3' ).addClass( 'a_heading' ); }
			if ( scrollTop > summary_p ) { $( '.project article:nth-of-type( 7 ) p' ).addClass( 'a_para' ); }

			if ( width < 1260 ) {
				if ( scrollTop > case_nav ) { 
					$( '.case-closer a:nth-of-type( 1 )' ).addClass( 'a_para' );
					setTimeout( function() { $( '.case-closer a:nth-of-type( 2 )' ).addClass( 'a_para' ); }, 400 );
				}
			}

		});
	}




	function cv() {
		var height  = $( window ).height(), edu_h;
		setTimeout( function() { edu_h = $( '._edu' ).offset().top; fade_ins_cv( height, edu_h ); }, 1010 );

		setTimeout( function() {
			$( '._exp h3' ).addClass( 'a_heading' );

			setTimeout( function() {
				$( '._exp div:nth-of-type(1) h5' ).addClass( 'a_heading' );
				setTimeout( function() { $( '._exp div:nth-of-type(1) span' ).addClass( 'a_heading' ); }, 50 );
				setTimeout( function() { $( '._exp div:nth-of-type(1) p' ).addClass( 'a_heading' ); }, 100 );
			}, 100 );

			setTimeout( function() {
				$( '._exp div:nth-of-type(2) h5' ).addClass( 'a_heading' );
				setTimeout( function() { $( '._exp div:nth-of-type(2) span' ).addClass( 'a_heading' ); }, 50 );
				setTimeout( function() { $( '._exp div:nth-of-type(2) p' ).addClass( 'a_heading' ); }, 100 );
			}, 150 );

			setTimeout( function() {
				$( '._ski h3' ).addClass( 'a_heading' );

				setTimeout( function() {
					$( '._ski div:nth-of-type(1) h5' ).addClass( 'a_heading' );
					setTimeout( function() { $( '._ski div:nth-of-type(1) li:nth-of-type(1)' ).addClass( 'a_heading' ); }, 50 );
					setTimeout( function() { $( '._ski div:nth-of-type(1) li:nth-of-type(2)' ).addClass( 'a_heading' ); }, 75 );
					setTimeout( function() { $( '._ski div:nth-of-type(1) li:nth-of-type(3)' ).addClass( 'a_heading' ); }, 100 );
				}, 100 );

				setTimeout( function() {
					$( '._ski div:nth-of-type(2) h5' ).addClass( 'a_heading' );
					setTimeout( function() { $( '._ski div:nth-of-type(2) li:nth-of-type(1)' ).addClass( 'a_heading' ); }, 50 );
					setTimeout( function() { $( '._ski div:nth-of-type(2) li:nth-of-type(2)' ).addClass( 'a_heading' ); }, 75 );
					setTimeout( function() { $( '._ski div:nth-of-type(2) li:nth-of-type(3)' ).addClass( 'a_heading' ); }, 100 );
				}, 150 );
			}, 600 );

			if ( height > edu_h ) {
				setTimeout( function() {
					$( '._edu h3' ).addClass( 'a_heading' );

					setTimeout( function() {
						$( '._edu div:nth-of-type(1) h5' ).addClass( 'a_heading' );
						setTimeout( function() { $( '._edu div:nth-of-type(1) span' ).addClass( 'a_heading' ); }, 25 );
						setTimeout( function() { $( '._edu div:nth-of-type(1) h6' ).addClass( 'a_heading' ); }, 50 );
						setTimeout( function() { $( '._edu div:nth-of-type(1) p' ).addClass( 'a_heading' ); }, 75 );
					}, 100 );

					setTimeout( function() {
						$( '._edu div:nth-of-type(2) h5' ).addClass( 'a_heading' );
						setTimeout( function() { $( '._edu div:nth-of-type(2) span' ).addClass( 'a_heading' ); }, 25 );
						setTimeout( function() { $( '._edu div:nth-of-type(2) h6' ).addClass( 'a_heading' ); }, 50 );
						setTimeout( function() { $( '._edu div:nth-of-type(2) p' ).addClass( 'a_heading' ); }, 75 );
					}, 200 );

					setTimeout( function() {
						$( '._edu div:nth-of-type(3) h5' ).addClass( 'a_heading' );
						setTimeout( function() { $( '._edu div:nth-of-type(3) span' ).addClass( 'a_heading' ); }, 25 );
						setTimeout( function() { $( '._edu div:nth-of-type(3) h6' ).addClass( 'a_heading' ); }, 50 );
						setTimeout( function() { $( '._edu div:nth-of-type(3) p' ).addClass( 'a_heading' ); }, 75 );
					}, 300 );
				}, 900 );
			}

		}, 1400 );
	}
	function fade_ins_cv( h, e_h ) {

		var height = h,
			edu_h  = e_h;

		var t_edu 			= $( '._edu' ).offset().top - height,
			t_emp			= $( '._emp' ).offset().top - height,
			t_int			= $( '._int' ).offset().top - height,
			t_ref			= $( '._ref' ).offset().top - height;

		$( window ).scroll( function() {
			var scrollTop = window.pageYOffset;

			if ( height < edu_h ) {
				if ( scrollTop > t_edu ) {
					$( '._edu h3' ).addClass( 'a_heading' );

					setTimeout( function() {
						$( '._edu div:nth-of-type(1) h5' ).addClass( 'a_heading' );
						setTimeout( function() { $( '._edu div:nth-of-type(1) span' ).addClass( 'a_heading' ); }, 25 );
						setTimeout( function() { $( '._edu div:nth-of-type(1) h6' ).addClass( 'a_heading' ); }, 50 );
						setTimeout( function() { $( '._edu div:nth-of-type(1) p' ).addClass( 'a_heading' ); }, 75 );
					}, 200 );
				}
				if ( scrollTop > t_edu + 200 ) {
					$( '._edu div:nth-of-type(2) h5' ).addClass( 'a_heading' );
					setTimeout( function() { $( '._edu div:nth-of-type(2) span' ).addClass( 'a_heading' ); }, 25 );
					setTimeout( function() { $( '._edu div:nth-of-type(2) h6' ).addClass( 'a_heading' ); }, 50 );
					setTimeout( function() { $( '._edu div:nth-of-type(2) p' ).addClass( 'a_heading' ); }, 75 );
				}
				if ( scrollTop > t_edu + 400 ) {
					$( '._edu div:nth-of-type(3) h5' ).addClass( 'a_heading' );
					setTimeout( function() { $( '._edu div:nth-of-type(3) span' ).addClass( 'a_heading' ); }, 25 );
					setTimeout( function() { $( '._edu div:nth-of-type(3) h6' ).addClass( 'a_heading' ); }, 50 );
					setTimeout( function() { $( '._edu div:nth-of-type(3) p' ).addClass( 'a_heading' ); }, 75 );
				}
			}

			if ( scrollTop > t_emp ) {
				$( '._emp h3' ).addClass( 'a_heading' );

				setTimeout( function() {
					$( '._emp div:nth-of-type(1) h5' ).addClass( 'a_heading' );
					setTimeout( function() { $( '._emp div:nth-of-type(1) span' ).addClass( 'a_heading' ); }, 25 );
					setTimeout( function() { $( '._emp div:nth-of-type(1) h6' ).addClass( 'a_heading' ); }, 50 );
					setTimeout( function() { $( '._emp div:nth-of-type(1) p' ).addClass( 'a_heading' ); }, 75 );
				}, 200 );
			}

			if ( scrollTop > t_emp + 100 ) {
				$( '._emp div:nth-of-type(2) h5' ).addClass( 'a_heading' );
				setTimeout( function() { $( '._emp div:nth-of-type(2) span' ).addClass( 'a_heading' ); }, 25 );
				setTimeout( function() { $( '._emp div:nth-of-type(2) h6' ).addClass( 'a_heading' ); }, 50 );
				setTimeout( function() { $( '._emp div:nth-of-type(2) p' ).addClass( 'a_heading' ); }, 75 );
			}

			if ( scrollTop > t_int ) {
				$( '._int h3' ).addClass( 'a_heading' );

				setTimeout( function() { $( '._int p:nth-of-type(1)' ).addClass( 'a_heading' ); }, 50 );
				setTimeout( function() { $( '._int p:nth-of-type(2)' ).addClass( 'a_heading' ); }, 100 );
			}

			if ( scrollTop > t_ref ) {
				$( '._ref h3' ).addClass( 'a_heading' );

				setTimeout( function() { $( '._ref p:nth-of-type(1)' ).addClass( 'a_heading' ); }, 50 );
				setTimeout( function() { $( '._ref p:nth-of-type(2)' ).addClass( 'a_heading' ); }, 100 );

				setTimeout( function() { $( 'article' ).last().children( 'p' ).addClass( 'a_heading' ); }, 400 );
			}

		});
	}

	




	var contact_top = $( '#contact_bg' ).offset().top,
		window_h    = $( window ).height();

	contact_top = contact_top - window_h;

    // PARALLAX
    function parallax() {

		var stage = $( window ),
			scrollTop = window.pageYOffset,
			scrollOpa,

			h1 = $( '.p-h1 h1' ),
			h1_offset = 0,

			p = $( '.p-p p' ),
			p_speed = 4,
			p_offset = 0,
			p_appr = p.css('opacity'),

			line = $( '.p-h1' ),
			line_appr = 1,

			bg = $( 'main .hero-background' ),
			bg_offset = 0,
			bg_appr = bg.css('opacity'),

			about = $( '#about_bg' ),

			contact = $( '#contact_bg' );


		stage.on( 'scroll resize', function() {

			scrollTop = window.pageYOffset,
			scrollOpa = scrollTop / 100;


			var a = bg_offset + scrollTop / 4;
			var b = bg_appr - scrollOpa / 12;
			bg.css({ 
				'top': a, 
				'opacity': b 
			});


			var y, w, z, a;
			if ( width <= 767 ) {

				y = h1_offset + scrollTop / 8;
				
				w = p_offset - scrollTop / p_speed;
				z = p_appr - scrollOpa / 2;
				
				a = line_appr - scrollOpa / 4;

			} else if ( width > 767 ) {

				y = h1_offset + scrollTop / 4;

				w = p_offset - scrollTop / p_speed,
				z = p_appr - scrollOpa / 4;

				a = line_appr - scrollOpa / 4;
			}
			h1.css({  'top': y });
			p.css({  'top': w, 'opacity': z });
			line.css({  'opacity': a });


			var c;
			if ( width <= 767 ) { c = -120 + scrollTop / 8; }
			else 				{ c = -80 + scrollTop / 12; }
			about.css({ 'top': c });


			if ( scrollTop > contact_top ) {
				scrollTop = scrollTop - contact_top;

				var d;
				if ( width <= 767 ) { d = -120 + scrollTop / 8; }
				else 				{ d = -80 + scrollTop / 8; }
				contact.css({ 'top': d });
			}


		});
		stage.trigger( 'scroll' );
	};
	parallax();





	// FORM
	$( 'form' ).submit( function(e) {
		e.preventDefault();

    	var name 	   = $( this ).find( 'input[ type="name" ]' ),
    		email      = $( this ).find( 'input[ type="email" ]' ),
    		message    = $( this ).find( 'textarea' ),
    		n = true, e = true, m = true;

    	if ( name.val() == '' || 
    		!name.val().match( /^[a-zA-Z\s]*$/ )  || 
    		 name.val().length > 80  ) {

    		name.addClass( 'shaker' );

    		n = false;
    	}

    	if ( email.val() == '' || 
    		 !email.val().match( /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/ )  || 
    		 email.val().length > 70 ) {

    		email.addClass( 'shaker' );

    		e = false;
    	}

    	if ( message.val() == '' || 
    		 message.val().length > 600  ) {

    		message.addClass( 'shaker' );

    		m = false;
    	}

    	handler( name.val(), email.val(), message.val() );

    });


    $( 'input[ type="name" ]' ).focus( function() { $( this ).removeClass( 'shaker' ) } );
    $( 'input[ type="email" ]' ).focus( function() { $( this ).removeClass( 'shaker' ) } );
    $( 'textarea' ).focus( function() { $( this ).removeClass( 'shaker' ) } );


    function handler( name, email, message ) {

    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var verify = this.responseText;

				if ( verify == 'success' ) {
					alert( 'Thanks for the message!' );

					$( 'input[ type="name" ]' ).val( '' );
    				$( 'input[ type="email" ]' ).val( '' );
    				$( 'textarea' ).val( '' );
				} else {
					alert( 'Ohh dear; something wasn\'t right...' );
				}
            }
        };
        xmlhttp.open( "GET", "include/handler.php?name=" + name + '&email=' + email + '&message=' + message, true );
        xmlhttp.send();
    }


});