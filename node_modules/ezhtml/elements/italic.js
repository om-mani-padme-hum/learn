/**
 * @class ezhtml.Italic
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML italic elements.
 *
 * @signature new Italic([data])
 * @added v0.1.0
 * @param data Object
 * @returns Italic
 * @description Returns a new [Italic] instance, initializing with any key/value pairs provided in `data` with keys 
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
  className: 'Italic',
  tag: 'i',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config
};

/** Create the class */
const Italic = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Italic = Italic;
module.exports.config = config;
