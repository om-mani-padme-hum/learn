/**
 * @class ezhtml.Child 
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for storing basic HTML element data.
 *
 * @signature new Child([data])
 * @added v0.1.0
 * @param data Object
 * @returns Child
 * @description Returns a new [Child] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature parent()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns Container
 * @description Gets the parent container.
 *
 * @signature parent(container)
 * @added v0.1.0
 * @updated v0.2.0
 * @param container Container
 * @returns this
 * @throws TypeError if `container` is not null or a valid [Container]
 * @description Sets the parent container.
 */

/** Require external modules */
const ezobjects = require('ezobjects');

/** Create the ezobject class configuration */
const config = {
  className: 'Child',
  properties: [
    { name: 'parent', instanceOf: 'Child' }
  ]
};

/** Create the class */
const Child = ezobjects.createClass(config);

/** Export the class and class config */
module.exports.Child = Child;
module.exports.config = config;
