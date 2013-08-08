<?php

// short codes are for editing post content without
// needing to edit the source code

// http://wp.smashingmagazine.com/2012/05/01/wordpress-shortcodes-complete-guide/
// http://wp.smashingmagazine.com/2009/02/02/mastering-wordpress-shortcodes/


// LINK BUTTON

function linkbutton_function( $atts, $content = null ) {
    return '<button type="button">'.do_shortcode($content).'</button>';
}

add_shortcode('linkbutton', 'linkbutton_function');


[linkbutton]