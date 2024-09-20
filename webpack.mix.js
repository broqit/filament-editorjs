let mix = require("laravel-mix");

mix.js("resources/js/editor.js", "/dist/js").postCss(
    "resources/css/editor.css", "/dist/css",
    [require("tailwindcss")]
);