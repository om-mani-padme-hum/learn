/**
 * @class ezhtml.ListItem
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML list item elements.
 *
 * @signature new ListItem([data])
 * @added v0.1.0
 * @param data Object
 * @returns ListItem
 * @description Returns a new [ListItem] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature value()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the value of the list item number that will be incremented from here on, only for list items in 
 * [OrderedList] elements.
 *
 * @signature value(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the value of the list item number that will be incremented from here on, only for list items in 
 * [OrderedList] elements.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'ListItem',
  tag: 'li',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'value', type: 'int' }
  ]
};

/** Create the class */
const ListItem = ezelement.createClass(config);

/** Export the class and class config */
module.exports.ListItem = ListItem;
module.exports.config = config;
