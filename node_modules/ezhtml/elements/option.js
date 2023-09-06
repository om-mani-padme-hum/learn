/**
 * @class ezhtml.Option
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML option elements.
 *
 * @signature new Option([data])
 * @added v0.1.0
 * @param data Object
 * @returns Option
 * @description Returns a new [Option] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this option should be disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this option should be disabled.
 *
 * @signature label()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the option, as shown to the user.
 *
 * @signature label(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the name of the option, as shown to the user.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature selected()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this option should be pre-selected when the page loads.
 *
 * @signature selected(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this option should be pre-selected when the page loads.
 *
 * @signature value()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the value of ths option.
 *
 * @signature value(value)
 * @added v0.1.0
 * @updated v0.2.0
 * @param value string
 * @returns this
 * @throws TypeError if `value` is not a valid [string] or [number]
 * @description Sets the value of ths option.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Option',
  tag: 'option',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'disabled', type: 'boolean' },
    { name: 'selected', type: 'boolean' },
    { name: 'value', type: 'string' }
  ]
};

/** Create the class */
const Option = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Option = Option;
module.exports.config = config;
