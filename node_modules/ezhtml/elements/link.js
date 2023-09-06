/**
 * @class ezhtml.Link
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML link elements.
 *
 * @signature new Link([data])
 * @added v0.1.0
 * @param data Object
 * @returns Link
 * @description Returns a new [Link] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature crossorigin()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets whether to allow links from third-party sites that allow cross-origin access, can be `anonymous` or `use-credentials`.
 *
 * @signature crossorigin(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets whether to allow links from third-party sites that allow cross-origin access, can be `anonymous` or `use-credentials`.
 *
 * @signature href()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the linked document.
 *
 * @signature href(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the linked document.
 *
 * @signature hreflang()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the language of the linked document.
 *
 * @signature hreflang(lang)
 * @added v0.1.0
 * @updated v0.2.0
 * @param lang string
 * @returns this
 * @throws TypeError if `lang` is not a valid [string]
 * @description Sets the language of the linked document.
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
 * @signature rel()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the relationship between the current document and the linked document.  This value is equired.
 *
 * @signature rel(relationship)
 * @added v0.1.0
 * @updated v0.2.0
 * @param relationship string
 * @returns this
 * @throws TypeError if `relationship` is not a valid [string]
 * @description Sets the relationship between the current document and the linked document.  This value is equired.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature sizes()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the size of the icon, only for rel `icon`.
 *
 * @signature sizes(size)
 * @added v0.1.0
 * @updated v0.2.0
 * @param size string
 * @returns this
 * @throws TypeError if `size` is not a valid [string]
 * @description Sets the size of the icon, only for rel `icon`.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the media type of the linked document.
 *
 * @signature type(media)
 * @added v0.1.0
 * @updated v0.2.0
 * @param media string
 * @returns this
 * @throws TypeError if `media` is not a valid [string]
 * @description Sets the media type of the linked document.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Link',
  tag: 'link',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'crossorigin', type: 'string' },
    { name: 'href', type: 'string' },
    { name: 'hreflang', type: 'string' },
    { name: 'media', type: 'string' },
    { name: 'rel', type: 'string' },
    { name: 'sizes', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const Link = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Link = Link;
module.exports.config = config;
