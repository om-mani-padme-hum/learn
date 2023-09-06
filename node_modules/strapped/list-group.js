/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 list groups.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class ListGroup extends html.UnorderedList {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.flush(data.flush || false);
    this.tablist(data.tablist || false);
  }
  
  /**
   * Flush boolean getter/setter.
   * @signature flush() Get the flush boolean
   * @signature flush(boolean) Set the flush boolean as (boolean)
   * @return This object for call chaining
   */
  flush(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._flush;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._flush = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ListGroup.flush(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Tab list boolean getter/setter.
   * @signature tablist() Get the tab list boolean
   * @signature tablist(boolean) Set the tab list boolean as (boolean)
   * @return This object for call chaining
   */
  tablist(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._tablist;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._tablist = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ListGroup.tablist(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`list-group`);

    if ( this.flush() )
      this.addClass(`list-group-flush`);
    
    if ( this.tablist() )
      this.attr('role', 'tablist');
    
    return super.render(indent);
  }
}

module.exports.ListGroup = ListGroup;
