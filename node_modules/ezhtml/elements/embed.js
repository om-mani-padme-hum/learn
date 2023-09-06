/**
 * @class ezhtml.Embed
 * @extends ContainerElement
 * @added v0.1.0
 * @added v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML embed elements.
 *
 * @signature new Embed([data])
 * @added v0.1.0
 * @param data Object
 * @returns Embed
 * @description Returns a new [Embed] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature height()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the height of the embedded content.
 *
 * @signature height(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the height of the embedded content.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature src()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the external file to embed.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the external file to embed.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the media type of the embedded content.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the media type of the embedded content.
 *
 * @signature width()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the width of the embedded content.
 *
 * @signature width(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the width of the embedded content.
 */
  
/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Embed',
  tag: 'embed',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'height', type: 'int' },
    { name: 'src', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'width', type: 'int' }
  ]
};

/** Create the class */
const Embed = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Embed = Embed;
module.exports.config = config;
