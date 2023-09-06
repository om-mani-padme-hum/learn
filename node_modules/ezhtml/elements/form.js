/**
 * @class ezhtml.Form
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML form elements.
 *
 * @signature new Form([data])
 * @added v0.1.0
 * @param data Object
 * @returns Form
 * @description Returns a new [Form] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature acceptCharset()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the character encodings that are to be used for the form submission.
 *
 * @signature acceptCharset(charset)
 * @added v0.1.0
 * @updated v0.2.0
 * @param charset string
 * @returns this
 * @throws TypeError if `charset` is not a valid [string]
 * @description Sets the character encodings that are to be used for the form submission.
 *
 * @signature action()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the document that this form submit its data to.
 *
 * @signature action(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the document that this form submit its data to.
 *
 * @signature autocomplete()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a flag inicating whether the browser should enable autocomplete for this form, can be `on` or `off`.
 *
 * @signature autocomplete(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag string
 * @returns this
 * @throws TypeError if `flag` is not a valid [string]
 * @description Sets a flag inicating whether the browser should enable autocomplete for this form, can be `on` or `off`.
 *
 * @signature enctype()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the encoding used to send the form data to the server, can be `application/x-www-form-urlencoded`, 
 * `multipart/form-data`, or `text/plain`.
 *
 * @signature enctype(enctype)
 * @added v0.1.0
 * @updated v0.2.0
 * @param enctype string
 * @returns this
 * @throws TypeError if `enctype` is not a valid [string]
 * @description Sets the encoding used to send the form data to the server, can be `application/x-www-form-urlencoded`, 
 * `multipart/form-data`, or `text/plain`.
 *
 * @signature method()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the HTTP method used to send the data.
 *
 * @signature method(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the HTTP method used to send the data.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the form.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of the form.
 *
 * @signature novalidate()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the form-data should not be validated on submission.
 *
 * @signature novalidate(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the form-data should not be validated on submission.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature target()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets where to display the response after submitting the form, can be `_blank`, `_self`, `_parent`, or `_top`.
 *
 * @signature target(target)
 * @added v0.1.0
 * @updated v0.2.0
 * @param target string
 * @returns this
 * @throws TypeError if `target` is not a valid [string]
 * @description Sets where to display the response after submitting the form, can be `_blank`, `_self`, `_parent`, or `_top`.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Form',
  tag: 'form',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'acceptCharset', type: 'string' },
    { name: 'action', type: 'string' },
    { name: 'autocomplete', type: 'string' },
    { name: 'enctype', type: 'string' },
    { name: 'method', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'novalidate', type: 'boolean' },
    { name: 'target', type: 'string' }
  ]
};

/** Create the class */
const Form = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Form = Form;
module.exports.config = config;
