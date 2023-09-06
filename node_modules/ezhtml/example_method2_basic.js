const express = require('express');
const ezhtml = require(`./index`);

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