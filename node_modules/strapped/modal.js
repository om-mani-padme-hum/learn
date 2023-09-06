/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 modals.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Modal extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.middle(data.middle || false);
    this.size(data.size || ``);
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
      throw new TypeError(`Modal.middle(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Modal.size(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    if ( ![`sm`, `lg`, `xl`, ``].includes(this.size()) )
      throw new RangeError(`Modal.render(): Invalid size, must be 'sm', 'lg', or 'xl' if set.`);
    
    const div = new html.Div().addClass(`modal fade`).attr('tabindex', '-1').attr('role', 'dialog').id(this.id());
    const div2 = new html.Div().addClass(`modal-dialog`).attr('role', 'document');
    const div3 = new html.Div();
    
    if ( this.size().length > 0 )
      div2.addClass(`modal-${this.size()}`);
    
    if ( this.middle() )
      div2.addClass(`modal-dialog-centered`);
    
    div.append(div2);
    div2.append(div3);
    
    div3.attributes(this.attributes());
    div3.classes(this.classes());
    div3.content(this.content());
    div3.id('');
    div3.style(this.style());
    div3.title(this.title());
    div3.addClass(`modal-content`);
    
    return div.render(indent);
  }
}

module.exports.Modal = Modal;
