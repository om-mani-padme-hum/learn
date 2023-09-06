/**
 * @class ezhtml.Subscript
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML subscript elements.
 *
 * @signature new Subscript([data])
 * @added v0.1.0
 * @param data Object
 * @returns Subscript
 * @description Returns a new [Subscript] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
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
  className: 'Subscript',
  tag: 'sub',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config
};

/** Create the class */
const Subscript = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Subscript = Subscript;
module.exports.config = config;
