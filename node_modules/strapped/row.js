/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 rows.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Row extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.bottom(data.bottom || false);
    this.center(data.center || true);
    this.left(data.left || false);
    this.middle(data.middle || false);
    this.right(data.right || false);
    this.top(data.top || false);
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
      throw new TypeError(`Row.bottom(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Center boolean getter/setter.
   * @signature center() Get the center boolean
   * @signature center(boolean) Set the center boolean as (boolean)
   * @return This object for call chaining
   */
  center(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._center;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._center = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Row.center(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Left boolean getter/setter.
   * @signature left() Get the left boolean
   * @signature left(boolean) Set the left boolean as (boolean)
   * @return This object for call chaining
   */
  left(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._left;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._left = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Row.left(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Middle boolean getter/setter.
   * @signature middle() Get the middle boolean
   * @signature middle(boolean) Set the middle boolean as (boolean)
   * @return This object for call chaining
   */
  middle(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._middle;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._middle = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Row.middle(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Right boolean getter/setter.
   * @signature right() Get the right boolean
   * @signature right(boolean) Set the right boolean as (boolean)
   * @return This object for call chaining
   */
  right(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._right;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._right = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Row.right(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Top boolean getter/setter.
   * @signature top() Get the top boolean
   * @signature top(boolean) Set the top boolean as (boolean)
   * @return This object for call chaining
   */
  top(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._top;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._top = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Row.top(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    let horizontalCheck = 0, verticalCheck = 0;
    
    horizontalCheck += this.left() ? 1 : 0;
    horizontalCheck += this.center() ? 1 : 0;
    horizontalCheck += this.right() ? 1 : 0;
    
    if ( horizontalCheck > 1 )
      throw new RangeError(`Row.render(): There are multiple horizontal alignment flags set (left/center/right).`);
    
    verticalCheck += this.top() ? 1 : 0;
    verticalCheck += this.middle() ? 1 : 0;
    verticalCheck += this.bottom() ? 1 : 0;
    
    if ( verticalCheck > 1 )
      throw new RangeError(`Row.render(): There are multiple vertical alignment flags set (top/middle/bottom).`);
    
    this.addClass(`row`);
    
    if ( this.left() )
      this.addClass(`justify-content-start`);
    else if ( this.center() )
      this.addClass(`justify-content-center`);
    else if ( this.right() )
      this.addClass(`justify-content-end`);
    
    if ( this.top() )
      this.addClass(`align-items-start`);
    else if ( this.middle() )
      this.addClass(`align-items-center`);
    else if ( this.bottom() )
      this.addClass(`align-items-end`);
    
    return super.render(indent);
  }
}

module.exports.Row = Row;
