/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 buttons.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Button extends html.Button {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.active(data.active || false);
    this.block(data.block || false);
    this.collapses(data.collapses || '');
    this.color(data.color || '');
    this.outline(data.outline || false);
    this.size(data.size || '');
    this.togglesDropdown(data.togglesDropdown || false);
  }
  
  /**
   * Active boolean getter/setter.
   * @signature active() Get the active boolean
   * @signature active(boolean) Set the active boolean as (boolean)
   * @return This object for call chaining
   */
  active(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._active;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._active = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.active(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Block boolean getter/setter.
   * @signature block() Get the block boolean
   * @signature block(boolean) Set the block boolean as (boolean)
   * @return This object for call chaining
   */
  block(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._block;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._block = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.block(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`Button.collapses(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Button.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Outline boolean getter/setter.
   * @signature outline() Get the outline boolean
   * @signature outline(boolean) Set the outline boolean as (boolean)
   * @return This object for call chaining
   */
  outline(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._outline;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._outline = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.outline(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Size getter/setter.
   * @signature size() Get the size
   * @signature size(string) Set the size as (string)
   * @return This object for call chaining
   */
  size(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._size;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._size = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.size(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Toggles dropdown boolean getter/setter.
   * @signature togglesDropdown() Get the toggles dropdown boolean
   * @signature togglesDropdown(boolean) Set the toggles dropdown boolean as (boolean)
   * @return This object for call chaining
   */
  togglesDropdown(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._togglesDropdown;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._togglesDropdown = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.togglesDropdown(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`btn`);
    
    if ( this.active() )
      this.addClass(`active`);
    
    if ( this.block() )
      this.addClass(`btn-block`);
    
    if ( this.collapses().length > 0 ) {
      this.attr('data-toggle', 'collapse');
      this.href(this.collapses());
    }
    
    if ( this.outline() )
      this.addClass(`btn-outline-${this.color()}`);
    else if ( this.color().length > 0 )
      this.addClass(`btn-${this.color()}`);
    
    if ( this.size().length > 0 )
      this.addClass(`btn-${this.size()}`);
    
    if ( this.togglesDropdown() ) {
      this.attr('data-toggle', 'dropdown');
      this.addClass(`dropdown-toggle`);
    }
    
    return super.render(indent);
  }
}

module.exports.Button = Button;
