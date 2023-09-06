/**
 * @class ezhtml.Area
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML area elements.
 *
 * @signature new Area([data])
 * @added v0.1.0
 * @param data Object
 * @returns Area
 * @description Returns a new [Area] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature alt()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the alternate text for the area.
 *
 * @signature alt(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the alternate text for the area.  Required if the href attribute is present.
 *
 * @signature coords()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the coordinates of the area.
 *
 * @signature coords(coordinates)
 * @added v0.1.0
 * @updated v0.2.0
 * @param coordinates string
 * @returns this
 * @throws TypeError if `coordinates` is not a valid [string]
 * @description Sets the coordinates of the area.
 *
 * @signature download()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the filename of the file that should be downloaded upon clicking this area link.
 *
 * @signature download(filename)
 * @added v0.1.0
 * @updated v0.2.0
 * @param filename string
 * @returns this
 * @throws TypeError if `filename` is not a valid [string]
 * @description Sets the filename of the file that should be downloaded upon clicking this area link.
 *
 * @signature href()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the url the area link goes to.
 *
 * @signature href(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the url the area link goes to.
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
 * @signature shape()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the shape of the area (default, rect, circle, poly).
 *
 * @signature shape(shape)
 * @added v0.1.0
 * @updated v0.2.0
 * @param shape string
 * @returns this
 * @throws TypeError if `shape` is not a valid [string]
 * @description Sets the shape of the area (default, rect, circle, poly).
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
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Area',
  tag: 'area',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'alt', type: 'string' },
    { name: 'coords', type: 'string' },
    { name: 'download', type: 'string' },
    { name: 'href', type: 'string' },
    { name: 'hreflang', type: 'string' },
    { name: 'media', type: 'string' },
    { name: 'shape', type: 'string' },
    { name: 'target', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const Area = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Area = Area;
module.exports.config = config;
