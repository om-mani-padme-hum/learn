/**
 * @class ezhtml.Progress
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML progress elements.
 *
 * @signature new Progress([data])
 * @added v0.1.0
 * @param data Object
 * @returns Progress
 * @description Returns a new [Progress] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature max()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the maximum value of the progress bar.
 *
 * @signature max(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the maximum value of the progress bar.
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
 * @description Gets the current value of the progress bar.
 *
 * @signature value(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the current value of the progress bar.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Progress',
  tag: 'progress',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'max', type: 'int' },
    { name: 'value', type: 'int' }
  ]
};

/** Create the class */
const Progress = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Progress = Progress;
module.exports.config = config;
