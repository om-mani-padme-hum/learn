/**
 * @class ezhtml.FieldSet
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML field set elements.
 *
 * @signature new FieldSet([data])
 * @added v0.1.0
 * @param data Object
 * @returns FieldSet
 * @description Returns a new [FieldSet] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this set of form elements should be disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this set of form elements should be disabled.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the form ID that this field set belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the form ID that this field set belongs to.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the field set.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the field set.
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
  className: 'FieldSet',
  tag: 'fieldset',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'disabled', type: 'boolean' },
    { name: 'form', type: 'string' },
    { name: 'name', type: 'string' }
  ]
};

/** Create the class */
const FieldSet = ezelement.createClass(config);

/** Export the class and class config */
module.exports.FieldSet = FieldSet;
module.exports.config = config;
