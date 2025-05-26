<?php
/**
 * Template Name: MRCF
 */

get_header(); ?>

<div class="content-area">
    <main class="site-main">

        <?php 
        // Yahan aap apna contact-info-test.php include kar sakte ho
        require get_template_directory() . '/templates/mrcf/mrcf.php'; 
        ?>

    </main>
</div>

<?php get_footer(); ?>