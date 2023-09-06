/**
 * @class ezhtml.SVG
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML SVG elements.
 *
 * @signature new SVG([data])
 * @added v0.1.0
 * @param data Object
 * @returns SVG
 * @description Returns a new [SVG] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature height()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the height of the SVG in pixels.
 *
 * @signature height(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the height of the SVG in pixels.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature width()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the width of the SVG in pixels.
 *
 * @signature width(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the width of the SVG in pixels.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'SVG',
  tag: 'svg',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'height', type: 'int' },
    { name: 'width', type: 'int' }
  ]
};

/** Create the class */
const SVG = ezelement.createClass(config);

/** Export the class and class config */
module.exports.SVG = SVG;
module.exports.config = config;
