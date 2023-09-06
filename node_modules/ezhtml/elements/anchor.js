/**
 * @class ezhtml.Anchor
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML anchor elements.
 *
 * @signature new Anchor([data])
 * @added v0.1.0
 * @param data Object
 * @returns Anchor
 * @description Returns a new [Anchor] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature download()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the filename of the file that should be downloaded upon clicking this link.
 *
 * @signature download(filename)
 * @added v0.1.0
 * @updated v0.2.0
 * @param filename string
 * @returns this
 * @throws TypeError if `filename` is not a valid [string]
 * @description Sets the filename of the file that should be downloaded upon clicking this link.
 *
 * @signature href()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the url the link goes to.
 *
 * @signature href(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the url the link goes to.
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
 * @description Gets the relationship between the current document and the linked document.
 *
 * @signature rel(relationship)
 * @added v0.1.0
 * @updated v0.2.0
 * @param relationship string
 * @returns this
 * @throws TypeError if `relationship` is not a valid [string]
 * @description Sets the relationship between the current document and the linked document.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature target()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the method used to open the linked document.
 *
 * @signature target(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the method used to open the linked document.
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
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Anchor',
  tag: 'a',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'download', type: 'string' },
    { name: 'href', type: 'string' },
    { name: 'hreflang', type: 'string' },
    { name: 'media', type: 'string' },
    { name: 'rel', type: 'string' },
    { name: 'target', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const Anchor = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Anchor = Anchor;
module.exports.config = config;
