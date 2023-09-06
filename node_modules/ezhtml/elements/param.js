/**
 * @class ezhtml.Param
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML paran elements.
 *
 * @signature new Param([data])
 * @added v0.1.0
 * @param data Object
 * @returns Param
 * @description Returns a new [Param] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of this parameter.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of this parameter.
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
 * @returns string
 * @description Gets the value of this parameter.
 *
 * @signature value(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string] or [number]
 * @description Sets the value of this parameter.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Param',
  tag: 'param',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'name', type: 'string' },
    { name: 'value', type: 'string' }
  ]
};

/** Create the class */
const Param = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Param = Param;
module.exports.config = config;
