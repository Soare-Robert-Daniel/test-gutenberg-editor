<?php
/*
Plugin Name: Gutenberg examples 01
*/
function gutenberg_examples() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'gutenberg-examples-recipe',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
 
    
    wp_register_style( 
        'r_style', 
        plugins_url( 'build/index.css', __FILE__ )
    );

    //wp_enqueue_style('r_style');

    register_block_type( 'tutorial/recipe', array(
        'editor_script' => 'gutenberg-examples-recipe',
        'editor_style' => 'r_style',
    ) );
 
}
add_action( 'init', 'gutenberg_examples' );