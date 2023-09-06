/**
 * @class ezhtml.Input
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML input elements.
 *
 * @signature new Input([data])
 * @added v0.1.0
 * @param data Object
 * @returns Input
 * @description Returns a new [Input] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature accept()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the types of files that the server accepts (only for input type `file`).
 *
 * @signature accept(types)
 * @added v0.1.0
 * @updated v0.2.0
 * @param types string
 * @returns this
 * @throws TypeError if `types` is not a valid [string]
 * @description Sets the types of files that the server accepts (only for input type `file`).
 *
 * @signature alt()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the alternate text for the input.
 *
 * @signature alt(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the alternate text for the input.
 *
 * @signature autocomplete()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a flag inicating whether the browser should enable autocomplete for this input, can be `on` or `off`.
 *
 * @signature autocomplete(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag string
 * @returns this
 * @throws TypeError if `flag` is not a valid [string]
 * @description Sets a flag inicating whether the browser should enable autocomplete for this input, can be `on` or `off`.
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
 * @signature checked()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this input should be checked on page load, only for input types `checkbox` or `radio`.
 *
 * @signature checked(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this input should be checked on page load, only for input types `checkbox` or `radio`.
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
 * @description Gets the id of the form that the button belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that the button belongs to.
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
 * @signature height()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the height of the input in pixels, only if input is of type `image`.
 *
 * @signature height(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the height of the input in pixels, only if input is of type `image`.
 *
 * @signature list()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of a [DataList] element that contains pre-defined options for this input.
 *
 * @signature list(list)
 * @added v0.1.0
 * @updated v0.2.0
 * @param list string
 * @returns this
 * @throws TypeError if `list` is not a valid [string]
 * @description Sets the id of a [DataList] element that contains pre-defined options for this input.
 *
 * @signature max()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the maximum value for ths input.
 *
 * @signature max(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the maximum value for ths input.
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
 * @updated v0.3.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the maximum length of characters allowed for ths input.
 *
 * @signature min()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the minimum value for ths input.
 *
 * @signature min(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the minimum value for ths input.
 *
 * @signature multiple()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether multiple values can be entered in this input.
 *
 * @signature multiple(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether multiple values can be entered in this input.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of this input.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of this input.
 *
 * @signature pattern()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a regular expression that this input's value is validated against.
 *
 * @signature pattern(regex)
 * @added v0.1.0
 * @updated v0.2.0
 * @param regex string
 * @returns this
 * @throws TypeError if `regex` is not a valid [string]
 * @description Sets a regular expression that this input's value is validated against.
 *
 * @signature placeholder()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the placeholder value for ths input.
 *
 * @signature placeholder(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the placeholder value for ths input.
 *
 * @signature readonly()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this input is read only.
 *
 * @signature readonly(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this input is read only.
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
 * @description Gets a boolean indicating whether this input is required.
 *
 * @signature required(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this input is required.
 *
 * @signature size()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the size of this input in characters.
 *
 * @signature size(size)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.0
 * @param size string
 * @returns this
 * @throws TypeError if `size` is not a valid [string]
 * @description Sets the size of this input in characters.
 *
 * @signature src()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the image to use as a submit button (only for input type `image`).
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the image to use as a submit button (only for input type `image`).
 *
 * @signature step()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the step value for ths input.
 *
 * @signature step(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.3.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string]
 * @description Sets the step value for ths input.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the input type.
 *
 * @signature type(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag string
 * @returns this
 * @throws TypeError if `flag` is not a valid [string]
 * @description Sets the input type.
 *
 * @signature value()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the initial value for ths input.
 *
 * @signature value(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string] or [number]
 * @description Sets the initial value for ths input.
 *
 * @signature width()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the width of the input in pixels, only if input is of type `image`.
 *
 * @signature width(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the width of the input in pixels, only if input is of type `image`.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Input',
  tag: 'input',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'accept', type: 'string' },
    { name: 'alt', type: 'string' },
    { name: 'autocomplete', type: 'string' },
    { name: 'autofocus', type: 'boolean' },
    { name: 'checked', type: 'boolean' },
    { name: 'dirname', type: 'string' },
    { name: 'disabled', type: 'boolean' },
    { name: 'form', type: 'string' },
    { name: 'formaction', type: 'string' },
    { name: 'formenctype', type: 'string' },
    { name: 'formmethod', type: 'string' },
    { name: 'formnovalidate', type: 'boolean' },
    { name: 'formtarget', type: 'string' },
    { name: 'height', type: 'string' },
    { name: 'list', type: 'string' },
    { name: 'max', type: 'string' },
    { name: 'maxlength', type: 'string' },
    { name: 'min', type: 'string' },
    { name: 'multiple', type: 'boolean' },
    { name: 'name', type: 'string' },
    { name: 'pattern', type: 'string' },
    { name: 'placeholder', type: 'string' },
    { name: 'readonly', type: 'boolean' },
    { name: 'required', type: 'boolean' },
    { name: 'size', type: 'int' },
    { name: 'src', type: 'string' },
    { name: 'step', type: 'string' },
    { name: 'type', type: 'string', default: 'text' },
    { name: 'value', type: 'string' },
    { name: 'width', type: 'string' }
  ]
};

/** Create the class */
const Input = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Input = Input;
module.exports.config = config;
