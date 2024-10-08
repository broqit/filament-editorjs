<?php

declare(strict_types=1);

use Broqit\FilamentEditorJs\Http\Controllers\EditorJsImageUploadController;
use Broqit\FilamentEditorJs\Http\Controllers\EditorJsLinkController;
use Illuminate\Support\Facades\Route;

Route::post('editor-js/upload/file', EditorJsImageUploadController::class.'@file')->name('editor-js-upload-image-by-file');
Route::post('editor-js/upload/url', EditorJsImageUploadController::class.'@url')->name('editor-js-upload-image-by-url');
Route::get('editor-js/fetch/url', EditorJsLinkController::class.'@fetch')->name('editor-js-fetch-url');
