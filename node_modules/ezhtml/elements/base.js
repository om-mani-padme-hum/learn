/**
 * @class ezhtml.Base
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML base elements.
 *
 * @signature new Base([data])
 * @added v0.1.0
 * @param data Object
 * @returns Base
 * @description Returns a new [Base] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature href()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the base URL for all relative URLs in the page.
 *
 * @signature href(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the base URL for all relative URLs in the page.
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
 * @description Gets the default target for all hyperlinks and forms in the page.
 *
 * @signature target(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the default target for all hyperlinks and forms in the page.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Base',
  tag: 'base',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'href', type: 'string' },
    { name: 'target', type: 'string' }
  ]
};

/** Create the class */
const Base = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Base = Base;
module.exports.config = config;
