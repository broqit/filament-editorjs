const mix = require('laravel-mix');

mix.setPublicPath('dist')
    .js('resources/js/editor.js', 'js')
    .postCss('resources/css/editor.css', 'css');