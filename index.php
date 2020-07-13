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

add_theme_support( 'editor-color-palette', array(
    array(
        'name' => __( 'strong magenta', 'themeLangDomain' ),
        'slug' => 'strong-magenta',
        'color' => '#a156b4',
    ),
    array(
        'name' => __( 'light grayish magenta', 'themeLangDomain' ),
        'slug' => 'light-grayish-magenta',
        'color' => '#d0a5db',
    ),
    array(
        'name' => __( 'very light gray', 'themeLangDomain' ),
        'slug' => 'very-light-gray',
        'color' => '#eee',
    ),
    array(
        'name' => __( 'very dark gray', 'themeLangDomain' ),
        'slug' => 'very-dark-gray',
        'color' => '#444',
    ),
) );

function my_plugin_block_categories( $categories, $post ) {
    if ( $post->post_type !== 'post' ) {
        return $categories;
    }
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'tutorial',
                'title' => __( 'My tutorial', 'recipe' ),
                'icon'  => 'wordpress',
            ),
        )
    );
}

add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );