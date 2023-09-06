/**
 * @class ezhtml.Inserted
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML inserted elements.
 *
 * @signature new Inserted([data])
 * @added v0.1.0
 * @param data Object
 * @returns Inserted
 * @description Returns a new [Inserted] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature cite()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a URL to a document that explains the reason why the text was inserted.
 *
 * @signature cite(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets a URL to a document that explains the reason why the text was inserted.
 *
 * @signature datetime()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the date and time of when the text was inserted.
 *
 * @signature datetime(datetime)
 * @added v0.1.0
 * @updated v0.2.0
 * @param datetime string Required format: YYYY-MM-DDThh:mm:ssTZD
 * @returns this
 * @throws TypeError if `datetime` is not a valid [string]
 * @description Sets the date and time of when the text was inserted.
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
  className: 'Inserted',
  tag: 'ins',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'cite', type: 'string' },
    { name: 'datetime', type: 'string' }
  ]
};

/** Create the class */
const Inserted = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Inserted = Inserted;
module.exports.config = config;
