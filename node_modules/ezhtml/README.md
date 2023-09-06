# EZ HTML v2.0.2

This Node.js module is designed to be a simple API for programatically rendering HTML 5
web pages.  It outputs clean, formatted code, making it easy to troubleshoot errors and verify
the rendered output.  The module includes classes for each HTML 5 element type and also a `Page`
class that has shorthand methods for each HTML element that can be called sequentially, nesting
elements automatically or explicitly by passing an argument to the method, for rapid HTML
development.

* [Installation](#installation)
* [Current Status](#current-status)
* [Examples](#basic-example---method-1)
* [Usage](#usage)
* [The Page Class](#the-page-class)
* [Method Signatures Common to All Elements](#method-signatures-common-to-all-elements)
* [Method Signatures Common to All Container Elements](#method-signatures-common-to-all-container-elements)
* [Elements](#elements)
* [Contributing](#contributing)
* [License](#license)

## Installation

`npm install ezhtml`

## Current Status

Fully functional, and code base now reduced by over 65% due to conversion to 
[EZ Objects](https://github.com/om-mani-padme-hum/ezobjects).  All HTML 5 elements and 
attributes have been implemented except those noted below.  There are no known bugs currently, 
but if found they can be reported by opening an issue against the GitHub repository or by
initiating a pull request with the fix.

**Note:** Screen reader support is not currently within the scope of this library,
but could be added fairly easily if needed.  Same thing with ruby annotations.

## Basic Example - Method 1

```javascript
const express = require('express');
const ezhtml = require(`ezhtml`);

const app = express();

app.get(`/`, (req, res, next) => {
  /** Create new 'page', automatically includes <html>, <head>, and <body> tags */
  const p = new ezhtml.Page();

  /** Append title element to head element - knows to auto-nest under <head> */
  p.title().text(`My Basic Example`);

  /** Append rank 2 heading to body, knows to auto-nest under last <div> else <body> */
  p.h2().text('My Example EZHTML Page');

  /** Append paragraph to body, knows to auto-nest under last <div> else <body> */
  p.paragraph().addClass('my-class').text('This is the first paragraph of my page.');

  /** Render HTML and send as response */
  res.send(p.render());
});

app.listen(8080, () => {
  console.log(`Web server up and running on port 8080!`);
});
```

## Expected Output

```html
<html>
  <head>
    <title>
      My Basic Example
    </title>
  </head>
  <body>
    <h2>
      My Example EZHTML Page
    </h2>
    <p class='my-class'>
      This is the first paragraph of my page.
    </p>
  </body>
</html>
```

## Basic Example - Method 2

```javascript
const express = require('express');
const ezhtml = require(`ezhtml`);

const app = express();

app.get(`/`, (req, res, next) => {
  /** Create new HTML element */                           
  const html = new ezhtml.HTML();

  /** Create head element */
  const head = new ezhtml.Head();

  /** Append title element to head element */
  head.append(new ezhtml.Title().text(`My Basic Example`));

  /** Append head element to HTML element */
  html.append(head);

  /** Create body element */
  const body = new ezhtml.Body();

  /** Append body element to HTML element */
  html.append(body);

  /** Append rank 2 heading to body */
  body.append(new ezhtml.H2().text('My Example EZHTML Page'));

  /** Append paragraph to body */
  body.append(new ezhtml.Paragraph().addClass('my-class').text('This is the first paragraph of my page.'));

  /** Render HTML and send as response */
  res.send(html.render());
});

app.listen(8080, () => {
  console.log(`Web server up and running on port 8080!`);
});
```

## Expected Output

Same as Method 1, see above.

## Expanded Example - Method 1

```javascript
const express = require(`express`);
const ezhtml = require(`ezhtml`);

const app = express();

app.get(`/`, (req, res, next) => {
  const p = new ezhtml.Page();
  
  /** Automatically added to <head> */
  p.title().text(`My Example Page`);
  p.style().text(`p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }`);
  p.script().src(`https://code.jquery.com/jquery-3.3.1.js`);

  /** Automatically added to <body> */
  p.div().style(`width: 100%; text-align: center;`);

  /** Explicitly added to last <div> else <body> */
  p.h2(`div`).style(`color: blue;`).text(`My Example Page`);

  /** Explicitly added to <body> */
  p.div(`body`).style(`position: relative; width: 50%; left: 25%; text-align: center;`);

  /** Automatically added to last <div> else <body> */
  p.orderedList();
  
  /** Automatically added to last <ol> or <ul> */
  p.listItem().text(`Ordered List Item One`);
  p.listItem().text(`Ordered List Item Two`);
  p.listItem().text(`Ordered List Item Three`);
  
  /** Automatically added to last <div> else <body> */
  p.lineBreak();

  /** Automatially added to last <fieldset>, <form>, or <div> else <body> */
  p.select().name(`mySelect`);

  /** Automatically added to last <select> */
  p.optionGroup().label(`Primary Options`);

  /** Automatically added to last <optgroup>, <select>, or <dl> */
  p.option().value(1).text(`Primary Option 1`);
  p.option().value(2).text(`Primary Option 2`);
  p.option().value(3).text(`Primary Option 3`);

  /** Automatically added to last <select> */
  p.optionGroup().label(`Secondary Options`);

  /** Automatically added to last <optgroup>, <select>, or <dl> */
  p.option().value(1).text(`Secondary Option 1`);
  p.option().value(2).text(`Secondary Option 2`);
  p.option().value(3).text(`Secondary Option 3`);
  
  /** Automatically added to last <div> else <body> */
  p.lineBreak();

  /** Automatically added to last <div> else <body> */
  p.paragraph().addClass(`myClass`).text(`This is my example paragraph in bold Arial font.`);
  
  /** Automatically added to last <div> else <body> */
  p.lineBreak();
  
  /** Automatically added to last <div> else <body> */
  p.picture();
  
  /** Explicitly add to last <picture> */
  p.image(`picture`).width(100).height(100).src(`/images/example.png`);
  
  /** Automatically added to last <div> else <body> */
  p.lineBreak();

  /** Automatically added to last <div> else <body> */
  p.table();
  
  /** Automatically added to last <table> */
  p.tableHead();
  
  /** Automatically added to last <thead>, <tbody>, or <tfoot> */
  p.tableRow();

  /** Automatically added to last <tr> */
  p.tableHeader().text(`Header 1`);
  p.tableHeader().text(`Header 2`);
  p.tableHeader().text(`Header 3`);

  /** Automatically added to last <table> */
  p.tableBody();
  
  /** Automatically added to last <thead>, <tbody>, or <tfoot> */
  p.tableRow();

  /** Automatically added to last <tr> */
  p.tableData().text(`Row 1 Col 1 Data`);
  p.tableData().text(`Row 1 Col 2 Data`);
  p.tableData().text(`Row 1 Col 3 Data`);

  /** Automatically added to last <thead>, <tbody>, or <tfoot> */
  p.tableRow();
  
  /** Automatically added to last <tr> */
  p.tableData().text(`Row 2 Col 1 Data`);
  p.tableData().text(`Row 2 Col 2 Data`);
  p.tableData().text(`Row 2 Col 3 Data`);

  /** Automatically added to last <table> */
  p.tableFooter();
  
  /** Automatically added to last <thead>, <tbody>, or <tfoot> */
  p.tableRow();

  /** Automatically added to last <tr> */
  p.tableData().text(`Footer 1`);
  p.tableData().text(`Footer 2`);
  p.tableData().text(`Footer 3`);

  /** Render HTML and send as response */
  res.send(p.render());
});

app.listen(8080, () => {
  console.log(`Web server up and running on port 8080!`);
});
```

## Expected Output

```html
<html>
  <head>
    <title>
      My Example Page
    </title>
    <style>
      p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }
    </style>
    <script src='https://code.jquery.com/jquery-3.3.1.js'>
    </script>
  </head>
  <body>
    <div style='width: 100%; text-align: center;'>
      <h2 style='color: blue;'>
        My Example Page
      </h2>
    </div>
    <div style='position: relative; width: 50%; left: 25%; text-align: center;'>
      <ol>
        <li>
          Ordered List Item One
        </li>
        <li>
          Ordered List Item Two
        </li>
        <li>
          Ordered List Item Three
        </li>
      </ol>
      <br>
      <select name='mySelect'>
        <optgroup label='Primary Options'>
          <option value='1'>
            Primary Option 1
          </option>
          <option value='2'>
            Primary Option 2
          </option>
          <option value='3'>
            Primary Option 3
          </option>
        </optgroup>
        <optgroup label='Secondary Options'>
          <option value='1'>
            Secondary Option 1
          </option>
          <option value='2'>
            Secondary Option 2
          </option>
          <option value='3'>
            Secondary Option 3
          </option>
        </optgroup>
      </select>
      <br>
      <p class='myClass'>
        This is my example paragraph in bold Arial font.
      </p>
      <br>
      <picture>
        <img height=100 src='/images/example.png' width=100>
      </picture>
      <br>
      <table>
        <thead>
          <tr>
            <th scope='col'>
              Header 1
            </th>
            <th scope='col'>
              Header 2
            </th>
            <th scope='col'>
              Header 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Row 1 Col 1 Data
            </td>
            <td>
              Row 1 Col 2 Data
            </td>
            <td>
              Row 1 Col 3 Data
            </td>
          </tr>
          <tr>
            <td>
              Row 2 Col 1 Data
            </td>
            <td>
              Row 2 Col 2 Data
            </td>
            <td>
              Row 2 Col 3 Data
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              Footer 1
            </td>
            <td>
              Footer 2
            </td>
            <td>
              Footer 3
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </body>
</html>
```

## Expanded Example - Method 2

```javascript
const express = require(`express`);
const ezhtml = require(`ezhtml`);

const app = express();

app.get(`/`, (req, res, next) => {
  const html = new ezhtml.HTML();
  const head = new ezhtml.Head();

  html.append(head);
  head.append(new ezhtml.Title().text(`My Example Page`));
  head.append(new ezhtml.Style().text(`p.myClass { font-weight: bold; font-family: Arial, helvetica, sans-serif; }`));
  head.append(new ezhtml.Script().src(`https://code.jquery.com/jquery-3.3.1.js`));
  const body = new ezhtml.Body();

  html.append(body);

  const div1 = new ezhtml.Div().style(`width: 100%; text-align: center;`);

  body.append(div1);

  const h2 = new ezhtml.H2({
    style: `color: blue;`
  });

  div1.append(h2.text(`My Example Page`));

  const div2 = new ezhtml.Div().style(`position: relative; width: 50%; left: 25%; text-align: center;`);

  body.append(div2);

  const orderedList = new ezhtml.OrderedList();

  div2.append(orderedList);

  orderedList.append(new ezhtml.ListItem().text(`Ordered List Item One`));
  orderedList.append(new ezhtml.ListItem().text(`Ordered List Item Two`));
  orderedList.append(new ezhtml.ListItem().text(`Ordered List Item Three`));
  div2.append(new ezhtml.LineBreak());

  const select = new ezhtml.Select().name(`mySelect`);

  div2.append(select);

  const optionGroup1 = new ezhtml.OptionGroup().label(`Primary Options`);

  select.append(optionGroup1);

  optionGroup1.append(new ezhtml.Option().value(1).text(`Primary Option 1`));
  optionGroup1.append(new ezhtml.Option().value(2).text(`Primary Option 2`));
  optionGroup1.append(new ezhtml.Option().value(3).text(`Primary Option 3`));

  const optionGroup2 = new ezhtml.OptionGroup().label(`Secondary Options`);

  select.append(optionGroup2);

  optionGroup2.append(new ezhtml.Option().value(1).text(`Secondary Option 1`));
  optionGroup2.append(new ezhtml.Option().value(2).text(`Secondary Option 2`));
  optionGroup2.append(new ezhtml.Option().value(3).text(`Secondary Option 3`));

  div2.append(new ezhtml.LineBreak());

  div2.append(new ezhtml.Paragraph().addClass(`myClass`).text(`This is my example paragraph in bold Arial font.`));
  div2.append(new ezhtml.LineBreak());

  const picture = new ezhtml.Picture();

  div2.append(picture);
  picture.append(new ezhtml.Image().width(100).height(100).src(`/images/example.png`));
  div2.append(new ezhtml.LineBreak());

  const table = new ezhtml.Table();

  div2.append(table);

  const tableHead = new ezhtml.TableHead();

  table.append(tableHead);

  const tableHeadRow = new ezhtml.TableRow();

  tableHead.append(tableHeadRow);

  tableHeadRow.append(new ezhtml.TableHeader().text(`Header 1`));
  tableHeadRow.append(new ezhtml.TableHeader().text(`Header 2`));
  tableHeadRow.append(new ezhtml.TableHeader().text(`Header 3`));

  const tableBody = new ezhtml.TableBody();

  table.append(tableBody);

  const tableBodyRow1 = new ezhtml.TableRow();

  tableBody.append(tableBodyRow1);

  tableBodyRow1.append(new ezhtml.TableData().text(`Row 1 Col 1 Data`));
  tableBodyRow1.append(new ezhtml.TableData().text(`Row 1 Col 2 Data`));
  tableBodyRow1.append(new ezhtml.TableData().text(`Row 1 Col 3 Data`));

  const tableBodyRow2 = new ezhtml.TableRow();

  tableBody.append(tableBodyRow2);

  tableBodyRow2.append(new ezhtml.TableData().text(`Row 2 Col 1 Data`));
  tableBodyRow2.append(new ezhtml.TableData().text(`Row 2 Col 2 Data`));
  tableBodyRow2.append(new ezhtml.TableData().text(`Row 2 Col 3 Data`));

  const tableFooter = new ezhtml.TableFooter();

  table.append(tableFooter);

  const tableFooterRow = new ezhtml.TableRow();

  tableFooter.append(tableFooterRow);

  tableFooterRow.append(new ezhtml.TableData().text(`Footer 1`));
  tableFooterRow.append(new ezhtml.TableData().text(`Footer 2`));
  tableFooterRow.append(new ezhtml.TableData().text(`Footer 3`));

  res.send(html.render());
});

app.listen(8080, () => {
  console.log(`Web server up and running on port 8080!`);
});
```

## Expected Output

Same as Method 1, see above.

## Usage

Each HTML 5 element is represented by an ES6 class and is accessible as a property of this
module.  Each class has getter/setter methods corresponding to the various attributes
defined for the element in the HTML 5 standard.  In addition, custom attributes can be
set and retrieved using the `attr(name)` getter and `attr(name, value)` setter.  Elements 
that are 'containers', i.e. they have an open and close tag, also have append() and prepend() 
methods you can use to add other child elements.  Every element has addClass() and
removeClass() methods which make the controlling of CSS and DOM selection easy.  A full list
of elements and their HTML 5 properties is shown below:

## The Page Class

The page class contains helper methods to instanciate and automatically or explicitly nest a
new EZ HTML element under your page container.  See the Method 1 examples above and page.js
for more detail about the method names and automatic nesting of each element.  More complete
documentation will be added soon.

## Method Signatures Common to All Elements

### Element.addClass(list)

* **Parameter:** list - `string`
* **Description:** Add the class, or space delimeted list of classes, in `list` to the element.

### Element.attr(name)

* **Parameter:** name - `string`
* **Description:** Get the value of the attribute named `name`.

### Element.attr(name, value)

* **Parameter:** name - `string`
* **Parameter:** value - `string`|`number`
* **Description:** Set the the attribute named `name` to `value`.

### Element.id()

* **Description:** Get the value of the element's id attribute.

### Element.id(value)

* **Parameter:** value - `string`|`number`
* **Description:** Set the the element's id attribute to `value`.

### Element.name()
* **Description:** Get the value of the element's name attribute.

### Element.name(value)
* **Parameter:** value - `string`|`number`
* **Description:** Set the the element's name attribute to `value`.

### Element.removeClass(class)

* **Description:** class - `string`
* **Description:** Remove any class named `class` from the element.

### Element.parent()

* **Description:** Get the parent element of this element (or `null` if none exists).

### Element.render(\[indent])

* **Parameter:** indent - `number` - (optional) Defaults to zero
* **Description:** Get the rendered HTML of this element and all of its children, prepending
all lines with optional `indent` number of spaces.

### Element.tag()

* **Description:** Get the HTML tag of this element.

## Method Signatures Common to All Container Elements 

This includes all elements that have closing tags, e.g. `</element>`.

### ContainerElement.append(element)

* **Parameter:** element - `mixed` Any valid EZ HTML element
* **Description:** Append `element` to the end of this element's array of children.

### ContainerElement.prepend(element)

* **Parameter:** element - `mixed` Any valid EZ HTML element
* **Description:** Prepend `element` to the beginning of this element's array of children.

### ContainerElement.text(content)

* **Parameter:** content - `string`
* **Description:** A shortcut method for appending plain text `content` to the end of this element's 
children array.  This is a shortcut for append(new ezhtml.Text().text(content)).

## Elements

Below are the element classes included in the library along with each of their attributes that will 
each have a getter of the form property(), and a setter of the form property(value).

### new ezhtml.Abbreviation()
* None

### new ezhtml.Address()
* None

### new ezhtml.Anchor()
* **download** - `string`
* **href** - `string`
* **hreflang** - `string`
* **media** - `string`
* **rel** - `string`
* **target** - `string`
* **type** - `string`

### new ezhtml.Area()
* **alt** - `string`
* **coords** - `string`
* **download** - `string`
* **href** - `string`
* **hreflang** - `string`
* **media** - `string`
* **shape** - `string`
* **target** - `string`
* **type** - `string`

### new ezhtml.Article()
* None

### new ezhtml.Aside()
* None

### new ezhtml.Audio()
* **autoplay** - `boolean`
* **controls** - `boolean`
* **loop** - `boolean`
* **muted** - `boolean`
* **preload** - `string`
* **src** `string`

### new ezhtml.Base()
* **href** - `string`
* **target** - `string`

### new ezhtml.BidirectionalIsolation()
* None

### new ezhtml.BidirectionalOverride()
* **dir** - `string` - Can be `ltr` or `rtl`

### new ezhtml.Blockquote()
* None

### new ezhtml.Body()
* None

### new ezhtml.Bold()
* None

### new ezhtml.Button()
* **autofocus** - `boolean`
* **disabled** - `boolean`
* **form** - `string`
* **formaction** - `string`
* **formenctype** - `string`
* **formmethod** - `string`
* **formnovalidate** - `boolean`
* **formtarget** - `string`
* **name** - `string`
* **type** - `string`
* **value** - `string`

### new ezhtml.Canvas()
* **height** - `number`
* **width** - `number`

### new ezhtml.Caption()
* None

### new ezhtml.Citation()
* None

### new ezhtml.Code()
* None

### new ezhtml.ColumnGroup()
* **span** - `number`

### new ezhtml.Column()
* **span** - `number`

### new ezhtml.DataList()
* **value** - `string`

### new ezhtml.DataList()
* None

### new ezhtml.DefinitionDescription()
* None

### new ezhtml.DefinitionList()
* None

### new ezhtml.DefinitionTerm()
* None

### new ezhtml.Definition()
* None

### new ezhtml.Deleted()
* **cite** - `string`
* **datetime** - `string`

### new ezhtml.Details()
* **open** - `boolean`

### new ezhtml.Dialog()
* **open** - `boolean`

### new ezhtml.Div()
* None

### new ezhtml.Embed()
* **height** - `number`
* **src** - `string`
* **type** - `string`
* **width** - `number`

### new ezhtml.Emphasized()
* None

### new ezhtml.FieldSet()
* **disabled** - `boolean`
* **form** - `string`
* **name** - `string`

### new ezhtml.FigureCaption()
* None

### new ezhtml.Figure()
* None

### new ezhtml.Footer()
* None

### new ezhtml.Form()
* **acceptCharset** - `string`
* **action** - `string`
* **autocomplete** - `string`
* **enctype** - `string`
* **method** - `string`
* **name** - `string`
* **novalidate** - `boolean`
* **target** - `string`

### new ezhtml.Head()
* None

### new ezhtml.Header()
* None

### new ezhtml.HeadingGroup()
* None

### new ezhtml.H1()
* None

### new ezhtml.H2()
* None

### new ezhtml.H3()
* None

### new ezhtml.H4()
* None

### new ezhtml.H5()
* None

### new ezhtml.H6()
* None

### new ezhtml.HorizontalRule()
* None

### new ezhtml.HTML()
* None

### new ezhtml.Image()
* **alt** - `string`
* **crossorigin** - `string`
* **height** - `number`
* **ismap** - `boolean`
* **longdesc** - `string`
* **sizes** - `string`
* **src** - `string`
* **srcset** - `string`
* **usemap** - `string`
* **width** - `number`

### new ezhtml.Input()
* **accept** - `string`
* **alt** - `string`
* **autocomplete** - `string`
* **autofocus** - `boolean`
* **checked** - `boolean`
* **dirname** - `string`
* **disabled** - `boolean`
* **form** - `string`
* **formaction** - `string`
* **formenctype** - `string`
* **formmethod** - `string`
* **formnovalidate** - `boolean`
* **formtarget** - `string`
* **height** - `string`
* **list** - `string`
* **max** - `string`
* **maxlength** - `string`
* **min** - `string`
* **multiple** - `boolean`
* **name** - `string`
* **pattern** - `string`
* **placeholder** - `string`
* **readonly** - `boolean`
* **required** - `boolean`
* **size** - `number`
* **src** - `string`
* **step** - `string`
* **type** - `string` - Defaults to `text`
* **value** - `string`
* **width** - `string`

### new ezhtml.Inserted()
* **cite** - `string`
* **datetime** - `string`
    
### new ezhtml.Italic()
* None

### new ezhtml.Keyboard()
* None

### new ezhtml.Label()
* **for** - `string`
* **form** - `string`
    
### new ezhtml.Legend()
* None

### new ezhtml.LineBreak()
* None

### new ezhtml.Link()
* **crossorigin** - `string`
* **href** - `string`
* **hreflang** - `string`
* **media** - `string`
* **rel** - `string`
* **sizes** - `string`
* **type** - `string`
    
### new ezhtml.ListItem()
* **value** - `number`
    
### new ezhtml.Main()
* None

### new ezhtml.MapElement()
* **name** - `string`
    
### new ezhtml.Mark()
* None
    
### new ezhtml.MenuItem()
* **checked** - `boolean`
* **command** - `string`
* **default** - `boolean`
* **disabled** - `boolean`
* **icon** - `string`
* **label** - `string`
* **radiogroup** - `string`
* **type** - `string`
    
### new ezhtml.Menu()
* **label** - `string`
* **type** - `string`
    
### new ezhtml.Meta()
* **charset** - `string`
* **content** - `string`
* **http-equiv** - `string`
* **name** - `string`
    
### new ezhtml.Meter()
* **form** - `string`
* **high** - `number`
* **low** - `number`
* **max** - `number`
* **min** - `number`
* **optimum** - `number`
* **value** - `number`
    
### new ezhtml.MultimediaObject()
* **data** - `string`
* **form** - `string`
* **height** - `number`
* **name** - `string`
* **type** - `string`
* **usemap** - `boolean`
* **width** - `number`
    
### new ezhtml.Nav()
* None

### new ezhtml.NoScript()
* None

### new ezhtml.OptionGroup()
* **disabled** - `boolean`
* **label** - `string`
    
### new ezhtml.Option()
* **disabled** - `boolean`
* **label** - `string`
* **selected** - `boolean`
* **value** - `string`
    
### new ezhtml.OrderedList()
* **start** - `number`
* **reversed** - `boolean`
* **type** - `string`
    
### new ezhtml.Output()
* **for** - `string`
* **form** - `string`
* **name** - `string`
    
### new ezhtml.Paragraph()
* None

### new ezhtml.Param()
* **name** - `string`
* **value** - `string`
    
### new ezhtml.Picture()
* None

### new ezhtml.PreformattedText()
* None

### new ezhtml.Progress()
* **max** - `number`
* **value** - `number`
    
### new ezhtml.Quotation()
* **cite** - `string`
    
### new ezhtml.Sample()
* None

### new ezhtml.Script()
* **async** - `boolean`
* **charset** - `string`
* **defer** - `boolean`
* **src** - `string`
* **type** - `string`
    
### new ezhtml.Section()
* None

### new ezhtml.Select()
* **autofocus** - `boolean`
* **disabled** - `boolean`
* **form** - `string`
* **multiple** - `boolean`
* **name** - `string`
* **required** - `boolean`
* **size** - `string`
    
### new ezhtml.Small()
* None

### new ezhtml.Source()
* **media** - `string`
* **sizes** - `string`
* **src** - `string`
* **srcset** - `string`
* **type** - `string`

### new ezhtml.Span()
* None

### new ezhtml.Strikethrough()
* None

### new ezhtml.Strong()
* None

### new ezhtml.Style()
* **media** - `string`
* **scoped** - `boolean`
* **type** - `string`
    
### new ezhtml.Subscript()
* None

### new ezhtml.Summary()
* None

### new ezhtml.Superscript()
* None

### new ezhtml.SVG()
* **height** - `number`
* **width** - `number`
    
### new ezhtml.TableBody()
* None

### new ezhtml.TableData()
* **colspan** - `number`
* **headers** - `string`
* **rowspan** - `number`

### new ezhtml.TableFooter()
* None

### new ezhtml.TableHead()
* None

### new ezhtml.TableHeader()
* **abbr** - `string`
* **colspan** - `number`
* **headers** - `string`
* **rowspan** - `number`
* **scope** - `string`
* **sorted** - `string`

### new ezhtml.TableRow()
* None

### new ezhtml.Table()
* None

### new ezhtml.Template()
* None

### new ezhtml.TextArea()
* **autofocus** - `boolean`
* **cols** - `number`
* **dirname** - `string`
* **disabled** - `boolean`
* **form** - `string`
* **maxlength** - `number`
* **name** - `string`
* **placeholder** - `string`
* **readonly** - `boolean`
* **required** - `boolean`
* **rows** - `number`
* **wrap** - `string`
    
### new ezhtml.Text()
* **text** - `string`

### new ezhtml.Time()
* **datetime** - `string`
    
### new ezhtml.Title()
* None

### new ezhtml.Track()
* **default** - `boolean`
* **kind** - `string`
* **sizes** - `string`
* **src** - `string`
* **srclang** - `string`
    
### new ezhtml.Underline()
* None

### new ezhtml.UnorderedList()
* None

### new ezhtml.Variable()
* None

### new ezhtml.Video()
* **autoplay** - `boolean`
* **controls** - `boolean`
* **height** - `number`
* **loop** - `boolean`
* **muted** - `boolean`
* **poster** - `string`
* **preload** - `string`
* **src** - `string`
* **width** - `number`
    
### new ezhtml.WordBreakOpportunity()
* None

## Contributing

Please open an issue on the GitHub repository if you find any broken functionality or other bugs/errors.  Feature requests
will also be accepted, but are not guaranteed to be implemented.

## License

MIT
