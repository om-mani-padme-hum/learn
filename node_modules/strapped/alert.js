/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 alert components.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Alert extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.color(data.color || 'primary');
    this.dismissable(data.dismissable || false);
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
      throw new TypeError(`Alert.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Dismissable boolean getter/setter.
   * @signature dismissable() Get the dismissable boolean
   * @signature dismissable(boolean) Set the dismissable boolean as (boolean)
   * @return This object for call chaining
   */
  dismissable(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._dismissable;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._dismissable = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Alert.dismissable(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }

  /**
   * Add strong to heading.
   * @signature strong(string) Add strong (string) to heading
   * @return This object for call chaining
   */
  strong(arg1) {
    /** Add strong if string */
    if ( typeof arg1 == 'string' )
      this.append(new html.Strong().text(arg1));
    
    /** Handle errors */
    else
      throw new TypeError(`Alert.strong(): Invalid signature (${typeof arg1}).`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`alert alert-${this.color()}`);
    
    if ( this.dismissable() )
      this.addClass(`alert-dismissable fade show`);
    
    this.attr('role', 'alert');
    
    if ( this.dismissable() ) {
      const button = new html.Button().classes('close').attr('data-dismiss', 'alert').attr('aria-label', 'Close');
      
      button.append(new html.Span().attr('aria-hidden', 'true').append(new html.Text().text('&times;')));
    
      this.append(button);
    }
        
    return super.render(indent);
  }
}

module.exports.Alert = Alert;
