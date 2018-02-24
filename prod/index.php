<?php   /* //////   PORTFOLIO   ////// */

    $title = 'Digital Designer';

    $desc = 'Hi, I\'m Jackson Lewis. A 21 year old breaking into the digital world';

    $key = 'digital, web, designer, developer, front-end, specialist, html, css, scss, javascript, php, sql, database, cms, website';

?>        

<?php include 'include/header.php'; ?>
    

    <main>

        <div class="hero">
            <div class="hero-background"></div>
            <div class="hero-content">
                <div class="p-h1">
                    <h1>Digital Designer</h1>
                </div>
                <div class="p-p">
                    <p>A fresh-out-of-uni 21 year old aspiring to break into the digital world, specializing in front-end development</p>
                </div>
            </div>
            <div class="gradient"></div>
        </div>

        <section class="about">
            <h2>about</h2>
            <p>In short; I'm a designer, front-end developer &amp; and know a thing or two on back-end. My skillset also extends outside of web design being handy working on graphic design, print, photo editing and video editing.</p>
            <div data-bg="about">
                <img src="assets/images/me.jpg" id="about_bg">
            </div>
            <p>I've had the opportunity to work on sites for external clients through my time at university, as well as produce multiple sites for family and friends. Over the last few years I have pushed myself to experiment with my code; bringing the likes SCSS to my toolbelt, massively increasing my JavaScript capability and not to mention working with PHP and mySQL.</p>
            <p>I am open to working on projects on a freelance/contract basis, or a more permenant position if the location fits.</p>
            <p>If you want to find out more, take a look over <a data-link="cv">my CV</a></p>
        </section>

        <section class="projects">
            <h2>projects</h2>
            <ul>
                <?php

                $projects = array( 'goxplore', 'gt cnc', 'project dawn', 'moviebase', 'alex dunnett photography' );

                for ( $x = 0; $x < count( $projects ); $x++ ) {

                    $project = $projects[ $x ];

                    include 'include/data.php';
                ?>
                <li>
                    <div class="image">
                        <img src="assets/projects/<?php echo $package[ 'name' ] . '/thumbnail.jpg"' ?>>
                    </div>
                    <h4><?php echo $package[ 'name' ]; ?></h4>
                    <p><?php echo $package[ 'desc' ]; ?></p>
                    <a data-project="<?php echo $package[ 'name' ]; ?>">Read the case study</a>
                </li>

                <?php } ?>
            </ul>
        </section>

        <section class="contact">
            <h2>contact</h2>
            <p id="c_opener">If you want to know about my experience or any other history, you can read all about it in <a data-link="cv">my CV</a></p>
            <div class="details">
                <p>Give me a call to discuss something such as employment or just fancy a chat, it's up to you</p>
                <a href="tel:07511024460">075 110 244 60</a>
            </div>
            <div class="details">
                <p>Drop me an email, be it a question about something seen on this site or to kickstart a project</p>
                <a href="mailto:hello@jacksonlewis.co.uk?subject=Let's Chat">hello@jacksonlewis.co.uk</a>
            </div>
            <div data-bg="contact">
                <img src="assets/images/contact.jpg" id="contact_bg">
            </div>
            <form>
                <h4>send me a message</h4>

                <div>
                    <label>name</label>
                    <input type="name" name="name">
                </div>

                <div>
                    <label>email</label>
                    <input type="email" name="email">
                </div>
            
                <label>message</label>
                <textarea rows="4"></textarea>

                <input type="submit" name="submit">
            </form>
        </section>
        
    </main>

    <?php include 'project.php'; ?>

    <?php include 'progression.php'; ?>

    <?php include 'cv.php'; ?>


<?php include 'include/footer.php'; ?>