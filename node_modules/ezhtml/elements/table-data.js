/**
 * @class ezhtml.TableData
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table data elements.
 *
 * @signature new TableData([data])
 * @added v0.1.0
 * @param data Object
 * @returns TableData
 * @description Returns a new [TableData] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature colspan()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the number of columns the cell should span.
 *
 * @signature colspan(span)
 * @added v0.1.0
 * @updated v0.2.0
 * @param span number
 * @returns this
 * @throws TypeError if `span` is not a valid [number]
 * @description Sets the number of columns the cell should span.
 *
 * @signature headers()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets one or more header cells a cell is related to.
 *
 * @signature headers(headers)
 * @added v0.1.0
 * @updated v0.2.0
 * @param headers string
 * @returns this
 * @throws TypeError if `headers` is not a valid [string]
 * @description Sets one or more header cells a cell is related to.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature rowspan()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the number of rows the cell should span.
 *
 * @signature rowspan(span)
 * @added v0.1.0
 * @updated v0.2.0
 * @param span number
 * @returns this
 * @throws TypeError if `span` is not a valid [number]
 * @description Sets the number of rows the cell should span.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'TableData',
  tag: 'td',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'colspan', type: 'int' },
    { name: 'headers', type: 'string' },
    { name: 'rowspan', type: 'int' }
  ]
};

/** Create the class */
const TableData = ezelement.createClass(config);

/** Export the class and class config */
module.exports.TableData = TableData;
module.exports.config = config;
