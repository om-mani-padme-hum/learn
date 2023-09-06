const ezhtml = require('./index');
const fs = require('fs');

/** Didn't pass false to constructor, so <html>, <head>, and <body> already created */
const p = new ezhtml.Page();

p.title().text('My Example Page');
p.style().text('p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }');
p.script().src('https://code.jquery.com/jquery-3.3.1.js');
p.div().style('width: 100%; text-align: center;');
p.h2().style(`color: blue;`).text('My Example Page');
p.div(`body`).style('position: relative; width: 50%; left: 25%; text-align: center;');

p.abbreviation().text('Abbrev. St.');
p.lineBreak();
p.address().text('123 Foo Rd');
p.lineBreak();
p.anchor().hreflang('en').target('_new').href('http://www.google.com').text('Google Search');
p.lineBreak();
p.article().text('Article');
p.lineBreak();
p.aside().text('Aside');
p.lineBreak();
p.base().href('./');
p.lineBreak();
p.bidirectionalIsolation().text('إيان :Bi-directional isolation');
p.lineBreak();
p.bidirectionalOverride().dir('ltr').text('Bi-directional override: إيان');
p.lineBreak();
p.blockquote().text('Blockquote -- Four score and twenty years ago...');
p.lineBreak();
p.bold().text('Bold text');
p.lineBreak();
p.button().type('button').text('Click me');
p.lineBreak();
p.citation().text('Citation text');
p.lineBreak();
p.code().text('Code text');
p.lineBreak();

p.dataList();
p.option().value(1).text('Data 1');
p.option().value(2).text('Data 2');
p.option().value(3).text('Data 3');

p.lineBreak();

p.definitionList();
p.definitionTerm().text('doohickey');
p.definitionDescription().text('the thing next to the thingamabob');

p.lineBreak();
p.deleted().cite('v1.0.0').datetime('2018-06-24T17:37:05.713-06:00').text('Deleted text');
p.lineBreak();
p.details().open(true).text('There are some details...');
p.lineBreak();
p.dialog().open(true).text('This is a dialog box...');
p.lineBreak();
p.lineBreak();
p.lineBreak();
p.lineBreak();

p.form();
p.fieldSet();
p.legend().text('Some inputs in a group:');
p.text().text('Name:');
p.input().type('text').name('name').placeholder('Enter name');
p.lineBreak();

p.figure();
p.image().width(100).height(100).src('./example.png');
p.figureCaption().text('FigCaption: Computer generated PNG');
p.lineBreak();
p.horizontalRule();
p.lineBreak();
p.inserted().cite('v1.0.0').datetime('2018-06-24T17:47:3u.022-06:00').text('Inserted text');
p.lineBreak();
p.italic().text('Italic text');
p.lineBreak();
p.keyboard().text('Keyboard text');
p.lineBreak();
p.label().text('Label text');
p.lineBreak();

p.orderedList();
p.listItem().text('Ordered List Item One');
p.listItem().text('Ordered List Item Two');
p.listItem().text('Ordered List Item Three');
p.lineBreak();

p.unorderedList();
p.listItem().text('Unordered List Item One');
p.listItem().text('Unordered List Item Two');
p.listItem().text('Unordered List Item Three');
p.lineBreak();
p.main().text('Main text');
p.lineBreak();

p.meter().min(0).max(250).low(25).high(180).optimum(85).value(73);
p.lineBreak();
p.nav().text('Nav text');
p.anchor(`nav`).href('http://www.nodejs.org').text('Node JS');

p.lineBreak();
p.noScript().text('NoScript text (only visible if JavaScript is disabled)');
p.lineBreak();

p.select(`div`).name('mySelect');
p.optionGroup().label('Primary Options');
p.option().value(1).text('Primary Option 1');
p.option().value(2).text('Primary Option 2');
p.option().value(3).text('Primary Option 3');
p.optionGroup().label('Secondary Options');
p.option().value(1).text('Secondary Option 1');
p.option().value(2).text('Secondary Option 2');
p.option().value(3).text('Secondary Option 3');

p.lineBreak();
p.output().for('mySelect');
p.lineBreak();

p.paragraph().addClass('myClass').text('This is my example paragraph in bold Arial font.');

p.picture();
p.image().width(100).height(100).src('./example.png');
p.lineBreak();
p.preformattedText().text('Label text');
p.lineBreak();
p.progress().max(100).value(79);
p.lineBreak();
p.quotation().text('Quoted text');
p.lineBreak();
p.script().append(() => {
  alert(`This alert is part of a script created using a server side JavaScript function, it requires jQuery though!`);
});
p.section().text('Section text');
p.lineBreak();
p.small().text('Small text');
p.lineBreak();
p.span().text('A span containing some text');
p.lineBreak();
p.strikethrough().text('Strikethrough text');
p.lineBreak();
p.strong().text('Strong text');
p.lineBreak();
p.subscript().text('Subscript text');
p.lineBreak();
p.summary().text('Summary text');
p.lineBreak();
p.superscript().text('Superscript text');
p.lineBreak();

p.table();
p.caption().text('Caption text');
p.tableHead();
p.tableRow();
p.tableHeader().text('Header 1');
p.tableHeader().text('Header 2');
p.tableHeader().text('Header 3');
p.tableBody();
p.tableRow();
p.tableData().text('Row 1 Col 1 Data');
p.tableData().text('Row 1 Col 2 Data');
p.tableData().text('Row 1 Col 3 Data');
p.tableRow();
p.tableData().text('Row 2 Col 1 Data');
p.tableData().text('Row 2 Col 2 Data');
p.tableData().text('Row 2 Col 3 Data');
p.tableFooter();
p.tableRow();
p.tableData().text('Footer 1');
p.tableData().text('Footer 2');
p.tableData().text('Footer 3');
p.lineBreak();
p.template();
p.h2(`template`).text('My Template');
p.lineBreak();
p.textArea().name('myTextArea').text('Text area input');
p.lineBreak();
p.time().datetime('2018-06-24T17:47:3u.022-06:00');
p.lineBreak();
p.underline().text('Underline text');
p.lineBreak();
p.variable().text('Variable text');
p.lineBreak();
p.text().text('This is some text and it will have a word break opportunity in the middle');
p.wordBreakOpportunity().text('of');
p.text().text('it, though who knows how it will come out on your browser.');
p.lineBreak();

fs.writeFileSync('example.html', p.render());

console.log(`Output written to example.html`);
