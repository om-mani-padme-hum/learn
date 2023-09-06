/**
 * @class ezhtml.TextArea
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML text area elements.
 *
 * @signature new TextArea([data])
 * @added v0.1.0
 * @param data Object
 * @returns TextArea
 * @description Returns a new [TextArea] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature autofocus()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the text area should automatically get focus when the page loads.
 *
 * @signature autofocus(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the text area should automatically get focus when the page loads.
 *
 * @signature cols()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the number of characters per row in the text area.
 *
 * @signature cols(columns)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.2
 * @param columns string
 * @returns this
 * @throws TypeError if `columns` is not a valid [string]
 * @description Sets the number of characters per row in the text area.
 *
 * @signature dirname()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the direction of the text that will be submitted.
 *
 * @signature dirname(dir)
 * @added v0.1.0
 * @updated v0.2.0
 * @param dir string
 * @returns this
 * @throws TypeError if `dir` is not a valid [string]
 * @description Sets the direction of the text that will be submitted.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the text area should be disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the text area should be disabled.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the form that the text area belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that the text area belongs to.
 *
 * @signature maxlength()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the maximum length of characters allowed for ths input.
 *
 * @signature maxlength(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.2
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the maximum length of characters allowed for ths input.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the text area.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the text area.
 *
 * @signature placeholder()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the placeholder value for ths text area.
 *
 * @signature placeholder(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the placeholder value for ths text area.
 *
 * @signature readonly()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this text area is read only.
 *
 * @signature readonly(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this text area is read only.
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
 * @description Gets a boolean indicating whether this text area is required.
 *
 * @signature required(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this text area is required.
 *
 * @signature rows()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the number of rows that should be visible in this text area at any given time.
 *
 * @signature rows(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.2
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the number of rows that should be visible in this text area at any given time.
 *
 * @signature wrap()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the type of text wrapping to be used in the text area, can be `hard` or `soft`.
 *
 * @signature wrap(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the type of text wrapping to be used in the text area, can be `hard` or `soft`.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'TextArea',
  tag: 'textarea',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'autofocus', type: 'boolean' },
    { name: 'cols', type: 'int' },
    { name: 'dirname', type: 'string' },
    { name: 'disabled', type: 'boolean' },
    { name: 'form', type: 'string' },
    { name: 'maxlength', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'placeholder', type: 'string' },
    { name: 'readonly', type: 'boolean' },
    { name: 'required', type: 'boolean' },
    { name: 'rows', type: 'int' },
    { name: 'wrap', type: 'string' }
  ]
};

/** Create the class */
const TextArea = ezelement.createClass(config);

/** Export the class and class config */
module.exports.TextArea = TextArea;
module.exports.config = config;
