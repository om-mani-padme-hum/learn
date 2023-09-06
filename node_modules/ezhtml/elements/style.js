/**
 * @class ezhtml.Style
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML style elements.
 *
 * @signature new Style([data])
 * @added v0.1.0
 * @param data Object
 * @returns Style
 * @description Returns a new [Style] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature media()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the media device that the linked document is optimized for.
 *
 * @signature media(device)
 * @added v0.1.0
 * @updated v0.2.0
 * @param device string
 * @returns this
 * @throws TypeError if `device` is not a valid [string]
 * @description Sets the media device that the linked document is optimized for.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature scoped()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the styles only apply to this element's parent element and that 
 * element's child elements (not the entire document).  At the time of v0.2.0, this is only supported by Firefox.
 *
 * @signature scoped(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the styles only apply to this element's parent element and that 
 * element's child elements (not the entire document).  At the time of v0.2.0, this is only supported by Firefox.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the media type of the style.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the media type of the style.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Style',
  tag: 'style',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'media', type: 'string' },
    { name: 'scoped', type: 'boolean' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const Style = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Style = Style;
module.exports.config = config;
