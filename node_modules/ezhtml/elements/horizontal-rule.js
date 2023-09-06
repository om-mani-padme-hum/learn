/**
 * @class ezhtml.HorizontalRule
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML horizontal rule elements.
 *
 * @signature new HorizontalRule([data])
 * @added v0.1.0
 * @param data Object
 * @returns HorizontalRule
 * @description Returns a new [HorizontalRule] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
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
  className: 'HorizontalRule',
  tag: 'hr',
  extends: element.Element,
  extendsConfig: element.config
};

/** Create the class */
const HorizontalRule = ezelement.createClass(config);

/** Export the class and class config */
module.exports.HorizontalRule = HorizontalRule;
module.exports.config = config;
