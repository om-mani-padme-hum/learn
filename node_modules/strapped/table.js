/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 tables.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Table extends html.Table {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.bordered(data.bordered || false);
    this.dark(data.dark || false);
    this.hoverable(data.hoverable || false);
    this.small(data.small || false);
    this.striped(data.striped || false);
  }
  
  /**
   * Bordered boolean getter/setter.
   * @signature bordered() Get the bordered boolean
   * @signature bordered(boolean) Set the bordered boolean as (boolean)
   * @return This object for call chaining
   */
  bordered(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._bordered;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._bordered = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Table.bordered(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Dark boolean getter/setter.
   * @signature dark() Get the dark boolean
   * @signature dark(boolean) Set the dark boolean as (boolean)
   * @return This object for call chaining
   */
  dark(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._dark;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._dark = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Table.dark(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Hoverable boolean getter/setter.
   * @signature hoverable() Get the hoverable boolean
   * @signature hoverable(boolean) Set the hoverable boolean as (boolean)
   * @return This object for call chaining
   */
  hoverable(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._hoverable;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._hoverable = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Table.hoverable(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Small boolean getter/setter.
   * @signature small() Get the small boolean
   * @signature small(boolean) Set the small boolean as (boolean)
   * @return This object for call chaining
   */
  small(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._small;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._small = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Table.small(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Striped boolean getter/setter.
   * @signature striped() Get the striped boolean
   * @signature striped(boolean) Set the striped boolean as (boolean)
   * @return This object for call chaining
   */
  striped(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._striped;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._striped = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Table.striped(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {    
    this.addClass(`table`);
    
    if ( this.bordered() )
      this.addClass(`table-bordered`);
    
    if ( this.dark() )
      this.addClass(`table-dark`);
    
    if ( this.hoverable() )
      this.addClass(`table-hover`);
    
    if ( this.small() )
      this.addClass(`table-sm`);
    
    if ( this.striped() )
      this.addClass(`table-striped`);
    
    return super.render(indent);
  }
}

module.exports.Table = Table;
