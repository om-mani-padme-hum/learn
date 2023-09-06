/**
 * @class ezhtml.PreformattedText
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML preformatted text elements.
 *
 * @signature new PreformattedText([data])
 * @added v0.1.0
 * @param data Object
 * @returns PreformattedText
 * @description Returns a new [PreformattedText] instance, initializing with any key/value pairs provided in `data` with keys 
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
  className: 'PreformattedText',
  tag: 'pre',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config
};

/** Create the class */
const PreformattedText = ezelement.createClass(config);

/** Export the class and class config */
module.exports.PreformattedText = PreformattedText;
module.exports.config = config;
