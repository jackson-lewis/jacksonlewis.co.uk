<!DOCTYPE html> <!--  ////  COPYRIGHT JACKSON LEWIS 2018 - 'Documentation' - v0.1  ////  -->

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
        
        <!-- JAVASCRIPT -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="js/script-docs.js"></script>
        
    </head>
    
    <body class="docs">

        <header>

            <img src="assets/branding/logo@2018.png" alt="Jackson Lewis Logo">

            <div class="hamburger" id="toggle">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <nav>
                <div></div>

                <ul>
                    <li data-link="industry">industry</li>
                    <li data-link="initiation">initiation</li>
                    <li data-link="cv">cv</li>
                    <li data-link="business card">business card</li>
                    <li data-link="portfolio">portfolio</li>
                </ul>

                <ul id="site">
                    <li data-link="portfolio"><a href="index.php">visit site</a></li>
                </ul>

            </nav>

        </header>
