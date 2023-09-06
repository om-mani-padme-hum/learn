/**
 * @class ezhtml.BidirectionalOverride
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML bi-directional override elements.
 *
 * @signature new BidirectionalOverride([data])
 * @added v0.1.0
 * @param data Object
 * @returns BidirectionalOverride
 * @description Returns a new [BidirectionalOverride] instance, initializing with any key/value pairs provided in `data` with 
 * keys that match setter method names.
 *
 * @signature dir()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the text direction.
 *
 * @signature dir(direction)
 * @added v0.1.0
 * @updated v0.2.0
 * @param direction string
 * @returns this
 * @throws TypeError if `direction` is not a valid [string]
 * @description Sets the text direction.
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
  className: 'BidirectionalOverride',
  tag: 'bdo',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'dir', type: 'string', default: 'ltr' }
  ]
};

/** Create the class */
const BidirectionalOverride = ezelement.createClass(config);

/** Export the class and class config */
module.exports.BidirectionalOverride = BidirectionalOverride;
module.exports.config = config;
