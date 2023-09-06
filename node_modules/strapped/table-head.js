/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 table heads.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class TableHead extends html.TableHead {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.light(data.light || false);
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
      throw new TypeError(`TableHead.dark(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Light boolean getter/setter.
   * @signature light() Get the light boolean
   * @signature light(boolean) Set the light boolean as (boolean)
   * @return This object for call chaining
   */
  light(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._light;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._light = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableHead.light(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    if ( this.dark() )
      this.addClass(`thead-dark`);
    
    if ( this.light() )
      this.addClass(`thead-light`);
  
    return super.render(indent);
  }
}

module.exports.TableHead = TableHead;
