/**
 * @class ezhtml.Time
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML time elements.
 *
 * @signature new Time([data])
 * @added v0.1.0
 * @param data Object
 * @returns Time
 * @description Returns a new [Time] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature datetime()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the date and time represented by this element.
 *
 * @signature datetime(datetime)
 * @added v0.1.0
 * @updated v0.2.0
 * @param datetime string Many formats supported, see HTML 5 documentation
 * @returns this
 * @throws TypeError if `datetime` is not a valid [string]
 * @description Sets the date and time represented by this element.
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
  className: 'Time',
  tag: 'time',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'datetime', type: 'string' }
  ]
};

/** Create the class */
const Time = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Time = Time;
module.exports.config = config;
