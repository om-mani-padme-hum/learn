/**
 * @class ezhtml.Column
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML column elements.
 *
 * @signature new Column([data])
 * @added v0.1.0
 * @param data Object
 * @returns Column
 * @description Returns a new [Column] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature span()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the number of columns this column spans.
 *
 * @signature span(columns)
 * @added v0.1.0
 * @updated v0.2.0
 * @param columns number
 * @returns this
 * @throws TypeError if `columns` is not a valid [number]
 * @description Sets the number of columns this column spans.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Column',
  tag: 'col',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'span', type: 'int' }
  ]
};

/** Create the class */
const Column = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Column = Column;
module.exports.config = config;
