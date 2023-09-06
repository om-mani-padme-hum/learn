/**
 * @class ezhtml.Source
 * @extends Element
 * @added v0.1.0
 * @added v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML source elements.
 *
 * @signature new Source([data])
 * @added v0.1.0
 * @param data Object
 * @returns Source
 * @description Returns a new [Source] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature media()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a valid media query that would normally be defined in a CSS.
 *
 * @signature media(query)
 * @added v0.1.0
 * @updated v0.2.0
 * @param query string
 * @returns this
 * @throws TypeError if `query` is not a valid [string]
 * @description Sets a valid media query that would normally be defined in a CSS.
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
 * @description Gets the image sizes for different page layouts.
 *
 * @signature sizes(sizes)
 * @added v0.1.0
 * @updated v0.2.0
 * @param sizes string
 * @returns this
 * @throws TypeError if `sizes` is not a valid [string]
 * @description Sets the image sizes for different page layouts.
 *
 * @signature src()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the media file, required when used in an [Audio] or [Source] element.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the media file, required when used in an [Audio] or [Source] element.
 *
 * @signature srcset()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URLs of the image to use in different situations.
 *
 * @signature srcset(urls)
 * @added v0.1.0
 * @updated v0.2.0
 * @param urls string
 * @returns this
 * @throws TypeError if `urls` is not a valid [string]
 * @description Sets the URLs of the image to use in different situations.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the MIME-type of the resource.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the MIME-type of the resource.
 */
  
/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Source',
  tag: 'source',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'media', type: 'string' },
    { name: 'sizes', type: 'string' },
    { name: 'src', type: 'string' },
    { name: 'srcset', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const Source = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Source = Source;
module.exports.config = config;
