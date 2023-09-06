# Strapped v0.7.9

This Node.js module is designed to be a simple API for programatically rendering Bootstrap 4 HTML user interfaces. 
Outputs clean, formatted code using the [EZ HTML](https://github.com/om-mani-padme-hum/ezhtml.git) module, making 
it easy to troubleshoot errors.

## Current Status

Highly functional, but still under development.  Currently have all HTML 5 elements plus Bootstrap 4 accordians, 
alerts, badges, anchors, buttons, button checkboxes, button groups, button links, button radios, button toolbars, 
cards, carousels, columns, collapsable divs, dropdowns, forms, headings, inputs and input sets, jumbotrons, list groups,
modals, progress bars, selects, tables, and textareas.  For standard HTML 5 elements, see 
[EZ HTML](https://github.com/om-mani-padme-hum/ezhtml.git) whose objects are passed through in the Strapped, unless 
they are superseded by Bootstrap 4 components.

In addition, there is a Page object which is a very convenient way to writing short hand web page pages.  That is what 
is being used to draw the example below.  Support for some remaining elements will be added soon.

## Installation

`npm install strapped`

## Principles of Operation

There is an intuitive, yet slightly ambiguous operating principle behind this library.  It is generally expected
that the Page object will be used to generate all content.  Elements are therefore added by using the defined 
helper methods, e.g. Page.div(), Page.alert(), Page.button(), etc.  As for how these elements get nested, you'll have to
learn but the curve should be very low.  Most elements default to the last 'Col' (Bootstrap column) created; however, there
are several exceptions:

* Head defaults as child of last HTML element
* Title defaults as child of last Head element
* Meta defaults as child of last Head element
* Link defaults as child of last Head element
* TableHeader defaults as child of last TableRow element
* TableData defaults as child of last TableRow element
* TableRow defaults as child of last TableBody element
* TableHead, TableBody, TableFooter default as child of last Table element
* etc...

Elements can also be added explicitly by instanciating the objects and appending (or prepending) them as children to 
other container elements, such as:

```javascript
const html = new strapped.HTML();

html.append(new strapped.Head());
html.append(new strapped.Body());

html.last('head').append(new strapped.Title().text('My Example Site'));
```

The library is pretty straightforward and simple, yet powerful.  Feel free to dive in the code, or guess at the operating
principles and examine the HTML output to verify if things worked as you expect.  Once this library has been fully tested,
I intend to create a complete set of documentation of the API.

## Usage Example

```javascript
const express = require('express');
const strapped = require('strapped');

/** Create express app */
const app = express();

/** Create express path for root of web server '/' */
app.get('/', (req, res, next) => {
  /** Create new page */                           
  const p = new strapped.Page();
                                 
  /** Start content */
  p.html();
  p.head();

  /** Append required Bootstrap 4 meta tags */
  p.meta().charset('utf-8');
  p.meta().name('viewport').content('width=device-width, initial-scale=1, shrink-to-fit=no');

  /** Append example title */
  p.title().text('Example Site');

  /** Append required Bootstrap 4 JavaScript */
  p.script().src('https://code.jquery.com/jquery-3.5.1.slim.js');
  p.script().src('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
  p.script().src('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
  
  /** Append required Bootstrap 4 CSS */
  p.link().rel('stylesheet').href('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');

  /** Append body */
  p.body();
                                 
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  
  /** Example headings */
  p.row();
  p.col();
  p.h1().color('primary').text('Bootstrap Heading');
  p.row();
  p.col();
  p.h2().color('secondary').text('Bootstrap Heading');
  p.row();
  p.col();
  p.h3().color('success').text('Bootstrap Heading');
  p.row();
  p.col();
  p.h4().color('danger').text('Bootstrap Heading');
  p.row();
  p.col();
  p.h5().color('warning').text('Bootstrap Heading');
  p.row();
  p.col();
  p.h6().color('info').text('Bootstrap Heading');
  p.lineBreak();
  
  /** Example alerts */
  p.row();
  p.col().size(8);
  p.alert().color('primary').dismissable(true).strong('Hey there!').text('Check this stuff out...');
  p.row();
  p.col().size(7);
  p.alert().color('secondary').dismissable(true).strong('Hey there!').text('Check this stuff out...');
  p.row();
  p.col().size(6);
  p.alert().color('success').dismissable(true).strong('Hey there!').text('Check this stuff out...');
  p.row();
  p.col().size(5);
  p.alert().color('danger').strong('Hey there!').text('Check this stuff out...');
  p.row();
  p.col().size(4);
  p.alert().color('warning').strong('Hey there!').text('Check this stuff out...');
  p.row();
  p.col().size(3);
  p.alert().color('info').strong('Hey there!').text('Check this stuff out...');
  p.lineBreak();
  
  /** Example buttons */
  p.row();
  p.col().size(8).center(true);
  p.button().id('test-button').color('primary').text('Button');
  p.badge('button').color('light').text('1');
  p.button().color('secondary').text('Button');
  p.badge('button').color('light').text('2');
  p.button().color('success').text('Button');
  p.badge('button').color('light').text('3');
  p.button().color('danger').text('Button');
  p.badge('button').color('light').text('4');
  p.button().color('warning').text('Button');
  p.badge('button').color('light').text('5');
  p.button().color('info').text('Button');
  p.badge('button').color('light').text('6');
  p.lineBreak();
  
  /** Example button toolbar with button groups including button radios and checkboxes */  
  p.row();
  p.col().size(6).center(true);
  p.buttonToolbar().addClass('justify-content-between');
  p.buttonGroup('buttonToolbar').toggle(true);
  p.buttonRadio('buttonGroup').color('primary').name('test').id('test1').text('Test 1').active(true);
  p.buttonRadio('buttonGroup').color('secondary').name('test').id('test2').text('Test 2');
  p.buttonRadio('buttonGroup').color('success').name('test').id('test3').text('Test 3');
  p.buttonGroup('buttonToolbar').toggle(true);
  p.buttonCheckbox('buttonGroup').color('danger').name('test4').id('test4').text('Test 4').active(true);
  p.buttonCheckbox('buttonGroup').color('warning').name('test5').id('test5').text('Test 5');
  p.buttonCheckbox('buttonGroup').color('info').name('test6').id('test6').text('Test 6');
  p.lineBreak();
  
  /** Example cards */
  p.row();
  p.col().size(8);
  p.cardDeck();
    
  for ( let i = 0; i < 6; i += 2 ) {
    p.card('cardDeck');
    p.cardImage().src('/images/example.svg');
    p.cardBody();
    p.h5('cardBody').addClass('card-title').text('Card Example');
    p.paragraph('cardBody').addClass('card-text').text(`Some quick example text to build on the card title and make up the bulk of the card's content`);
    p.buttonLink('cardBody').color(colors[i]).href('#').text('Go somewhere');
    p.cardFooter().text('Last updated 3 mins ago');
  }

  p.lineBreak();
  
  /** Example collapsable accordian */
  p.row();
  p.col().size(4);
  p.accordian().id('accordian');
  
  for ( let i = 0; i < 3; i++ ) {
    p.card('accordian');
    
    p.cardHeader();
    p.h5('cardHeader').addClass('mb-0');
    
    if ( i == 0 )
      p.anchor('h5').collapses(`#accordian-${i}`).text(`Accordian ${i + 1}`);
    else
      p.anchor('h5').addClass('collapsed').collapses(`#accordian-${i}`).text(`Accordian ${i + 1}`);
    
    if ( i == 0 )
      p.collapse('card').addClass('show').id(`accordian-${i}`).attr('data-parent', `#accordian`);
    else
      p.collapse('card').id(`accordian-${i}`).attr('data-parent', `#accordian`);

    p.cardBody('collapse');
    p.paragraph('cardBody').addClass('card-text').text('Some quick example text to provide sample content for this accordian collapsable card body.');
  }
  
  p.lineBreak();
  
  /** Example carousel */
  p.row();
  p.col(8).size(8);
  p.carousel().id('carousel').controls(true).indicators(true);
  p.carouselItem().src('/images/example2.svg').alt('First Slide').caption('First Slide').description('This is the first slide description');
  p.carouselItem().src('/images/example2.svg').alt('Second Slide').caption('Second Slide').description('This is the second slide description');
  p.carouselItem().src('/images/example2.svg').alt('Third Slide').caption('Third Slide').description('This is the third slide description');
  p.lineBreak();
  
  /** Examples row with split cols */
  p.row();
  p.col().size(5);
  p.row('col');
  p.col().size(6);
  p.card();
  p.cardHeader().text('Test Card');
  p.cardBody();
  p.paragraph('cardBody').addClass('card-text').text('Some quick example text to provide sample content for this column split card body.');
  p.col().size(6);
  p.card();
  p.cardHeader().text('Test Card');
  p.cardBody();
  p.paragraph('cardBody').addClass('card-text').text('Some quick example text to provide sample content for this column split card body.');
  p.col('parent').size(5);
  p.card();
  p.cardHeader().text('Test Card');
  p.cardBody();
  p.paragraph('cardBody').addClass('card-text').text('Some quick example text to provide sample content for this column split card body.');
  p.lineBreak();
  
  /** Example dropdowns */
  p.row();
  p.col().size(8).center(true);
  
  colors.forEach((color) => {
    p.button().color(color).text('Dropdown').togglesDropdown(true);
    p.dropdownMenu();
    p.h6('dropdownMenu').addClass('dropdown-header').text('Section 1');
    p.anchor('dropdownMenu').addClass(`dropdown-item`).href('#').text('Action');
    p.anchor('dropdownMenu').addClass(`dropdown-item`).href('#').text('Another Action');
    p.div('dropdownMenu').addClass('dropdown-divider');
    p.h6('dropdownMenu').addClass('dropdown-header').text('Section 2');
    p.anchor('dropdownMenu').addClass(`dropdown-item`).href('#').text('More Actions');
    p.anchor('dropdownMenu').addClass(`dropdown-item`).href('#').text('Last Action');
  });

  p.lineBreak();
  
  /** Example standard form */
  p.row();
  p.col();
  p.h2().color('primary').text('Example Standard Form');
  p.row();
  p.col().size(4).left(true);
  p.form().action('/quoting/test').method('GET');
  p.input().id('text').name('text').label('Example Text').type('text').placeholder('Example Placeholder');
  p.input().id('password').name('password').label('Example Password').type('password');
  p.row('form');
  p.input('row').cols(6).id('color').name('color').label('Example Color').type('color').addClass('p-0');
  p.input('row').cols(6).id('date').name('date').label('Example Date').type('date');
  p.row('form');
  p.input('row').cols(9).id('range').name('range').label('Example Range').type('range').max(100);
  p.col().size(3).center(true);
  p.lineBreak('col');
  p.div().id('range-out').addClass('pt-2').text('50');
  p.inputSet();
  p.input('inputSet').id('checkbox').name('checkbox').label('Example Checkbox').type('checkbox').checked(true);
  p.textarea().id('textarea').name('textarea').label('Example TextArea').placeholder('I can hold a lot of text...').rows(3);
  p.input().id('money').name('money').pattern('[0-9]+').value(0).type('text').before('$').after('.00').label('Example Input Group');
  p.row('form');
  p.col().size(3).center(true);
  p.button().color('danger').type('reset').text('Reset');
  p.col().size(3).center(true);
  p.button().color('success').type('submit').text('Submit');
  
  p.lineBreak();
  
  /** Example horizontal form */
  p.row();
  p.col();
  p.h2().color('primary').text('Example Horizontal Form').addClass('pb-2');
  p.row();
  p.col().size(4).left(true);
  p.form().action('/quoting/test').method('GET');
  p.input().id('first-name').name('first-name').label('First Name:').type('text').labelCols(4).inputCols(6).horizontal(true);
  p.input().id('last-name').name('last-name').label('Last Name:').type('text').labelCols(4).inputCols(6).horizontal(true);
  p.input().id('email').name('email').label('Email:').type('email').labelCols(4).inputCols(8).horizontal(true);
  p.input().id('tel').name('tel').label('Telephone:').type('tel').before('+1').labelCols(4).inputCols(6).horizontal(true);
  p.row('form');
  p.col().size(4).text('Sex:').addClass('col-form-label pt-0');
  p.col().size(8);
  p.inputSet('col');
  p.input('inputSet').id('male').name('sex').type('radio').label('Male');
  p.input('inputSet').id('female').name('sex').type('radio').label('Female');
  p.select().id('department').name('department').label('Department:').labelCols(4).inputCols(6).horizontal(true);
  p.option().value('engineering').text('Engineering');
  p.option().value('quality').text('Quality').selected(true);
  p.option().value('materials').text('Materials');
  p.option().value('manufacturing').text('Manufacturing');
  p.row('form');
  p.col().size(3).center(true);
  p.button().color('danger').type('reset').text('Reset');
  p.col().size(3).center(true);
  p.button().color('success').type('submit').text('Submit');
  
  p.lineBreak();
  
  /** Example inline form */
  p.row();
  p.col();
  p.h2().color('primary').text('Example Inline Form').addClass('pb-2');
  p.row();
  p.col();
  p.form().action('/quoting/test').method('GET').inline(true);
  p.input().id('username').name('username').type('text').placeholder('Username');
  p.input().id('password').name('password').type('password').placeholder('Password').addClass('mx-3');
  p.button('form').color('primary').type('submit').text('Login');
  
  p.lineBreak();
  
  /** Example jumbotron */
  p.row();
  p.col().size(8);
  p.jumbotron();
  p.h1('jumbotron').display(4).text('Example Jumbotron');
  p.paragraph('jumbotron').addClass('lead').text('This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.');
  p.horizontalRule('jumbotron');
  p.paragraph('jumbotron').text('It uses utility classes for typography and spacing to space content out within the larger container.');
  p.button('jumbotron').color('info').size('lg').text('Learn more');
  
  p.lineBreak();
  
  /** Example progress bars */
  p.row();
  p.col().size(8);
  p.progressBar().color('primary').percent(10);
  p.lineBreak('col');
  p.progressBar().color('success').percent(25);
  p.lineBreak('col');
  p.progressBar().color('info').striped(true).percent(50);
  p.lineBreak('col');
  p.progressBar().color('warning').striped(true).percent(75);
  p.lineBreak('col');
  p.progressBar().color('danger').striped(true).percent(100).animated(true);
  
  p.lineBreak();
  
  /** Example modal */
  p.row();
  p.col();
  p.button().color('danger').attr('data-toggle', 'modal').attr('data-target', '#modal').text('Launch Modal');
  p.modal().id('modal').middle(true);
  p.modalHeader();
  p.h5('modalHeader').addClass(`modal-title`).text('Hello Modal');
  p.button('modalHeader').addClass('close').attr('data-dismiss', 'modal').text('&times;');
  p.modalBody().text('This is an example modal box that might be used to confirm changes, or provide a sub-form for a main form.');
  p.modalFooter();
  p.button('modalFooter').color('secondary').attr('data-dismiss', 'modal').text('Close');
  p.button('modalFooter').color('primary').text('Save Changes');
  
  p.lineBreak();
  
  /** Example JavaScript handlers (these are automatically wrapped in a $( document ).ready() block) */
  p.script().append(() => {
    $( '#test-button' ).click(() => {
      alert('Test!');
    });

    $( '#range' ).on('input', () => {
      $( '#range-out' ).html($( '#range' ).val());
    });
  });
  
  res.send(p.render());
});
  
/** Start express listening */
app.listen(3000, () => {
  console.log(`Express is listening on port 3000!`);
});

```
