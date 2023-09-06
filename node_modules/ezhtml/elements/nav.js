/**
 * @class ezhtml.Nav
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML nav elements.
 *
 * @signature new Nav([data])
 * @added v0.1.0
 * @param data Object
 * @returns Nav
 * @description Returns a new [Nav] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
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
  className: 'Nav',
  tag: 'nav',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config
};

/** Create the class */
const Nav = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Nav = Nav;
module.exports.config = config;
