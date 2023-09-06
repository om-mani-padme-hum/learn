/**
 * @class ezhtml.Title
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML title elements.
 *
 * @signature new Title([data])
 * @added v0.1.0
 * @param data Object
 * @returns Title
 * @description Returns a new [Title] instance, initializing with any key/value pairs provided in `data` with keys 
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
  className: 'Title',
  tag: 'title',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config
};

/** Create the class */
const Title = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Title = Title;
module.exports.config = config;
