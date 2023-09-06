/**
 * @class ezhtml.Label
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML label elements.
 *
 * @signature new Label([data])
 * @added v0.1.0
 * @param data Object
 * @returns Label
 * @description Returns a new [Label] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature for()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the input this label is for.
 *
 * @signature for(elementId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param elementId string
 * @returns this
 * @throws TypeError if `elementId` is not a valid [string]
 * @description Sets the id of the input this label is for.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the form that this label belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that this label belongs to.
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
  className: 'Label',
  tag: 'label',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'for', type: 'string' },
    { name: 'form', type: 'string' }
  ]
};

/** Create the class */
const Label = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Label = Label;
module.exports.config = config;
