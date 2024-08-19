<?php

declare(strict_types=1);

namespace Broqit\FilamentEditorJs\Events;

use Illuminate\Foundation\Events\Dispatchable;

class EditorJsImageUploaded
{
    use Dispatchable;

    public function __construct(public string $disk, public string $path)
    {
    }
}
