<?php

namespace Broqit\FilamentEditorJs\Forms\Components;

use Closure;
use Durlecode\EJSParser\HtmlParser;
use Durlecode\EJSParser\Parser;
use Filament\Forms\Components\Concerns\HasFileAttachments;
use Filament\Forms\Components\Concerns\HasPlaceholder;
use Filament\Forms\Components\Contracts\HasFileAttachments as HasFileAttachmentsContract;
use Filament\Forms\Components\Field;
use Broqit\FilamentEditorJs\Forms\Components\Concerns\InteractsWithTools;

class EditorJs extends Field implements HasFileAttachmentsContract
{
    use HasFileAttachments, HasPlaceholder, InteractsWithTools;

    protected string $view = 'filament-editor-js::forms.components.fields.editorjs';

    protected array | Closure $tools = [
        'attaches',
        'checklist',
        'code',
        'delimiter',
        'header',
        'image-gallery',
        'image',
        'inline-code',
        'link',
        'list',
        'marker',
        'nested-list',
        'paragraph',
        'quote',
        'raw',
        'style',
        'table',
        'underline',
        'warning',
        'embed',
        'text-variant-tune',
        'hyperlink',
        'toggle-block'
    ];

    protected array | Closure $toolsOptions = [];
    protected int | Closure | null $minHeight = 30;
    protected bool $debug = false;

    public function minHeight(int | Closure | null $minHeight): static
    {
        $this->minHeight = $minHeight;

        return $this;
    }

    public function getMinHeight(): ?int
    {
        return $this->evaluate($this->minHeight);
    }

    public function debug(bool $debug = true): static
    {
        $this->debug = $debug;

        return $this;
    }

    public function isDebugEnabled(): bool
    {
        return $this->debug;
    }
    protected function mutateBeforeSave($state): string
    {
        return Parser::parse($state)->toHtml();
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->afterStateHydrated(static function (EditorJs $component, $state) {
            if (blank($state)) {
                return;
            }

            $parser = new HtmlParser($state);
            $blocks = $parser->toBlocks();

            $component->state(json_decode($blocks, true));
        });

        $this->dehydrateStateUsing(static function (EditorJs $component, $state) {
            return Parser::parse(json_encode($state))->toHtml();
        });
    }
}
