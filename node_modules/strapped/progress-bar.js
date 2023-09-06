/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 progress bars.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @todo Add support for screen readers and multiple bars
 */
class ProgressBar extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.color(data.color || 'primary');
    this.percent(data.percent || 0);
  }
  
  /**
   * Animated boolean getter/setter.
   * @signature animated() Get the animated boolean
   * @signature animated(boolean) Set the striped animated as (boolean)
   * @return This object for call chaining
   */
  animated(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._animated;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._animated = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ProgressBar.animated(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ProgressBar.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Percent getter/setter.
   * @signature percent() Get the percent
   * @signature percent(number) Set the percent as (number)
   * @return This object for call chaining
   */
  percent(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._percent;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._percent = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ProgressBar.percent(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`ProgressBar.striped(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`progress`);

    const div = new html.Div().addClass('progress-bar').attr('role', 'progressbar').style(`width: ${this.percent()}%;`);
    
    div.addClass(`bg-${this.color()}`);
    
    if ( this.animated() )
      div.addClass(`progress-bar-animated`);
    
    if ( this.striped() )
      div.addClass(`progress-bar-striped`);

    this.append(div);
    
    return super.render(indent);
  }
}

module.exports.ProgressBar = ProgressBar;
