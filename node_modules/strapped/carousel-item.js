/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 carousel items.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class CarouselItem extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.alt(data.alt || '');
    this.caption(data.caption || '');
    this.description(data.description || '');
    this.src(data.src || '');
  }
  
  /**
   * Alternate text getter/setter.
   * @signature alt() Get the alternate text
   * @signature alt(string) Set the alternate text as (string)
   * @return This object for call chaining
   */
  alt(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._alt;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._alt = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CarouselItem.alt(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Caption getter/setter.
   * @signature caption() Get the caption
   * @signature caption(string) Set the caption as (string)
   * @return This object for call chaining
   */
  caption(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._caption;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._caption = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CarouselItem.caption(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Description getter/setter.
   * @signature description() Get the description
   * @signature description(string) Set the description as (string)
   * @return This object for call chaining
   */
  description(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._description;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._description = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`CarouselItem.description(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Source getter/setter.
   * @signature source() Get the source
   * @signature source(string) Set the source as (string)
   * @return This object for call chaining
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1;
    
    /** Handle errors */
    else
      throw new TypeError(`CarouselItem.src(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass('carousel-item');
    
    const image = new html.Image().src(this.src()).addClass('d-block w-100');
    
    if ( this.alt().length > 0 )
      image.alt(this.alt());
    
    this.append(image);
    
    if ( this.caption().length > 0 || this.description().length > 0 ) {
      const caption = new html.Div().addClass('carousel-caption d-none d-md-block');
      
      if ( this.caption().length > 0 )
        caption.append(new html.H5().append(new html.Text().text(this.caption())));
      
      if ( this.description().length > 0 )
        caption.append(new html.Paragraph().append(new html.Text().text(this.description())));
      
      this.append(caption);
    }
        
    return super.render(indent);
  }
}

module.exports.CarouselItem = CarouselItem;
