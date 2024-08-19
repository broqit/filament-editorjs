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
            $blocks = $parser->toBlocks();

            $component->state(json_decode($blocks, true));
        });

        $this->dehydrateStateUsing(static function (EditorJs $component, $state) {
            return Parser::parse(json_encode($state))->toHtml();
        });
    }

    protected static function htmlMutator(&$state): void
    {
        $state = str_replace('</img>', '', $state);

        $state = preg_replace_callback(
            '/<(p|figure)[^>]*>(<img[^>]*>(<figcaption[^>]*>.*?<\/figcaption>)?)<\/(p|figure)>/',
            function ($matches) {
                $img = $matches[2];
                $figcaption = isset($matches[3]) ? $matches[3] : '';

                // Extract the title and alt attribute from the img tag.
                preg_match('/title=["\'](.*?)["\']/', $img, $titleMatches);
                $title = $titleMatches[1] ?? '';
                preg_match('/alt=["\'](.*?)["\']/', $img, $altMatches);
                $alt = $altMatches[1] ?? '';

                // If figcaption doesn't exist and title exists, create figcaption from title
                if (empty($figcaption) && !empty($title)) {
                    $figcaption = "<figcaption>{$title}</figcaption>";
                } elseif (empty($figcaption) && !empty($alt)) { // If figcaption and title don't exist, create figcaption from alt
                    $figcaption = "<figcaption>{$alt}</figcaption>";
                }

                // Ensure the figure tag has the necessary classes
                $desiredTag = 'figure class="prs-image prs_withborder prs_withbackground prs_stretched"';

                // Replace the img tag with new img tag with the necessary classes and attributes
                $desiredImg = preg_replace('/^<img/', '<img ', $img);

                return sprintf(
                    '<%s>%s%s</%s>',
                    $desiredTag,
                    $desiredImg,
                    $figcaption,
                    'figure'
                );
            },
            $state
        );

        self::replaceHtmlTagWithClass($state, '<h2>', '<h2 class="prs-header">');
        self::replaceHtmlTagWithClass($state, '<h3>', '<h3 class="prs-header">');
        self::replaceHtmlTagWithClass($state, '<h4>', '<p class="prs-header">');
        self::replaceHtmlTagWithClass($state, '<h5>', '<p class="prs-header">');
        self::replaceHtmlTagWithClass($state, '<ul>', '<div class="prs-list"><ul');
        self::replaceHtmlTagWithClass($state, '<ol>', '<div class="prs-list"><ol');
        self::replaceHtmlTagWithClass($state, '</ul>', '</ul></div>');
        self::replaceHtmlTagWithClass($state, '</ol>', '</ol></div>');
        self::replaceHtmlTagWithClass($state, '<p>', '<p class="prs-paragraph">');
    }

    private static function replaceHtmlTagWithClass(&$state, string $tag, string $replacement): void
    {
        $state = str_replace($tag, $replacement, $state);
    }
}
