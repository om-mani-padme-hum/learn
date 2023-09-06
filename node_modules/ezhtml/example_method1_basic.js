const express = require('express');
const ezhtml = require(`./index`);

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