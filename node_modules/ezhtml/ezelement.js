/** Require external modules */
const ezobjects = require('ezobjects');

/**
 * @signature ezhtml.createClass
 * @added v1.0.0
 * @description Helper method for implementing new HTML elements in EZ HTML using a shorthand
 * configuration object.
 */
module.exports.createClass = function (config) {  
  /** Create the class */
  const Element = ezobjects.createClass(config);
  
  /** Create the render function */
  Element.prototype.render = function (indent = 0) {
    config.properties.forEach((property) => {
      if ( property.type == 'string' ) {
        if ( this[property.name]().length > 0 || ( config.className == `Option` && property.name == `value` ) )
          this.attr(property.name, this[property.name]());
      } else if ( property.type == 'int' ) {
        if ( this[property.name]() > 0 )
          this.attr(property.name, this[property.name]());
      } else if ( property.type == 'float' ) {
        if ( this[property.name]() > 0 )
          this.attr(property.name, this[property.name]());
      } else if ( property.type == 'boolean' ) {
        if ( this[property.name]() )
          this.attr(property.name, true);
      }
    });
    
    this.tag(config.tag);

    return Element.__proto__.prototype.render.call(this, indent);
  };
  
  return Element;
};
