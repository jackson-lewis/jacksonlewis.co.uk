<!DOCTYPE html> <!--  ////  COPYRIGHT JACKSON LEWIS 2018 - 'Portfolio' - v0.8  ////  -->

<html lang="en-gb">
    
    <head>
        
        <!-- TITLE -->
        <title><?php echo $title . ' ~ Jackson Lewis'; ?></title>
        
        <!-- META -->
        <meta charset="utf-8">
        <meta name="description" content="<?php echo $desc; ?>">
        <meta name="keywords" content="<?php echo 'jackson, lewis, dynamic' . ', ' . $key; ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"> <!-- MOBILE ONLY -->
        <!-- <link rel="shortcut icon" href="<?php // echo 'assets/icons/favicon.png'; ?>"> -->
        
        <!-- CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">

    </head>
    
    <body data-page="portfolio">

        <header>

            <img src="assets/branding/logo@2018.png" alt="Jackson Lewis Logo">

            <div class="hamburger" id="toggle">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <nav>
                <div></div>

                <ul id="Portfolio">
                    <li data-link="about">about</li>
                    <li data-link="projects">projects</li>
                    <li data-link="contact">contact</li>
                </ul>

                <ul id="site">
                    <li data-link="progression">progression</li>
                    <li data-link="cv">cv</li>
                </ul>

            </nav>

        </header>
