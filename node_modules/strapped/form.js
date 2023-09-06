/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 form components.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Form extends html.Form {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.inline(data.inline || false);
  }

  /**
   * Inline boolean getter/setter.
   * @signature inline() Get the inline boolean
   * @signature inline(boolean) Set the inline boolean as (boolean)
   * @return This object for call chaining
   */
  inline(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._inline;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._inline = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.inline(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    if ( this.inline() )
      this.addClass(`form-inline`);
            
    return super.render(indent);
  }
}

module.exports.Form = Form;
