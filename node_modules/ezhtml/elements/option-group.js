/**
 * @class ezhtml.OptionGroup
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML option group elements.
 *
 * @signature new OptionGroup([data])
 * @added v0.1.0
 * @param data Object
 * @returns OptionGroup
 * @description Returns a new [OptionGroup] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this group of options should be disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this group of options should be disabled.
 *
 * @signature label()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the option group, as shown to the user.
 *
 * @signature label(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the name of the option group, as shown to the user.
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
  className: 'OptionGroup',
  tag: 'optgroup',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'disabled', type: 'boolean' },
    { name: 'label', type: 'string' }
  ]
};

/** Create the class */
const OptionGroup = ezelement.createClass(config);

/** Export the class and class config */
module.exports.OptionGroup = OptionGroup;
module.exports.config = config;
