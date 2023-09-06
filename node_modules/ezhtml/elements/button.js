/**
 * @class ezhtml.Button
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML button elements.
 *
 * @signature new Button([data])
 * @added v0.1.0
 * @param data Object
 * @returns Button
 * @description Returns a new [Button] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature autofocus()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the button should automatically get focus when the page loads.
 *
 * @signature autofocus(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the button should automatically get focus when the page loads.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the button should be disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the button should be disabled.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the ID of the form that the button belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the ID of the form that the button belongs to.
 *
 * @signature formaction()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets where to send the form-data when a form is submitted, only for type="submit".
 *
 * @signature formaction(action)
 * @added v0.1.0
 * @updated v0.2.0
 * @param action string
 * @returns this
 * @throws TypeError if `action` is not a valid [string]
 * @description Sets where to send the form-data when a form is submitted, only for type="submit".
 *
 * @signature formenctype()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets how the form-data should be encoded before sending it to a server, only for type="submit".
 *
 * @signature formenctype(enctype)
 * @added v0.1.0
 * @updated v0.2.0
 * @param enctype string
 * @returns this
 * @throws TypeError if `enctype` is not a valid [string]
 * @description Sets how the form-data should be encoded before sending it to a server, only for type="submit".
 *
 * @signature formmethod()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the HTTP method used to send the data, only for type="submit".
 *
 * @signature formmethod(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the HTTP method used to send the data, only for type="submit".
 *
 * @signature formnovalidate()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the form-data should not be validated on submission, only for type="submit".
 *
 * @signature formnovalidate(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the form-data should not be validated on submission, only for type="submit".
 *
 * @signature formtarget()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets where to display the response after submitting the form, only for type="submit".
 *
 * @signature formtarget(target)
 * @added v0.1.0
 * @updated v0.2.0
 * @param target string
 * @returns this
 * @throws TypeError if `target` is not a valid [string]
 * @description Sets where to display the response after submitting the form, only for type="submit".
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the button.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the button.
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
 * @description Gets the button type.
 *
 * @signature type(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag string
 * @returns this
 * @throws TypeError if `flag` is not a valid [string]
 * @description Sets the button type.
 *
 * @signature value()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the initial button value.
 *
 * @signature value(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag string
 * @returns this
 * @throws TypeError if `flag` is not a valid [string]
 * @description Sets the initial button value.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Button',
  tag: 'button',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'autofocus', type: 'boolean' },
    { name: 'disabled', type: 'boolean' },
    { name: 'form', type: 'string' },
    { name: 'formaction', type: 'string' },
    { name: 'formenctype', type: 'string' },
    { name: 'formmethod', type: 'string' },
    { name: 'formnovalidate', type: 'boolean' },
    { name: 'formtarget', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'value', type: 'string' }
  ]
};

/** Create the class */
const Button = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Button = Button;
module.exports.config = config;
