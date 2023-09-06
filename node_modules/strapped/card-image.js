/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 card images.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class CardImage extends html.Image {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.bottom(data.bottom || false);
  }
  
  /**
   * Bottom boolean getter/setter.
   * @signature bottom() Get the bottom boolean
   * @signature bottom(boolean) Set the bottom boolean as (boolean)
   * @return This object for call chaining
   */
  bottom(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._bottom;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._bottom = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CardImage.bottom(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    if ( this.bottom() )
      this.addClass(`card-img-bottom`);
    else
      this.addClass(`card-img-top`);
    
    return super.render(indent);
  }
}

module.exports.CardImage = CardImage;
