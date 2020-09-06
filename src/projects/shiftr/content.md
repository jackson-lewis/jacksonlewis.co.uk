---
slug: /projects/shiftr
title: Shiftr - WP Starter Theme
desc: A theme that meets the critiria of performance, experience and simplicity.
featuredImage: ./feature.jpg
type: project
tags: wp theme dev, webpack, gulp
url: https://github.com/jackson-lewis/shiftr
---

Shape Shiftr, or Shiftr for short, is a blank WordPress theme acting as a starting point for any new WordPress project. Although it is a blank theme, it provides a real solid starting point with all the common components off-the-shelf.

## The why

The reason Shiftr was created is relatively simple, I don't like CSS/JS libraries. The initial start of life for Shiftr was just a CSS/JS library which I created in my final year of university, it was my final year project. I set out to cast my view on why these libraries aren't necessarily a good option, and while most of report is just my personal opinion, I feel that many people would agree with me, and understand why.

![Image](./the-why.jpg "This is my image")

### Starting fresh

It was vital I understood why I didn't like existing libraries if I was to go ahead and produce my own. A massive point for me was many use jQuery as a dependency, which was a red flag. It was so important that Shiftr was a pure JS solution, as performance was one of the top driving factors of the project.

### Developer experience

Productivity is a big deal for a developer, shaving seconds off common tasks carried out daily *_will_* add up to hours if not days over the course of a year. I quickly found out what I was always doing, such as adding a featured image to a page, and simply created a function for getting the feature image and display it.

## The how

The project has seen some heavy updates since I labelled it as `v1.0` back in Jan 2019. Most notably has been the transition to Gulp v4, swiftly followed by Webpack for handling all the JS components. Shiftr has always used Gulp as its task runner, simple and extensible.

Much of the project features have usually come from the result of finding better ways to do things, like thinking, I perform this task on every project, why don't I just add it to the core of Shiftr. Which is kinda another purpose of Shiftr, it's to provide a central point for the best code, instead of trawling through past projects trying to find that thing I did.

## Best bits

I'm so happy with the current state of Shiftr now, sitting pretty at `v1.3.1` it pretty much does all I want it to.

### Helper functions

Making life easier, and much, much less to type.

```php
function get_shiftr_image( $id = 0, $size = 'large', $lazy = true, $attr = [] ) {

    $html = '';

    // Check if string value may acutally be a integar before proceeding
    $id = intval( $id ) ? intval( $id ) : $id;

    // Capture ACF values automatically if field name is passed as $id
    if ( $id == 0 || is_string( $id ) ) {

        $acf_field = is_string( $id ) ? $id : 'image';

        if ( get_field( $acf_field ) ) {
            $id = get_field( $acf_field );

        } elseif ( get_sub_field( $acf_field ) ) {
            $id = get_sub_field( $acf_field );

        } else {
            return false;
        }
    }

    if ( $id > 0 ) {
        $html = wp_get_attachment_image( $id, $size, false, $attr );
    }

    return $html;
}
```

Probably the most commonly used of these helper functions is `get_shiftr_image()`, a effortless way to get the markup of an image into the page. This function also powers our `shiftr_featured_image()` helper too, which essentially acts as a wrapper to `get_shiftr_image()` but specifically for the featured image of posts.

### Webpack

Most definitely my favourite update ever to Shiftr, using Webpack to handle all the JS compiling. But the best benefit, and main reason for switching to Webpack was to use ES6 imports. Now I could easily control what could be included in the production assets as well as define several output files, much has helped immensely.

### Flexi Blocks Builder Template

A starter template using the [Advanced Custom Fields](https://www.advancedcustomfields.com/) [flexible content field](https://www.advancedcustomfields.com/resources/flexible-content/) to create a template which can be constructed in any configuration to form a page. Shiftr provides a couple of basic blocks off-the-shelf to get going, and to add new blocks is super easy with thanks to some specific Flexi helper functions such as `shiftr_block_heading()` and `shiftr_block_after()` which are parts of a block universal across all blocks.

```php
<?php

if ( have_rows( 'flexi_blocks' ) ) :

    while ( have_rows( 'flexi_blocks' ) ) : the_row();

        $block = get_row_layout();
        $settings = shiftr_get_block_settings();
        $atts = shiftr_get_block_attributes( $block, $settings );

        echo '<section ' . shiftr_output_attr( $atts ) . '>';

        switch ( $block ) :

            /**
             * Basic block, single ACF WYSIWYG field for any use.
             */
            case 'content':
?>

<div class="container contain-line-width">
    <div class="content">
        <?php the_sub_field( 'content' ); ?>
    </div>
</div>

<?php
    break;

    /**
     * A Glide.js slider 
     */
    case 'gallery':

        $images = get_sub_field( 'images' );

        if ( empty( $images ) ) break;

        shiftr_get_block( $block, array( 'images' => $images ) );
?>

<?php
            break;

        endswitch;

        echo '</section>';

    endwhile;
endif;

?>
```

`shiftr_get_block()` is another helper function that was brought in to aid development with the Flexi template. It makes it easy to separate the markup of blocks into individual files allowing you to keep the markup of the main template file clean.

## Future plans

Shiftr has been regularly receiving updates as time has gone on, as I push my own knowledge further, I try to keep Shiftr up to speed with that knowledge. A good example was the update of all the JavaScript components to be built on ES6 classes.

The honest truth is that Shiftr is more or less inline with my expectations of serving as a starter theme for a WordPress project, it comes off-the-shelf with what I need to get going, and is super easy to extend to meet the needs of a given project. So Shiftr is likely to only receive minor updates addressing bug fixes or to make use of emerging tech like when CSS variables arrived.

Shiftr is already in its second set of shoes, and its successor is 100% to be React based, built for the world of JAMstack. That doesn't mean the roots of Shiftr is to be forgotten.
