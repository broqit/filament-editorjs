<?php

namespace Broqit\FilamentEditorJs\Forms\Components;

use Closure;
use Durlecode\EJSParser\HtmlParser;
use Durlecode\EJSParser\Parser;
use Filament\Forms\Components\Concerns;
use Filament\Forms\Components\Contracts;
use Filament\Forms\Components\Field;
use Broqit\FilamentEditorJs\Forms\Components\Concerns\InteractsWithTools;

class EditorJs extends Field implements Contracts\CanBeLengthConstrained
{
    use Concerns\CanBeLengthConstrained;
    use Concerns\HasFileAttachments, Concerns\HasPlaceholder, InteractsWithTools;

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

            // Перевіряємо, чи текст уже в форматі JSON
            $decodedState = json_decode($state, true);

            if (json_last_error() === JSON_ERROR_NONE && is_array($decodedState)) {
                // Якщо текст валідний JSON, просто встановлюємо його як state
                $component->state($decodedState);
                return;
            }

            // Якщо текст не JSON, виконуємо парсинг HTML
            $parser = new HtmlParser($state);
            $blocks = $parser->toBlocks();

            $component->state(json_decode($blocks, associative: true));
        });

        $this->dehydrateStateUsing(static function (EditorJs $component, $state) {
            return Parser::parse(json_encode($state))->toHtml();
        });
    }
}
