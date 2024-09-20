<x-dynamic-component
        :component="$getFieldWrapperView()"
        :field="$field"
>

    <div class="filament-editor-js">
        <div
                wire:ignore
                {{
                  $attributes
                    ->merge($getExtraAttributes())
                    ->class([
                        'editorjs-wrapper'
                    ])
                }}
                x-data="editorjs({
                state: $wire.entangle('{{ $getStatePath() }}'),
                statePath: '{{ $getStatePath() }}',
                placeholder: '{{ $getPlaceholder() }}',
                readOnly: {{ $isDisabled() ? 'true' : 'false' }},
                debugEnabled: {{ $isDebugEnabled() ? 'true' : 'false' }},
                tools: @js($getTools()),
                toolsOptions: @js($getToolsOptions()),
                minHeight: @js($getMinHeight())
            })"
                x-init="initializeEditor()"
                x-effect="updatedState()"
        >
        </div>
    </div>

</x-dynamic-component>
