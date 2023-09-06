/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 input components.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Input extends html.Input {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.after(data.after || '');
    this.before(data.before || '');
    this.cols(data.cols || 0);
    this.controlSize(data.controlSize || '');
    this.horizontal(data.horizontal || false);
    this.inputCols(data.inputCols || 0);
    this.inputOffset(data.inputOffset || 0);
    this.label(data.label || '');
    this.labelCols(data.labelCols || 0);
  }

  /**
   * After getter/setter.
   * @signature after() Get the after
   * @signature after(string) Set the after as (string)
   * @return This object for call chaining
   */
  after(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._after;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._after = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.after(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Before getter/setter.
   * @signature before() Get the before
   * @signature before(string) Set the before as (string)
   * @return This object for call chaining
   */
  before(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._before;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._before = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.before(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`Input.cols(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Input.controlSize(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Input.horizontal(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Input columns getter/setter.
   * @signature inputCols() Get the input columns
   * @signature inputCols(number) Set the input columns as (number)
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
      throw new TypeError(`Input.inputCols(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Input offset getter/setter.
   * @signature inputOffset() Get the input offset
   * @signature inputOffset(number) Set the input offset as (number)
   * @return This object for call chaining
   */
  inputOffset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._inputOffset;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._inputOffset = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.inputOffset(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Input.label(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Input.labelCols(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( ( this.type() == 'checkbox' || this.type() == 'radio' ) && !this.horizontal() )
      div.addClass('form-check');
    else
      div.addClass('form-group');
    
    if ( this.horizontal() )
      div.addClass('row');
    
    if ( !this.horizontal() && this.cols() > 0 )
      div.addClass(`col-${this.cols()}`);
    
    if ( this.label().length > 0 && ( ( this.type() != 'checkbox' && this.type() != 'radio' ) || this.horizontal() ) ) {
      const label = new html.Label();
      
      if ( this.controlSize().length > 0 )
        label.addClass(`col-form-label-${this.size()}`);
      
      if ( this.horizontal() && this.labelCols() > 0 )
        label.addClass(`col-${this.labelCols()}`);
      
      if ( this.id().length > 0 )
        label.for(this.id());
      
      label.text(this.label());
      
      div.append(label);
    }
    
    let inputGroup = null;
    
    if ( this.before().length > 0 || this.after().length > 0 ) {
      inputGroup = new html.Div().addClass('input-group');
      div.append(inputGroup);
    }
    
    if ( this.before().length > 0 )
      inputGroup.append(new html.Div().addClass('input-group-prepend').append(new html.Span().addClass('input-group-text').text(this.before())));
    
    const input = new html.Input();
    
    input.attributes(this.attributes());
    input.classes(this.classes());
    input.id(this.id());
    input.style(this.style());
    input.title(this.title());
    input.accept(this.accept());
    input.alt(this.alt());
    input.autocomplete(this.autocomplete());
    input.autofocus(this.autofocus());
    input.checked(this.checked());
    input.dirname(this.dirname());
    input.disabled(this.disabled());
    input.form(this.form());
    input.formaction(this.formaction());
    input.formenctype(this.formenctype());
    input.formmethod(this.formmethod());
    input.formnovalidate(this.formnovalidate());
    input.formtarget(this.formtarget());
    input.height(this.height());
    input.list(this.list());
    input.max(this.max());
    input.maxlength(this.maxlength());
    input.min(this.min());
    input.multiple(this.multiple());
    input.name(this.name());
    input.pattern(this.pattern());
    input.placeholder(this.placeholder());
    input.readonly(this.readonly());
    input.required(this.required());
    input.size(this.size());
    input.src(this.src());
    input.step(this.step());
    input.type(this.type());
    input.value(this.value());
    input.width(this.width());
    
    if ( this.controlSize().length > 0 )
      input.addClass(`form-control-${this.controlSize()}`);
    else if ( input.type() != `checkbox` && input.type() != `radio` )
      input.addClass(`form-control`);
    
    if ( this.type() == 'checkbox' || this.type() == 'radio' ) {
      input.addClass(`form-check-input`);
      
      if ( this.horizontal() )
        input.addClass(`mt-1`).style(`height: 1rem;`);
    }
    
    if ( this.horizontal() && this.inputCols() > 0 ) {
      if ( this.before().length > 0 || this.after().length > 0 ) {
        inputGroup.addClass(`col-${this.inputCols()}`).append(input);
        
        if ( this.inputOffset() > 0 )
          inputGroup.addClass(`offset-${this.inputOffset()}`);
      } else {
        const div2 = new html.Div().addClass(`col-${this.inputCols()}`).append(input);
        
        div.append(div2);
        
        if ( this.inputOffset() > 0 )
          div2.addClass(`offset-${this.inputOffset()}`);
        
        if ( ( this.type() == 'checkbox' || this.type() == 'radio' ) && this.horizontal() )
          div2.addClass(`form-check ml-3`);
      }
    } else {
      if ( this.before().length > 0 || this.after().length > 0 )
        inputGroup.append(input);
      else
        div.append(input);
    }
    
    if ( this.after().length > 0 )
      inputGroup.append(new html.Div().addClass('input-group-append').append(new html.Span().addClass('input-group-text').text(this.after())));
    
    if ( this.label().length > 0 && ( this.type() == 'checkbox' || this.type() == 'radio' ) && !this.horizontal() ) {
      const label = new html.Label();
      
      if ( this.controlSize().length > 0 )
        label.addClass(`col-form-label-${this.controlSize()}`);
      
      label.addClass('form-check-label');
      
      if ( this.horizontal() && this.labelCols() > 0 )
        label.addClass(`col-${this.labelCols()}`);
      
      if ( this.id().length > 0 )
        label.for(this.id());
      
      label.text(this.label());
      
      div.append(label);
    }
    
    return div.render(indent);
  }
}

module.exports.Input = Input;
