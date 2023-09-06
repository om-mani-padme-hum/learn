/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 anchors.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Anchor extends html.Anchor {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.collapses(data.collapses || '');
    this.color(data.color || '');
  }
  
  /**
   * Collapses target getter/setter.
   * @signature collapses() Get the collapses target
   * @signature collapses(string) Set the collapses target as (string)
   * @return This object for call chaining
   */
  collapses(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._collapses;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._collapses = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Anchor.collapses(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`Anchor.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {    
    if ( this.collapses().length > 0 ) {
      this.attr('data-toggle', 'collapse');
      this.href(this.collapses());
    }
    
    if ( this.color().length > 0 )
      this.addClass(`text-${this.color()}`);
    
    return super.render(indent);
  }
}

module.exports.Anchor = Anchor;
