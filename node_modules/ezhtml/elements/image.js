/**
 * @class ezhtml.Image
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML image elements.
 *
 * @signature new Image([data])
 * @added v0.1.0
 * @param data Object
 * @returns Image
 * @description Returns a new [Image] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature alt()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the alternate text for the image.
 *
 * @signature alt(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the alternate text for the image.
 *
 * @signature crossorigin()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets whether to allow images from third-party sites that allow cross-origin access to be used with canvas, can be `anonymous` or `use-credentials`.
 *
 * @signature crossorigin(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets whether to allow images from third-party sites that allow cross-origin access to be used with canvas, can be `anonymous` or `use-credentials`.
 *
 * @signature height()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the height of the image in pixels.
 *
 * @signature height(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the height of the image in pixels.
 *
 * @signature ismap()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this is a server-side image map.
 *
 * @signature ismap(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this is a server-side image map.
 *
 * @signature longdesc()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a URL to a document with a long description of the image.
 *
 * @signature longdesc(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets a URL to a document with a long description of the image.
 *
 * @signature sizes()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets any specific image sizes for different page layouts.
 *
 * @signature sizes(device)
 * @added v0.1.0
 * @updated v0.2.0
 * @param device string
 * @returns this
 * @throws TypeError if `device` is not a valid [string]
 * @description Sets any specific image sizes for different page layouts.
 *
 * @signature src()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the image.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the image.
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
 * @signature usemap()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the ID of a [Map] element that should be used as a client-side iamge map.
 *
 * @signature usemap(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the ID of a [Map] element that should be used as a client-side iamge map.
 *
 * @signature width()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the width of the image in pixels.
 *
 * @signature width(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the width of the image in pixels.
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
  className: 'Image',
  tag: 'img',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'alt', type: 'string' },
    { name: 'crossorigin', type: 'string' },
    { name: 'height', type: 'int' },
    { name: 'ismap', type: 'boolean' },
    { name: 'longdesc', type: 'string' },
    { name: 'sizes', type: 'string' },
    { name: 'src', type: 'string' },
    { name: 'srcset', type: 'string' },
    { name: 'usemap', type: 'string' },
    { name: 'width', type: 'int' },
  ]
};

/** Create the class */
const Image = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Image = Image;
module.exports.config = config;
