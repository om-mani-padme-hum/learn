const docket = require('docket-parser');

const fileList = ['index.js', 'ezelement.js', 'elements/abbreviation.js', 'elements/address.js', 'elements/anchor.js', 'elements/area.js', 'elements/article.js', 
                  'elements/aside.js', 'elements/audio.js', 'elements/base.js', 'elements/bidirectional-isolation.js', 'elements/bidirectional-override.js', 
                  'elements/blockquote.js', 'elements/body.js', 'elements/bold.js', 'elements/button.js', 'elements/canvas.js', 'elements/caption.js', 
                  'elements/child.js', 'elements/citation.js', 'elements/code.js', 'elements/column-group.js', 'elements/column.js', 'elements/container-element.js', 
                  'elements/container.js', 'elements/data.js', 'elements/data-list.js', 'elements/definition-description.js', 'elements/definition-list.js', 
                  'elements/definition-term.js', 'elements/definition.js', 'elements/deleted.js', 'elements/details.js', 'elements/dialog.js', 'elements/div.js', 
                  'elements/element.js', 'elements/embed.js', 'elements/emphasized.js', 'elements/fieldset.js', 'elements/figure-caption.js', 
                  'elements/figure.js', 'elements/footer.js', 'elements/form.js', 'elements/head.js', 'elements/header.js',
                  'elements/headings.js', 'elements/horizontal-rule.js', 'elements/html.js', 'elements/image.js', 'elements/index.js', 'elements/input.js', 'elements/inserted.js', 
                  'elements/italic.js', 'elements/keyboard.js', 'elements/label.js', 'elements/legend.js', 'elements/line-break.js', 'elements/link.js', 
                  'elements/list-item.js', 'elements/main.js', 'elements/map.js', 'elements/mark.js', 'elements/meta.js', 
                  'elements/meter.js', 'elements/multimedia-object.js', 'elements/nav.js', 'elements/no-script.js', 'elements/option-group.js', 'elements/option.js', 
                  'elements/ordered-list.js', 'elements/output.js', 'page.js', 'elements/paragraph.js', 'elements/param.js', 'elements/picture.js', 'elements/preformatted-text.js', 
                  'elements/progress.js', 'elements/quotation.js', 'elements/sample.js', 'elements/script.js', 'elements/section.js', 'elements/select.js', 'elements/small.js', 
                  'elements/source.js', 'elements/span.js', 'elements/strikethrough.js', 'elements/strong.js', 'elements/style.js', 'elements/subscript.js', 
                  'elements/summary.js', 'elements/superscript.js', 'elements/svg.js', 'elements/table-body.js', 'elements/table-data.js', 'elements/table-footer.js', 
                  'elements/table-head.js', 'elements/table-header.js', 'elements/table-row.js', 'elements/table.js', 'elements/template.js', 'elements/text-area.js', 
                  'elements/text.js', 'elements/time.js', 'elements/title.js', 'elements/track.js', 'elements/underline.js', 'elements/unordered-list.js', 'elements/variable.js', 
                  'elements/video.js', 'elements/word-break-opportunity.js'];

docket.title('EZ HTML v2.0.2 Documentation');
docket.linkClass('text-success');
docket.parseFiles(fileList);
docket.generateDocs('docs');
