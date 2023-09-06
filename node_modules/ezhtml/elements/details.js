/**
 * @class ezhtml.Details
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML details elements.
 *
 * @signature new Details([data])
 * @added v0.1.0
 * @param data Object
 * @returns Details
 * @description Returns a new [Details] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature open()
 * @added v0.1.0
 * @returns boolean
 * @description Gets a boolean indicating whether the the details should be open when the page loads.
 *
 * @signature open(flag)
 * @added v0.1.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the details should be open when the page loads.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Details',
  tag: 'details',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'open', type: 'boolean' }
  ]
};

/** Create the class */
const Details = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Details = Details;
module.exports.config = config;
