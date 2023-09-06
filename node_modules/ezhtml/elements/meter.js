/**
 * @class ezhtml.Meter
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML meter elements.
 *
 * @signature new Meter([data])
 * @added v0.1.0
 * @param data Object
 * @returns Meter
 * @description Returns a new [Meter] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the form that this meter belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that this meter belongs to.
 *
 * @signature high()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the range that is considered to be a high value.
 *
 * @signature high(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the range that is considered to be a high value.
 *
 * @signature low()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the range that is considered to be a low value.
 *
 * @signature low(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the range that is considered to be a low value.
 *
 * @signature max()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the maximum value of the range.
 *
 * @signature max(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the maximum value of the range.
 *
 * @signature min()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the minimum value of the range.
 *
 * @signature min(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the minimum value of the range.
 *
 * @signature optimum()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the optimal value for the gauge.
 *
 * @signature optimum(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the optimal value for the gauge.
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
 * @description Gets the current value of the gauge.
 *
 * @signature value(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `value` is not a valid [number]
 * @description Sets the current value of the gauge.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Meter',
  tag: 'meter',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'form', type: 'string' },
    { name: 'high', type: 'int' },
    { name: 'low', type: 'int' },
    { name: 'max', type: 'int' },
    { name: 'min', type: 'int' },
    { name: 'optimum', type: 'int' },
    { name: 'value', type: 'int' }
  ]
};

/** Create the class */
const Meter = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Meter = Meter;
module.exports.config = config;
