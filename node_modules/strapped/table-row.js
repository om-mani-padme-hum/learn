/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 table rows.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class TableRow extends html.TableRow {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.color(data.color || '');
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
      throw new TypeError(`TableRow.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    if ( this.color().length > 0 )
      this.addClass(`table-${this.color()}`);
    
    return super.render(indent);
  }
}

module.exports.TableRow = TableRow;
