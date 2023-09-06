/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 list item buttons.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class ListGroupButton extends html.Button {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.active(data.active || false);
    this.color(data.color || '');
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
      throw new TypeError(`ListGroupButton.active(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ListGroupButton.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`list-group-item list-group-item-action`);
    
    this.type(`button`);
    
    if ( this.active() )
      this.addClass(`active`);
    
    if ( this.color().length > 0 )
      this.addClass(`list-group-item-${this.color()}`);
    
    return super.render(indent);
  }
}

module.exports.ListGroupButton = ListGroupButton;
