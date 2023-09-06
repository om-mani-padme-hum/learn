/**
 * @class ezhtml.Data
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML data list elements.
 *
 * @signature new Data([data])
 * @added v0.1.0
 * @param data Object
 * @returns Data
 * @description Returns a new [Data] instance, initializing with any key/value pairs provided in `data` with keys 
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
  className: 'Data',
  tag: 'data',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'value', type: 'string' }
  ]
};

/** Create the class */
const Data = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Data = Data;
module.exports.config = config;
