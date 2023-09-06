/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 button groups.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class ButtonGroup extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.size(data.size || '');
    this.toggle(data.toggle || false);
    this.vertical(data.vertical || false);
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
      throw new TypeError(`ButtonGroup.size(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Toggle boolean getter/setter.
   * @signature toggle() Get the toggle boolean
   * @signature toggle(boolean) Set the toggle boolean as (boolean)
   * @return This object for call chaining
   */
  toggle(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._toggle;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._toggle = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ButtonGroup.toggle(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Vertical boolean getter/setter.
   * @signature vertical() Get the vertical boolean
   * @signature vertical(boolean) Set the vertical boolean as (boolean)
   * @return This object for call chaining
   */
  vertical(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._vertical;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._vertical = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ButtonGroup.vertical(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.attr('role', 'group');
    
    if ( this.size().length > 0 )
      this.addClass(`btn-group-${this.size()}`);
    
    if ( this.toggle() ) {
      this.attr('data-toggle', 'buttons');
      this.addClass(`btn-group-toggle`);
    }
    
    if ( this.vertical() )
      this.addClass(`btn-group-vertical`);
    else
      this.addClass(`btn-group`);

    return super.render(indent);
  }
}

module.exports.ButtonGroup = ButtonGroup;
