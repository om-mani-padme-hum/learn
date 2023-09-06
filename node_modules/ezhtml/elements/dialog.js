/**
 * @class ezhtml.Dialog
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML dialog elements.
 *
 * @signature new Dialog([data])
 * @added v0.1.0
 * @param data Object
 * @returns Dialog
 * @description Returns a new [Dialog] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature open()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the dialog should already be open when the page loads.
 *
 * @signature open(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the dialog should already be open when the page loads.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Dialog',
  tag: 'dialog',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'open', type: 'boolean' }
  ]
};

/** Create the class */
const Dialog = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Dialog = Dialog;
module.exports.config = config;
