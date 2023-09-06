/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 select components.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Select extends html.Select {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.cols(data.cols || 0);
    this.controlSize(data.controlSize || '');
    this.horizontal(data.horizontal || false);
    this.inputCols(data.inputCols || 0);
    this.label(data.label || '');
    this.labelCols(data.labelCols || 0);
  }

  /**
   * Columns getter/setter.
   * @signature cols() Get the columns
   * @signature cols(number) Set the columns as (number)
   * @return This object for call chaining
   */
  cols(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._cols;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._cols = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Select.cols(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Control size getter/setter.
   * @signature controlSize() Get the control size
   * @signature controlSize(string) Set the control size as (string)
   * @return This object for call chaining
   */
  controlSize(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._controlSize;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._controlSize = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Select.controlSize(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Horizontal boolean getter/setter.
   * @signature horizontal() Get the horizontal boolean
   * @signature horizontal(boolean) Set the horizontal boolean as (boolean)
   * @return This object for call chaining
   */
  horizontal(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._horizontal;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._horizontal = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Select.horizontal(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Select columns getter/setter.
   * @signature inputCols() Get the select columns
   * @signature inputCols(number) Set the select columns as (number)
   * @return This object for call chaining
   */
  inputCols(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._inputCols;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._inputCols = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Select.inputCols(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Label getter/setter.
   * @signature label() Get the label
   * @signature label(string) Set the label as (string)
   * @return This object for call chaining
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Select.label(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Label columns getter/setter.
   * @signature labelCols() Get the label columns
   * @signature labelCols(number) Set the label columns as (number)
   * @return This object for call chaining
   */
  labelCols(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._labelCols;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._labelCols = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Select.labelCols(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }

  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    const div = new html.Div();
    
    div.addClass('form-group');
    
    if ( this.horizontal() )
      div.addClass('row');
    
    if ( !this.horizontal() && this.cols() > 0 )
      div.addClass(`col-${this.cols()}`);
    
    if ( this.label().length > 0 ) {
      const label = new html.Label();
      
      if ( this.controlSize().length > 0 )
        label.addClass(`col-form-label-${this.controlSize()}`);
      
      if ( this.horizontal() && this.labelCols() > 0 )
        label.addClass(`col-${this.labelCols()}`);
      
      if ( this.id().length > 0 )
        label.for(this.id());
      
      label.text(this.label());
      
      div.append(label);
    }
    
    const select = new html.Select();
    
    select.attributes(this.attributes());
    select.classes(this.classes());
    select.content(this.content());
    select.id(this.id());
    select.style(this.style());
    select.title(this.title());
    select.autofocus(this.autofocus());
    select.disabled(this.disabled());
    select.form(this.form());
    select.multiple(this.multiple());
    select.name(this.name());
    select.required(this.required());
    select.size(this.size());
    
    if ( this.controlSize().length > 0 )
      select.addClass(`form-control-${this.controlSize()}`);
    else
      select.addClass(`form-control`);
    
    if ( this.horizontal() && this.inputCols() > 0 )
      div.append(new html.Div().addClass(`col-${this.inputCols()}`).append(select));
    else
      div.append(select);

    return div.render(indent);
  }
}

module.exports.Select = Select;
