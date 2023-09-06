/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 columns.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Col extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.break(data.break || '');
    this.bottom(data.bottom || false);
    this.middle(data.middle || false);
    this.offset(data.offset || 0);
    this.size(data.size || 0);
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
      throw new TypeError(`Col.bottom(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Breakpoint getter/setter.
   * @signature break() Get the breakpoint
   * @signature break(string) Set the breakpoint as (string)
   * @return This object for call chaining
   */
  break(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._break;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._break = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Col.break(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Col.center(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Col.left(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Col.middle(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }

  /**
   * Offset getter/setter.
   * @signature offset() Get the offset
   * @signature offset(number) Set the offset as (number)
   * @return This object for call chaining
   */
  offset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._offset;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._offset = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Col.offset(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Col.right(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Size getter/setter.
   * @signature size() Get the size
   * @signature size(number) Set the size as (number)
   * @return This object for call chaining
   */
  size(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._size;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._size = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Col.size(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Col.top(): Invalid signature (${typeof arg1}).`);
    
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
      throw new RangeError(`Col.render(): There are multiple horizontal alignment flags set (left/center/right).`);
    
    verticalCheck += this.top() ? 1 : 0;
    verticalCheck += this.middle() ? 1 : 0;
    verticalCheck += this.bottom() ? 1 : 0;
    
    if ( verticalCheck > 1 )
      throw new RangeError(`Col.render(): There are multiple vertical alignment flags set (top/middle/bottom).`);
    
    let className = `col`;
    
    if ( this.break().length > 0 )
      className += `-${this.break()}`;
    
    if ( this.size() > 0 )
      className += `-${this.size()}`;
    else
      className += `-auto`;
    
    this.addClass(className);
    
    if ( this.offset() > 0 ) {
      className = `offset`;
      
      if ( this.break().length > 0 )
        className += `-${this.break()}`;
      
      className += `-${this.offset()}`;
      
      this.addClass(className);
    }
    
    if ( this.left() )
      this.addClass(`text-left`);
    else if ( this.center() )
      this.addClass(`text-center`);
    else if ( this.right() )
      this.addClass(`text-rgiht`);
    
    if ( this.top() )
      this.addClass(`align-self-top`);
    else if ( this.middle() )
      this.addClass(`align-self-middle`);
    else if ( this.bottom() )
      this.addClass(`align-self-bottom`);
    
    return super.render(indent);
  }
}

module.exports.Col = Col;
