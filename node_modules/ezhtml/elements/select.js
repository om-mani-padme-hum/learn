/**
 * @class ezhtml.Select
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML select elements.
 *
 * @signature new Select([data])
 * @added v0.1.0
 * @param data Object
 * @returns Select
 * @description Returns a new [Select] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature autofocus()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the select box should automatically get focus when the page loads.
 *
 * @signature autofocus(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the select box should automatically get focus when the page loads.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the select box should be disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the select box should be disabled.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the form that this select box belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that this select box belongs to.
 *
 * @signature multiple()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this is a multiple-select box.
 *
 * @signature multiple(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this is a multiple-select box.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the select box.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the select box.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature required()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this select box input is required.
 *
 * @signature required(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this select box input is required.
 *
 * @signature size()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the size of the select box, for multiple-select boxes only.
 *
 * @signature size(size)
 * @added v0.1.0
 * @updated v0.2.0
 * @param size number
 * @returns this
 * @throws TypeError if `size` is not a valid [number]
 * @description Sets the size of the select box, for multiple-select boxes only.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Select',
  tag: 'select',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'autofocus', type: 'boolean' },
    { name: 'disabled', type: 'boolean' },
    { name: 'form', type: 'string' },
    { name: 'multiple', type: 'boolean' },
    { name: 'name', type: 'string' },
    { name: 'required', type: 'boolean' },
    { name: 'size', type: 'string' }
  ]
};

/** Create the class */
const Select = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Select = Select;
module.exports.config = config;
