/**
 * @class ezhtml.H1
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML rank 1 heading elements.
 *
 * @signature new H1([data])
 * @added v0.1.0
 * @param data Object
 * @returns H1
 * @description Returns a new [H1] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @class ezhtml.H2
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML rank 2 heading elements.
 *
 * @signature new H2([data])
 * @added v0.1.0
 * @param data Object
 * @returns H2
 * @description Returns a new [H2] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @class ezhtml.H3
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML rank 3 heading elements.
 *
 * @signature new H3([data])
 * @added v0.1.0
 * @param data Object
 * @returns H3
 * @description Returns a new [H3] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @class ezhtml.H4
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML rank 4 heading elements.
 *
 * @signature new H4([data])
 * @added v0.1.0
 * @param data Object
 * @returns H4
 * @description Returns a new [H4] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @class ezhtml.H5
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML rank 5 heading elements.
 *
 * @signature new H5([data])
 * @added v0.1.0
 * @param data Object
 * @returns H5
 * @description Returns a new [H5] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @class ezhtml.H6
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML rank 6 heading elements.
 *
 * @signature new H6([data])
 * @added v0.1.0
 * @param data Object
 * @returns H6
 * @description Returns a new [H6] instance, initializing with any key/value pairs provided in `data` with keys 
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

for ( let i = 1, i_max = 6; i <= i_max; i++ ) {
  /** Create the ezelement class configuration */
  const config = {
    className: `H${i}`,
    tag: `h${i}`,
    extends: containerElement.ContainerElement,
    extendsConfig: containerElement.config
  };

  /** Create the class */
  const Heading = ezelement.createClass(config);

  /** Export the class and class config */
  module.exports[`H${i}`] = Heading;
  module.exports[`configH${i}`] = config;
}
