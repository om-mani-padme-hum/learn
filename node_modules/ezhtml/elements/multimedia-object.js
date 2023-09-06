/**
 * @class ezhtml.MultimediaObject
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML multimedia object elements.
 *
 * @signature new MultimediaObject([data])
 * @added v0.1.0
 * @param data Object
 * @returns MultimediaObject
 * @description Returns a new [MultimediaObject] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature data()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the resource to be used by the object.
 *
 * @signature data(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the resource to be used by the object.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the form that this object belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that this object belongs to.
 *
 * @signature height()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the height of the object in pixels.
 *
 * @signature height(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the height of the object in pixels.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the object.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the object.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the media type of data specified in the data attribute.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the media type of data specified in the data attribute.
 *
 * @signature usemap()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the ID of a [Map] element that should be used as a client-side iamge map.
 *
 * @signature usemap(map)
 * @added v0.1.0
 * @updated v0.2.0
 * @param map string
 * @returns this
 * @throws TypeError if `map` is not a valid [string]
 * @description Sets the ID of a [Map] element that should be used as a client-side iamge map.
 *
 * @signature width()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the width of the object in pixels.
 *
 * @signature width(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the width of the object in pixels.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'MultimediaObject',
  tag: 'object',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'data', type: 'string' },
    { name: 'form', type: 'string' },
    { name: 'height', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'usemap', type: 'boolean' },
    { name: 'width', type: 'int' }
  ]
};

/** Create the class */
const MultimediaObject = ezelement.createClass(config);

/** Export the class and class config */
module.exports.MultimediaObject = MultimediaObject;
module.exports.config = config;
