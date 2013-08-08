<?php
// conditional tag for blog-related pages

function is_blog() {
    if (is_home() || is_singular('post') || is_post_type_archive('post')) {
        return true;
    } else {
        return false;
    }
}

// use the function to detect if you're currently on a blog related page

if(is_blog()) {
    // the page is blog related
}
