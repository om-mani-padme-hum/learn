/**
 * @class ezhtml.OrderedList
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML ordered list elements.
 *
 * @signature new OrderedList([data])
 * @added v0.1.0
 * @param data Object
 * @returns OrderedList
 * @description Returns a new [OrderedList] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature reversed()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this list should have its order reversed.
 *
 * @signature reversed(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this list should have its order reversed.
 *
 * @signature start()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the starting value to use for the list.
 *
 * @signature start(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value number
 * @returns this
 * @throws TypeError if `flag` is not a valid [number]
 * @description Sets the starting value to use for the list.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the type of marker to use in the list, can be `1`, `A`, `a`, `I`, or `i`.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the type of marker to use in the list, can be `1`, `A`, `a`, `I`, or `i`.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'OrderedList',
  tag: 'ol',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'start', type: 'int' },
    { name: 'reversed', type: 'boolean' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const OrderedList = ezelement.createClass(config);

/** Export the class and class config */
module.exports.OrderedList = OrderedList;
module.exports.config = config;
