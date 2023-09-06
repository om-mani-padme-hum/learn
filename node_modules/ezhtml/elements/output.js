/**
 * @class ezhtml.Output
 * @extends Element
 * @added v0.1.0
 * @added v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML output elements.
 *
 * @signature new Output([data])
 * @added v0.1.0
 * @param data Object
 * @returns Output
 * @description Returns a new [Output] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature for()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a space delimited list of input ids that are used in computing this output.
 *
 * @signature for(elementIds)
 * @added v0.1.0
 * @updated v0.2.0
 * @param elementIds string
 * @returns this
 * @throws TypeError if `elementIds` is not a valid [string]
 * @description Sets a space delimited list of input ids that are used in computing this output.
 *
 * @signature form()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the id of the form that this output belongs to.
 *
 * @signature form(formId)
 * @added v0.1.0
 * @updated v0.2.0
 * @param formId string
 * @returns this
 * @throws TypeError if `formId` is not a valid [string]
 * @description Sets the id of the form that this output belongs to.
 *
 * @signature name()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of this output.
 *
 * @signature name(name)
 * @added v0.1.0
 * @updated v0.2.0
 * @param name string
 * @returns this
 * @throws TypeError if `name` is not a valid [string]
 * @description Sets the name of this output.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Output',
  tag: 'output',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'for', type: 'string' },
    { name: 'form', type: 'string' },
    { name: 'name', type: 'string' }
  ]
};

/** Create the class */
const Output = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Output = Output;
module.exports.config = config;
