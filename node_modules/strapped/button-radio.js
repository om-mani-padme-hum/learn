/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 button radios.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class ButtonRadio extends html.Label {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.active(data.active || false);
    this.block(data.block || false);
    this.color(data.color || 'dark');
    this.disabled(data.disabled || false);
    this.name(data.name || '');
    this.outline(data.outline || false);
    this.size(data.size || '');
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
      throw new TypeError(`ButtonRadio.active(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ButtonRadio.block(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ButtonRadio.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Disabled boolean getter/setter.
   * @signature disabled() Get the disabled boolean
   * @signature disabled(boolean) Set the disabled boolean as (boolean)
   * @return This object for call chaining
   */
  disabled(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._disabled;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._disabled = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ButtonRadio.disabled(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Name getter/setter.
   * @signature name() Get the name
   * @signature name(string) Set the name as (string)
   * @return This object for call chaining
   */
  name(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._name;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._name = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ButtonRadio.name(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ButtonRadio.outline(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ButtonRadio.size(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.disabled() )
      this.addClass(`disabled`);
    
    if ( this.outline() )
      this.addClass(`btn-outline-${this.color()}`);
    else
      this.addClass(`btn-${this.color()}`);
    
    if ( this.size().length > 0 )
      this.addClass(`btn-${this.size()}`);
    
    this.prepend(new html.Input().type('radio').checked(this.active()).name(this.name()).autocomplete('off'));
    
    return super.render(indent);
  }
}

module.exports.ButtonRadio = ButtonRadio;
