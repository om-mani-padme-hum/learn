/**
 * @class ezhtml.MapElement
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML map elements.
 *
 * @signature new MapElement([data])
 * @added v0.1.0
 * @param data Object
 * @returns MapElement
 * @description Returns a new [MapElement] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of this map.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of this map.
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
  className: 'MapElement',
  tag: 'map',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'name', type: 'string' }
  ]
};

/** Create the class */
const MapElement = ezelement.createClass(config);

/** Export the class and class config */
module.exports.MapElement = MapElement;
module.exports.config = config;
