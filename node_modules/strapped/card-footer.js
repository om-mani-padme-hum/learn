/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 card footers.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class CardFooter extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
        
    this.background(data.background || '');
    this.border(data.border || '');
    this.color(data.color || '');
  }
  
  /**
   * Background color getter/setter.
   * @signature background() Get the background color
   * @signature background(string) Set the background color as (string)
   * @return This object for call chaining
   */
  background(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._background;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._background = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CardFooter.background(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Border color getter/setter.
   * @signature border() Get the border color
   * @signature border(string) Set the border color as (string)
   * @return This object for call chaining
   */
  border(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._border;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._border = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CardFooter.border(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Text color getter/setter.
   * @signature color() Get the text color
   * @signature color(string) Set the text color as (string)
   * @return This object for call chaining
   */
  color(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._color;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._color = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CardFooter.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`card-footer`);

    if ( this.background().length > 0 )
      this.addClass(`bg-${this.background()}`);
    
    if ( this.border().length > 0 )
      this.addClass(`border-${this.border()}`);
    
    if ( this.color().length > 0 )
      this.addClass(`text-${this.color()}`);
    
    return super.render(indent);
  }
}

module.exports.CardFooter = CardFooter;
