import AttachesTool from '@editorjs/attaches';
import Checklist from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import TextVariantTune from '@editorjs/text-variant-tune';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import RawTool from '@editorjs/raw';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/warning';
import DragDrop from 'editorjs-drag-drop';
import { StyleInlineTool } from 'editorjs-style';
import Undo from 'editorjs-undo';
import Hyperlink from 'editorjs-hyperlink';
import ToggleBlock from 'editorjs-toggle-block';

document.addEventListener('alpine:init', () => {
    Alpine.data(
        'editorjs',
        ({ state, statePath, placeholder, readOnly, debugEnabled, tools, toolsOptions, minHeight, update }) => ({
            instance: null,
            state: state,
            tools: tools,
            log: (...args) => debugEnabled && console.log(...args),

            updatedState() {
                if (this.instance && this.state && this.update) {
                    this.instance.clear(); // Очищаємо редактор перед рендером
                    this.instance.render({ blocks: this.state.blocks }); // Рендеримо нові блоки
                    this.update = false;
                }
            },

            initializeEditor() {
                let enabledTools = {};

                document.addEventListener('fields-ai-content-generate', () => {
                    this.update = true;
                });

                this.log('EditorJS Alpine component initialized');
                this.log('State path:', statePath);
                this.log('State:', state);
                this.log('Placeholder:', placeholder);
                this.log('Read only:', readOnly);
                this.log('Tools:', tools);
                this.log('Tools options:', toolsOptions);
                this.log('Min height:', minHeight);

                if (this.tools.includes('attaches')) {
                    enabledTools.attaches = {
                        class: AttachesTool,
                        config: {
                            endpoints: {
                                byFile: '/editor-js/upload/file',
                                byUrl: '/editor-js/upload/url',
                            },
                            additionalRequestHeaders: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                            }
                        },
                    };
                }

                if (this.tools.includes('checklist')) {
                    enabledTools.checklist = {
                        class: Checklist,
                        inlineToolbar: true,
                    };
                }

                if (this.tools.includes('text-variant-tune')) {
                    enabledTools.textVariant = TextVariantTune;
                }

                if (this.tools.includes('code')) {
                    const codeToolConfig = toolsOptions.hasOwnProperty('code') ? toolsOptions.code : {};
                    const codeToolDefaultConfig = {};

                    enabledTools.code = {
                        class: Code,
                        config: {
                            ...codeToolDefaultConfig,
                            ...codeToolConfig,
                        },
                    };
                }

                if (this.tools.includes('delimiter')) {
                    enabledTools.delimiter = Delimiter;
                }

                if (this.tools.includes('hyperlink')) {
                    enabledTools.hyperlink = {
                        class: Hyperlink,
                        config: {
                            shortcut: 'CMD+L',
                            target: '_blank',
                            rel: 'nofollow',
                            availableTargets: ['_blank', '_self'],
                            availableRels: ['author', 'noreferrer', 'nofollow'],
                            validate: false,
                        }
                    };
                }

                if (this.tools.includes('toggle-block')) {
                    enabledTools.toggle = {
                        class: ToggleBlock,
                        inlineToolbar: true,
                    };
                }

                if (this.tools.includes('embed')) {
                    enabledTools.embed = {
                        class: Embed,
                        inlineToolbar: true,
                        config: {
                            services: {
                                youtube: true,
                                vimeo: true,
                                facebook: true,
                                instagram: true,
                                imgur: true,
                                twitter: true,
                                coub: true
                            }
                        }
                    };
                }

                if (this.tools.includes('header')) {
                    const headerToolConfig = toolsOptions.hasOwnProperty('header') ? toolsOptions.header : {};
                    const headerToolDefaultConfig = {};

                    enabledTools.header = {
                        class: Header,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+H',
                        config: {
                            ...headerToolDefaultConfig,
                            ...headerToolConfig,
                        },
                    };
                }

                if (this.tools.includes('image')) {
                    enabledTools.image = {
                        class: ImageTool,
                        config: {
                            endpoints: {
                                byFile: '/editor-js/upload/file',
                                byUrl: '/editor-js/upload/url',
                            },
                            additionalRequestHeaders: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                            }
                        },
                    };
                }

                if (this.tools.includes('inline-code')) {
                    enabledTools.inlineCode = InlineCode;
                }

                if (this.tools.includes('link')) {
                    enabledTools.linkTool = {
                        class: LinkTool,
                        config: {
                            endpoint: '/editor-js/fetch/url',
                            additionalRequestHeaders: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                            }
                        }
                    };
                }

                if (this.tools.includes('list')) {
                    const listToolConfig = toolsOptions.hasOwnProperty('list') ? toolsOptions.list : {};
                    const listToolDefaultConfig = {
                        defaultStyle: 'ordered'
                    };

                    enabledTools.list = {
                        class: List,
                        inlineToolbar: true,
                        config: {
                            ...listToolDefaultConfig,
                            ...listToolConfig,
                        },
                    };
                }

                if (this.tools.includes('marker')) {
                    enabledTools.Marker = {
                        class: Marker,
                        shortcut: 'CMD+SHIFT+M',
                    };
                }

                if (this.tools.includes('nested-list')) {
                    const nestedListToolConfig = toolsOptions.hasOwnProperty('nested-list') ? toolsOptions['nested-list'] : {};
                    const nestedListToolDefaultConfig = {
                        defaultStyle: 'unordered'
                    };

                    enabledTools.list = {
                        class: NestedList,
                        config: {
                            ...nestedListToolConfig,
                            ...nestedListToolDefaultConfig,
                        }
                    };
                }

                if (this.tools.includes('paragraph')) {
                    const paragraphToolConfig = toolsOptions.hasOwnProperty('paragraph') ? toolsOptions.paragraph : {};
                    const paragraphToolDefaultConfig = {};

                    enabledTools.paragraph = {
                        class: Paragraph,
                        inlineToolbar: true,
                        config: {
                            ...paragraphToolDefaultConfig,
                            ...paragraphToolConfig,
                        },
                    };
                }

                if (this.tools.includes('quote')) {
                    const quoteToolConfig = toolsOptions.hasOwnProperty('quote') ? toolsOptions.quote : {};
                    const quoteToolDefaultConfig = {};

                    enabledTools.quote = {
                        class: Quote,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+O',
                        config: {
                            ...quoteToolDefaultConfig,
                            ...quoteToolConfig,
                        },
                    };
                }

                if (this.tools.includes('raw')) {
                    const rawToolConfig = toolsOptions.hasOwnProperty('raw') ? toolsOptions.raw : {};
                    const rawToolDefaultConfig = {};

                    enabledTools.raw = {
                        class: RawTool,
                        config: {
                            ...rawToolDefaultConfig,
                            ...rawToolConfig,
                        },
                    };
                }

                if (this.tools.includes('style')) {
                    enabledTools.style = StyleInlineTool;
                }

                if (this.tools.includes('table')) {
                    const tableToolConfig = toolsOptions.hasOwnProperty('table') ? toolsOptions.table : {};
                    const tableToolDefaultConfig = {};

                    enabledTools.table = {
                        class: Table,
                        inlineToolbar: true,
                        config: {
                            ...tableToolDefaultConfig,
                            ...tableToolConfig,
                        },
                    };
                }

                if (this.tools.includes('underline')) {
                    enabledTools.underline = Underline;
                }

                if (this.tools.includes('warning')) {
                    const warningToolConfig = toolsOptions.hasOwnProperty('warning') ? toolsOptions.warning : {};
                    const warningToolDefaultConfig = {
                        titlePlaceholder: 'Title',
                        messagePlaceholder: 'Message',
                    };

                    enabledTools.warning = {
                        class: Warning,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+W',
                        config: {
                            ...warningToolDefaultConfig,
                            ...warningToolConfig,
                        }
                    };
                }

                this.instance = new EditorJS({
                    holder: this.$el,
                    minHeight: minHeight,
                    data: this.state,
                    placeholder: placeholder,
                    readOnly: readOnly,
                    tools: enabledTools,

                    /**
                     * Apply to all the blocks
                     */
                    tunes: ['textVariant'],

                    onChange: () => {
                        this.instance
                            .save()
                            .then((outputData) => {
                                this.state = outputData;
                            });
                    },

                    onReady: () => {
                        const editor = this.instance;
                        new Undo({ editor });
                        new DragDrop(editor);
                    },
                });
            },
        })
    );
});
