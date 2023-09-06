/**
 * @class ezhtml.Script
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML script elements.
 *
 * @signature new Script([data])
 * @added v0.1.0
 * @param data Object
 * @returns Script
 * @description Returns a new [Script] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature asyncScript()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the script should be executed asynchronously (only for external scripts).
 *
 * @signature asyncScript(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the script should be executed asynchronously (only for external scripts).
 *
 * @signature charset()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the character encoding used by the script.
 *
 * @signature charset(encoding)
 * @added v0.1.0
 * @updated v0.2.0
 * @param encoding string
 * @returns this
 * @throws TypeError if `encoding` is not a valid [string]
 * @description Sets the character encoding used by the script.
 *
 * @signature defer()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the script should be executed when the page has finished parsing (only for external scripts).
 *
 * @signature defer(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the script should be executed when the page has finished parsing (only for external scripts).
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
 * @description Gets the URL of the external script file.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the external script file.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the media type of the script.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the media type of the script.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Script',
  tag: 'script',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'async', type: 'boolean' },
    { name: 'charset', type: 'string' },
    { name: 'defer', type: 'boolean' },
    { name: 'src', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
const Script = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Script = Script;
module.exports.config = config;
