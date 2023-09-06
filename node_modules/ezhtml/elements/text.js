/**
 * @class ezhtml.Text
 * @extends Child
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering plain text in HTML elements.
 *
 * @signature new Text([data])
 * @added v0.1.0
 * @param data Object
 * @returns Text
 * @description Returns a new [Text] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature text()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the plain text content of this text pseudo-element.
 *
 * @signature text(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the plain text content of this text pseudo-element.
 */
  
/** Require external modules */
const ezobjects = require('ezobjects');

/** Require local modules */
const child = require('./child');

/** Create the ezelement class configuration */
const config = {
  className: 'Text',
  extends: child.Child,
  extendsConfig: child.config,
  properties: [
    { name: 'text', type: 'string' }
  ]
};

/** Create the class */
const Text = ezobjects.createClass(config);

/** Create additional prototype methods */
Text.prototype.render = function (indent) {
  return ' '.repeat(indent) + this.text();
}

/** Export the class and class config */
module.exports.Text = Text;
module.exports.config = config;
