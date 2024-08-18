<?php

namespace FilamentEditorJs\Forms\Components;

use Closure;
use Durlecode\EJSParser\HtmlParser;
use Durlecode\EJSParser\Parser;
use Filament\Forms\Components\Concerns\HasFileAttachments;
use Filament\Forms\Components\Concerns\HasPlaceholder;
use Filament\Forms\Components\Contracts\HasFileAttachments as HasFileAttachmentsContract;
use Filament\Forms\Components\Field;
use FilamentEditorJs\Forms\Components\Concerns\InteractsWithTools;

class EditorJs extends Field implements HasFileAttachmentsContract
{
    use HasFileAttachments, HasPlaceholder, InteractsWithTools;

    protected string $view = 'filament-editorjs::forms.components.fields.editorjs';

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

            self::htmlMutator($state);

            $parser = new HtmlParser($state);
            $parser->setPrefix('ybl');

            $component->state(json_decode($parser->toBlocks(), true));
        });

        $this->dehydrateStateUsing(static function (EditorJs $component, $state) {
            return Parser::parse($state)->toHtml();
        });
    }

    protected static function htmlMutator(&$state): void
    {
        self::replaceHtmlTagWithClass($state, '<h2>', '<h2 class="ybl-header">');
        self::replaceHtmlTagWithClass($state, '<h3>', '<h3 class="ybl-header">');
        self::replaceHtmlTagWithClass($state, '<h4>', '<p class="ybl-header">');
        self::replaceHtmlTagWithClass($state, '<h5>', '<p class="ybl-header">');
        self::replaceHtmlTagWithClass($state, '<ul>', '<div class="ybl-list"><ul');
        self::replaceHtmlTagWithClass($state, '<ol>', '<div class="ybl-list"><ol');
        self::replaceHtmlTagWithClass($state, '</ul>', '</ul></div>');
        self::replaceHtmlTagWithClass($state, '</ol>', '</ol></div>');
        self::replaceHtmlTagWithClass($state, '<p>', '<p class="ybl-paragraph">');
    }

    private static function replaceHtmlTagWithClass(&$state, string $tag, string $replacement): void
    {
        $state = str_replace($tag, $replacement, $state);
    }
}
