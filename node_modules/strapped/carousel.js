/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 carousels.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Carousel extends html.ContainerElement {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);

    this.controls(data.controls || false);
    this.indicators(data.indicators || false);
  }
  
  /**
   * Controls boolean getter/setter.
   * @signature controls() Get the controls boolean
   * @signature controls(boolean) Set the controls boolean as (boolean)
   * @return This object for call chaining
   */
  controls(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._controls;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._controls = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Carousel.controls(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Indicators boolean getter/setter.
   * @signature indicators() Get the indicators boolean
   * @signature indicators(boolean) Set the indicators boolean as (boolean)
   * @return This object for call chaining
   */
  indicators(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._indicators;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._indicators = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Carousel.indicators(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    const carousel = new html.Div();

    carousel.attributes(this.attributes());
    carousel.classes(this.classes());
    carousel.id(this.id());
    carousel.title(this.title());
    
    carousel.addClass(`carousel slide`).attr('data-ride', 'carousel');
    
    if ( this.indicators() ) {
      const list = new html.OrderedList().addClass('carousel-indicators');
      
      this.content().forEach((carouselItem, index) => {
        const item = new html.ListItem().attr('data-target', `#${this.id()}`).attr('data-slide-to', index);
      
        if ( index === 0 )
          item.addClass('active');
        
        list.append(item);
      });
      
      carousel.append(list);
    }
    
    const carouselInner = new html.Div().addClass('carousel-inner');
    
    this.content().forEach((carouselItem, index) => {
      if ( index === 0 )
        carouselItem.addClass('active');
      
      carouselInner.append(carouselItem);
    });

    carousel.append(carouselInner);

    if ( this.controls() ) {
      const prev = new html.Anchor().addClass('carousel-control-prev').href(`#${this.id()}`).attr('data-slide', 'prev');
      const next = new html.Anchor().addClass('carousel-control-next').href(`#${this.id()}`).attr('data-slide', 'next');
      
      prev.append(new html.Span().addClass('carousel-control-prev-icon'));
      next.append(new html.Span().addClass('carousel-control-next-icon'));
      
      carousel.append(prev);
      carousel.append(next);
    }
    
    return carousel.render(indent);
  }
}

module.exports.Carousel = Carousel;
