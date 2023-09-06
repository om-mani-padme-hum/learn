/**
 * @class ezhtml.LineBreak
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML line break elements.
 *
 * @signature new LineBreak([data])
 * @added v0.1.0
 * @param data Object
 * @returns LineBreak
 * @description Returns a new [LineBreak] instance, initializing with any key/value pairs provided in `data` with keys 
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
  className: 'LineBreak',
  tag: 'br',
  extends: element.Element,
  extendsConfig: element.config
};

/** Create the class */
const LineBreak = ezelement.createClass(config);

/** Export the class and class config */
module.exports.LineBreak = LineBreak;
module.exports.config = config;
