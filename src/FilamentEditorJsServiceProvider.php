<?php

namespace FilamentEditorJs;

use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentEditorJsServiceProvider extends PackageServiceProvider
{

    public static string $name = "filament-editor-js";

    public function configurePackage(Package $package): void
    {
        $package
            ->name(static::$name)
            ->hasViews()
            ->hasAssets();
    }

    public function packageBooted()
    {
        if (! class_exists(FilamentAsset::class)) {
            return;
        }

        FilamentAsset::register([
            Css::make(static::$name, __DIR__ . '/../dist/css/editor.css'),
            Js::make(static::$name, __DIR__ . '/../dist/js/editor.js'),
        ], static::$name);
    }
}
