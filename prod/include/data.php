<?php   // GET PROJECT DATA

if ( isset( $_REQUEST[ 'project' ] ) ) {
    $project = $_REQUEST[ 'project' ];
}

switch ( $project ) {

    case 'goxplore':

        $package = array(
            'name' => 'goxplore',

            'url' => 'http://goxplore.jacksonlewis.co.uk',

            'desc' => 'Concept travel site serving info and [Youtube] videos on destinations around the world, with user accounts and admin system available', 

            'details' => array( 'University project', 'Early 2018', 'Database driven', 'Custom CMS' ),

            'stats' => array( '943 lines of jQuery', '12 destinations', '28 videos' ),

            'brief' => 'As a 3rd year project, with a focus on use of a database for a site delivering videos, I wanted to push myself beyond my then-capabilities of all languages. The project Moviebase was created for the same unit in the previous year, so it evident to see the difference in how much I’ve learnt.',

            'focus' => 'As this was created for a unit on databases, it was pretty obvious that I was going to be pushing my PHP skills to the limit. So, this was a essentially a dev project, even tho I still did the designs and actually created the concept for the site from inspiration of the well-known lonelyplanet.com.',

            'wireframes' => 'I wouldn’t usually go down the route of producing digital wireframes, but it was a requirement for the unit. The wireframes are pretty detailed, with approximate sizing labelled, all done inside Adobe XD.',

            'designs' => 'Moving to the full designs, I wanted to cover as much as possible. Using the wireframes as my base, I then started to define the typography and include imagery. I also had a go experimenting with the designs based off <a href="https://www.pinterest.co.uk/jacksonlwss/goxplore/" target="_blank">my research</a> on Pinterest. The idea it to edit within Adobe Photoshop to remove the backgrounds and match the background colour of the site. This creates a pretty nice effect that blends the foreground content of the image into the adjacent content on the site.'
        );
        break;

    case 'gt cnc':

        $package = array(
            'name' => 'gt cnc',

            'url' => 'http://gtcnc.co.uk',

            "desc" => "Engineering business brought up to scratch with an updated modern design and front-end build process", 

            "details" => array( 'Custom CMS', 'Database driven', 'Late 2017', 'University project' ),

            "stats" => array( '28 videos', '12 destinations', '943 lines of jQuery' ),

            "brief" => 'As a 3rd year project, with a focus on use of a database for a site delivering videos, I wanted to push myself beyond my then-capabilities of all languages. The project Moviebase was created for the same unit in the previous year, so it evident to see the difference in how much I’ve learnt.',

            'focus' => 'As this was created for a unit on databases, it was pretty obvious that I was going to be pushing my PHP skills to the limit. So, this was a essentially a dev project, even tho I still did the designs and actually created the concept for the site from inspiration of the well-known lonelyplanet.com.',

            'wireframes' => 'I wouldn’t usually go down the route of producing digital wireframes, but it was a requirement for the unit. The wireframes are pretty detailed, with approximate sizing labelled, all done inside Adobe XD.',
        );
        break;

    case 'project dawn':

        $package = array(
            'name' => 'project dawn',

            'url' => 'http://dawn.jacksonlewis.co.uk',

            "desc" => "Final year project; custom built Sass framework and library with jQuery functions, complete with docs site", 

            "details" => array( 'Custom CMS', 'Database driven', 'Late 2017', 'University project' ),

            "stats" => array( '28 videos', '12 destinations', '943 lines of jQuery' ),

            "brief" => 'As a 3rd year project, with a focus on use of a database for a site delivering videos, I wanted to push myself beyond my then-capabilities of all languages. The project Moviebase was created for the same unit in the previous year, so it evident to see the difference in how much I’ve learnt.',

            'focus' => 'As this was created for a unit on databases, it was pretty obvious that I was going to be pushing my PHP skills to the limit. So, this was a essentially a dev project, even tho I still did the designs and actually created the concept for the site from inspiration of the well-known lonelyplanet.com.',

            'wireframes' => 'I wouldn’t usually go down the route of producing digital wireframes, but it was a requirement for the unit. The wireframes are pretty detailed, with approximate sizing labelled, all done inside Adobe XD.',
        );
        break;

    case 'moviebase':

        $package = array(
            'name' => 'moviebase',

            'url' => 'http://moviebase.jacksonlewis.co.uk',

            "desc" => "Concept movie trailers site delivering info and [Youtube] videos on movies coming soon, in cinemas and more", 

            "details" => array( 'Custom CMS', 'Database driven', 'Late 2017', 'University project' ),

            "stats" => array( '28 videos', '12 destinations', '943 lines of jQuery' ),

            "brief" => 'As a 3rd year project, with a focus on use of a database for a site delivering videos, I wanted to push myself beyond my then-capabilities of all languages. The project Moviebase was created for the same unit in the previous year, so it evident to see the difference in how much I’ve learnt.',

            'focus' => 'As this was created for a unit on databases, it was pretty obvious that I was going to be pushing my PHP skills to the limit. So, this was a essentially a dev project, even tho I still did the designs and actually created the concept for the site from inspiration of the well-known lonelyplanet.com.',

            'wireframes' => 'I wouldn’t usually go down the route of producing digital wireframes, but it was a requirement for the unit. The wireframes are pretty detailed, with approximate sizing labelled, all done inside Adobe XD.',
        );
        break;

    case 'alex dunnett photography':

        $package = array(
            'name' => 'alex dunnett photography',

            'url' => 'http://alexdunnett.co.uk',

            "desc" => "Created for another student, this portfolio site focuses on the imagery with emmersive galleries", 

            "details" => array( 'Custom CMS', 'Database driven', 'Late 2017', 'University project' ),

            "stats" => array( '28 videos', '12 destinations', '943 lines of jQuery' ),

            "brief" => 'As a 3rd year project, with a focus on use of a database for a site delivering videos, I wanted to push myself beyond my then-capabilities of all languages. The project Moviebase was created for the same unit in the previous year, so it evident to see the difference in how much I’ve learnt.',

            'focus' => 'As this was created for a unit on databases, it was pretty obvious that I was going to be pushing my PHP skills to the limit. So, this was a essentially a dev project, even tho I still did the designs and actually created the concept for the site from inspiration of the well-known lonelyplanet.com.',

            'wireframes' => 'I wouldn’t usually go down the route of producing digital wireframes, but it was a requirement for the unit. The wireframes are pretty detailed, with approximate sizing labelled, all done inside Adobe XD.',
        );
}
if ( isset( $_REQUEST[ 'project' ] ) ) { echo json_encode( $package ); }

?>