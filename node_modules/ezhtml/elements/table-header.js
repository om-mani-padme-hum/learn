/**
 * @class ezhtml.TableHeader
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table header elements.
 *
 * @signature new TableHeader([data])
 * @added v0.1.0
 * @param data Object
 * @returns TableHeader
 * @description Returns a new [TableHeader] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature abbr()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets an abbreviation for the header.
 *
 * @signature abbr(elementId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param elementId string
 * @returns this
 * @throws TypeError if `elementId` is not a valid [string]
 * @description Sets an abbreviation for the header.
 *
 * @signature colspan()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the number of columns the header cell should span.
 *
 * @signature colspan(span)
 * @added v0.1.0
 * @updated v0.2.0
 * @param span number
 * @returns this
 * @throws TypeError if `span` is not a valid [number]
 * @description Sets the number of columns the header cell should span.
 *
 * @signature headers()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a list of ids of one or more other header cells this header cell is related to.
 *
 * @signature headers(headers)
 * @added v0.1.0
 * @updated v0.2.0
 * @param headers string
 * @returns this
 * @throws TypeError if `headers` is not a valid [string]
 * @description Sets a list of ids of one or more other header cells this header cell is related to.
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
 * @description Gets the number of rows the header cell should span.
 *
 * @signature rowspan(span)
 * @added v0.1.0
 * @updated v0.2.0
 * @param span number
 * @returns this
 * @throws TypeError if `span` is not a valid [number]
 * @description Sets the number of rows the header cell should span.
 *
 * @signature scope()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the type of element this header is being used to represent, can be `col`, `colgroup`, `row`, or `rowgroup`.
 *
 * @signature scope(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the type of element this header is being used to represent, can be `col`, `colgroup`, `row`, or `rowgroup`.
 *
 * @signature sorted()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the sort direction of the column, can be `reversed`, `number`, `reversed number`, or `number reversed`.
 *
 * @signature sorted(elementId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param elementId string
 * @returns this
 * @throws TypeError if `elementId` is not a valid [string]
 * @description Sets the sort direction of the column, can be `reversed`, `number`, `reversed number`, or `number reversed`.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'TableHeader',
  tag: 'th',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'abbr', type: 'string' },
    { name: 'colspan', type: 'int' },
    { name: 'headers', type: 'string' },
    { name: 'rowspan', type: 'int' },
    { name: 'scope', type: 'string', default: 'col' },
    { name: 'sorted', type: 'string' }
  ]
};

/** Create the class */
const TableHeader = ezelement.createClass(config);

/** Export the class and class config */
module.exports.TableHeader = TableHeader;
module.exports.config = config;
