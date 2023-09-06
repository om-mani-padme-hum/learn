/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 badge components that are also links.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class BadgeLink extends html.Anchor {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.color(data.color || 'primary');
    this.pill(data.pill || false);
  }
  
  /**
   * Color getter/setter.
   * @signature color() Get the color
   * @signature color(string) Set the color as (string)
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
      throw new TypeError(`BadgeLink.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Pill boolean getter/setter.
   * @signature pill() Get the pill boolean
   * @signature pill(boolean) Set the pill boolean as (boolean)
   * @return This object for call chaining
   */
  pill(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._pill;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._pill = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`BadgeLink.pill(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`badge badge-${this.color()}`);
  
    if ( this.pill() )
      this.addClass(`badge-pill`);
            
    return super.render(indent);
  }
}

module.exports.BadgeLink = BadgeLink;
