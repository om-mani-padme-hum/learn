const express = require(`express`);
const ezhtml = require(`./index`);

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
