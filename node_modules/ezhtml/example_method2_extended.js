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
