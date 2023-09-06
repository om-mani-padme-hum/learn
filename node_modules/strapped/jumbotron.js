/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 jumbotron components.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Jumbotron extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.fluid(data.fluid || false);
  }
  
  /**
   * Fluid boolean getter/setter.
   * @signature fluid() Get the fluid boolean
   * @signature fluid(boolean) Set the fluid boolean as (boolean)
   * @return This object for call chaining
   */
  fluid(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._fluid;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._fluid = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Jumbotron.fluid(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`jumbotron`);
    
    if ( this.fluid() )
      this.addClass(`jumbotron-fluid`);
    
    return super.render(indent);
  }
}

module.exports.Jumbotron = Jumbotron;
