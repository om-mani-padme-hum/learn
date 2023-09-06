/**
 * @class ezhtml.Meta
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML meta elements.
 *
 * @signature new Meta([data])
 * @added v0.1.0
 * @param data Object
 * @returns Meta
 * @description Returns a new [Meta] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature charset()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the character encoding for the HTML document.
 *
 * @signature charset(encoding)
 * @added v0.1.0
 * @updated v0.2.0
 * @param encoding string
 * @returns this
 * @throws TypeError if `encoding` is not a valid [string]
 * @description Sets the character encoding for the HTML document.
 *
 * @signature content()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the value associated with the http-equiv or name attribute.
 *
 * @signature content(content)
 * @added v0.1.0
 * @updated v0.2.0
 * @param content string
 * @returns this
 * @throws TypeError if `content` is not a valid [string]
 * @description Sets the value associated with the http-equiv or name attribute.
 *
 * @signature httpEquiv()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the HTTP header representing the information/value of the content attribute, can be `content-type`, `default-style`, or `refresh`.
 *
 * @signature httpEquiv(header)
 * @added v0.1.0
 * @updated v0.2.0
 * @param header string
 * @returns this
 * @throws TypeError if `header` is not a valid [string]
 * @description Sets the HTTP header representing the information/value of the content attribute, can be `content-type`, `default-style`, or `refresh`.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the metadata.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the metadata.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Meta',
  tag: 'meta',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'charset', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'http-equiv', type: 'string' },
    { name: 'name', type: 'string' }
  ]
};

/** Create the class */
const Meta = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Meta = Meta;
module.exports.config = config;
