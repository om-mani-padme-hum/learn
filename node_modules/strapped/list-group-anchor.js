/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 list item anchors.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class ListGroupAnchor extends html.Anchor {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.active(data.active || false);
    this.color(data.color || '');
    this.disabled(data.disabled || false);
    this.togglesTab(data.togglesTab || false);
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
      throw new TypeError(`ListGroupAnchor.active(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ListGroupAnchor.color(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ListGroupAnchor.disabled(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Toggles tab boolean getter/setter.
   * @signature togglesTab() Get the toggles tab boolean
   * @signature togglesTab(boolean) Set the toggles tab boolean as (boolean)
   * @return This object for call chaining
   */
  togglesTab(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._togglesTab;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._togglesTab = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ListGroupAnchor.togglesTab(): Invalid signature (${typeof arg1}).`);

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
        
    if ( this.active() )
      this.addClass(`active`);
    
    if ( this.color().length > 0 )
      this.addClass(`list-group-item-${this.color()}`);
    
    if ( this.disabled() )
      this.addClass(`disabled`);

    if ( this.togglesTab() ) {
      this.attr('data-toggle', 'list');
      this.attr('role', 'tab');
    }
    
    return super.render(indent);
  }
}

module.exports.ListGroupAnchor = ListGroupAnchor;
