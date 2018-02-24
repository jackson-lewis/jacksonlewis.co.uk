<?php   /* //////   PROJECT   ////// */   ?>

<div class="container project">
	
	<div class="pro-hero">
		<h2></h2>
        <div class="image">
            <img src="" alt="">
        </div>
		<div>
			<p></p>
			<ul>
				<li>the details</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
			</ul>
			<ul>
				<li>the stats</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
			</ul>
		</div>
	</div>




	<article class="_1">
        <h3>brief</h3>
        <p></p>
        <div class="image">
            <img src="" alt="">
        </div>
    </article>

    <article class="_5">
        <h3>focus</h3>
        <div class="image">
            <img src="" alt="">
        </div>
        <p></p>
    </article>

    <article class="_6">
        <h3>wireframes</h3>
        <div class="image">
            <img src="" alt="">
        </div>
        <p></p>
    </article>

    <article class="_5">
        <h3>designs</h3>
        <div class="image">
            <img src="" alt="">
        </div>
        <p></p>
    </article>

    <article class="_9">
        <h3>javascript - header state</h3>
        <p>A nifty function that controls the visual look of the header as the user scrolls. This functions is only called on pages that feature the full screen hero’s. As the search bar, logo and nav links are all white when over the hero section, they wouldn’t be visible over content on the white background lower down.</p>
        <div class="code">
            <pre><code>// SCROLL EVENT - HEADER STATE CHANGES
function header_state() {
    $( window ).scroll( function() {

        var width   = $( window ).width(),
            scroll = $( this ).scrollTop(),
            header = $( 'header' );

        if ( width < 1023 ) { // MOBILE

            var trigger = 280,
                hamburger = $( '.hamburger' );

            if ( scroll > trigger ) {
                $( header ).addClass( 'header-bg' );
                $(' .image-1' ).stop().animate( { "opacity": "0" }, 100 );
                $( '.bar1, .bar2, .bar3, .cross1, .cross2' ).addClass( 'alt-colour' );
            } 
            
            else if ( scroll < trigger ) {
                $( header ).removeClass( 'header-bg' );
                $( '.image-1' ).stop().animate( { "opacity": "1" }, 100 );
                $( '.bar1, .bar2, .bar3, .cross1, .cross2' ).removeClass( 'alt-colour' );
            }

        } else { // DESKTOP

            var trigger = 480;
            
            if ( scroll > trigger ) {

                $( header ).css({ 
                    '-webkit-backdrop-filter': 'blur(2px)',
                    'background-color': 'rgba(250, 250, 250,.9)'
                }, 200 );

                $( '.image-1' ).stop().animate( { "opacity": "0" }, 200 );
                $( header ).addClass( 'alt-login-colour' );
                $( 'nav ul a' ).addClass( 'alt-text-colour' );
                $( 'nav ul li' ).addClass( 'alt-hover-colour' );
                $( '.search' ).addClass( 'alt-search-bar' );
            } 
            
            else if ( scroll < trigger ){

                $( header ).css({ 
                    '-webkit-backdrop-filter': 'blur(0px)',
                    'background-color': 'rgba(250, 250, 250,0)'
                }, 200);

                $( '.image-1' ).stop().animate( { "opacity": "1" }, 100 );
                $( header ).removeClass( 'alt-login-colour' );
                $( 'nav ul a' ).removeClass( 'alt-text-colour' );
                $( 'nav ul li' ).removeClass( 'alt-hover-colour' );
                $( '.search' ).removeClass( 'alt-search-bar' );
            }
        }
    });
}</code></pre>
        </div>
        <p>The function is split in half, depending on the width of the user device determines which part is run. On a vertical look, the amount the user has scrolled affects which state the header should appear. If the user goes the top of the page and scrolls down past the set trigger point of 280px on mobile, then the alt colour classes or animations started. Likewise if the user scrolls back up past the trigger point, those actions are then reversed; either removing classes or reversed animation.</p>
    </article>

    <article class="_9">
        <h3>PHP - User Auth</h3>
        <p>The first piece of the user account page, which only runs if the user has just logged in or registered their account. Four key variables are used: $action, $session, $register, $access. Each one has a key purpose which is later used to determine what is delivered to the user.</p>
        <div class="code">
            <pre><code>$action   = $_REQUEST[ 'action' ];

if ( isset( $action ) ) {

    if ( $action == 'register' ) {
        $name    = $_REQUEST[ 'name' ];
        $email   = $_REQUEST[ 'email' ];
    } 

    $username = $_REQUEST[ 'username' ];
    $password = $_REQUEST[ 'password' ];

    $conn = new mysqli( "localhost", "root", "root", "goxplore" );

    $verify = "
    SELECT name, acc_type  
    FROM users 
    WHERE username = '". $username ."' 
    AND password = '". $password ."'
    ";

    $result = $conn->query( $verify );

    if ( $result->num_rows > 0 ) {
        while ( $row = $result->fetch_assoc() ) {
            $name = ucwords( $row['name'] );
            $acc_type = $row['acc_type'];

            $access  = true;
            $register = false;
            $session = false;
        }
    }  else {
        $access = false;

        if ( $action == 'register' ) {

            $session = false;
            $register = true;
        } else {

            $session = false;
            $register = false;
        }
        
    }

    if ( $register ) {

        $acc_type = 1;
        $date = date( 'Y-m-d h:i:s' );

        $new_user = "
        INSERT INTO users ( name, email, username, password, acc_type, date_join ) 
        VALUES ( '$name', '$email', '$username', '$password', '$acc_type', '$date' )";

        if ( $conn->query( $new_user ) ) {
            $access = true;
        } else {
            $access = false;
        }

    }

}</code></pre>
        </div>
        <p>The $action variable is used to determine if the user has arrived at the page via a form, e.g the login or register form. Then if the $action was ‘register’, then the name and email are also assigned variables. Then the details are checked to see if they already exist on the database in the users table. If a record is found, the name and account type is retrieved. Here, $access is set to true, with $register and $session set to false. If no records were found, $access is false or denied. If no recorders were found and the $action was not ‘register’, then all boolean variables are set to false. But if the $action was ‘register’ then $register becomes true. Now by default, the account type is set to 1, which means regular user. The current date and time are found for the date join field, then all the register details are added to the database. if the query was successful, $access is true. Which means the user will then have their account page displayed, but the type shown will depend on their type of account.</p>
    </article>

    <article class="_3">
    	<div class="image">
            <img src="assets/projects/goxplore/summary.jpg" alt="Admin Page">
        </div>
        <h3>summary</h3>
        <p>I cannot deny that the back-end on this project was very challenging, with something going wrong round every corner. I had never used PHP sessions before, let alone create an admin system like this before with ability to add new records and update existing ones. With a single form that updates across 3 tables. Even back with the designs, I learnt it’s so important to always experiment and try something I haven’t done before. The biggest headaches definitely came from the update.php file, in means of updating existing records. So I’ve learnt an extra trick or two in SQL. Some of the validation in both JavaScript and PHP were completely new to me so took some playing around, it’s still not completely flawless but I’ll get there soon.<br><br>You can be all nosey <a href="https://github.com/jacksonlwss/goxplore" target="_blank">on GitHub</a></p>
    </article>




	<!-- <div class="case-switcher">
		<div>
			<h4>final year project</h4>
			<a data-project="">Read previous case study</a>
		</div>
		<div>
			<h4>moviebase</h4>
			<a data-project="">Read next case study</a>
		</div>
	</div> -->

	<div class="case-closer">
        <a href="" target="_blank"></a>
		<a id="close-case">close</a>
	</div>

</div>