/** Require external modules */
const strapped = require('./index');
const html = require('ezhtml');
const octicons = require('octicons');
const util = require('util');

/**
 * Class for rendering Bootstrap 4 web pages.
 * @added v0.1.0
 * @updated v0.2.0
 * @updated v0.2.3
 * @updated v0.2.9
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Page extends html.Container {
  /**
   * Construct a new object and initialize.
   */
  constructor(data= {}) {
    super(data);
    
    this.init(data);
  }
  
  /**
   * Add new abbreviation to page.
   * @signature abbreviation() Add new abbreviation to last column
   * @signature abbreviation(string) Add new abbreviation to last container 
   * type indicated by (string)
   * @return This new abbreviation for call chaining
   */
  abbreviation(arg1) {
    /** Create new element */
    const abbreviation = new strapped.Abbreviation();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(abbreviation);
    else
      this.last('Col').append(abbreviation);
    
    /** Allow for call chaining */
    return abbreviation;
  }
  
  /**
   * Add new accordian to page.
   * @signature accordian() Add new accordian to last column
   * @signature accordian(string) Add new accordian to last container 
   * type indicated by (string)
   * @return This new accordian for call chaining
   */
  accordian(arg1) {
    /** Create new element */
    const accordian = new strapped.Accordian();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(accordian);
    else
      this.last('Col').append(accordian);
    
    /** Allow for call chaining */
    return accordian;
  }
  
  /**
   * Add new address to page.
   * @signature address() Add new address to last column
   * @signature address(string) Add new address to last container 
   * type indicated by (string)
   * @return This new address for call chaining
   */
  address(arg1) {
    /** Create new element */
    const address = new strapped.Address();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(address);
    else
      this.last('Col').append(address);
    
    /** Allow for call chaining */
    return address;
  }
  
  /**
   * Add new alert to page.
   * @signature alert() Add new alert to last column
   * @signature alert(string) Add new alert to last container 
   * type indicated by (string)
   * @return This new alert for call chaining
   */
  alert(arg1) {
    /** Create new element */
    const alert = new strapped.Alert();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(alert);
    else
      this.last('Col').append(alert);
    
    /** Allow for call chaining */
    return alert;
  }
  
  /**
   * @signature alertFromError(error[, lastContainer])
   * @added v0.2.0
   * @updated v0.2.3
   * @updated v0.2.9
   * @param error Error|StrappedError
   * @param lastContainer string
   * @returns [Row] 
   * @description Add new alert to body or `lastContainer` on page based on provided error.
   */
  alertFromError(err, lastContainer) {
    const row = new strapped.Row();
    const col = new strapped.Col();
    const alert = new strapped.Alert();

    if ( err.constructor.name == 'StrappedError' ) {
      /** For customizable GeodeErrors, transfer properties to alert */
      col.size(err.cols());
      alert.color(err.color());

      /** Toss in some octicons for certain color tyeps */
      if ( err.color() == 'success' )
        alert.strong(`${octicons.check.toSVG({ class: 'mr-2' })} ${err.strong()}`);
      else if ( err.color() == 'danger' )
        alert.strong(`${octicons.alert.toSVG({ class: 'mr-2' })} ${err.strong()}`);
      else if ( err.color() == 'warning' )
        alert.strong(`${octicons.bell.toSVG({ class: 'mr-2' })} ${err.strong()}`);
      else if ( err.color() == 'info' )
        alert.strong(`${octicons.question.toSVG({ class: 'mr-2' })} ${err.strong()}`);
      else
        alert.strong(err.strong());

      alert.text(err.text());

      /** These are designed to be user facing errors, so just debug stack on errors/warnings */
      if ( err.color() == 'error' || err.color() == 'warning' )
        console.log(err.stack());
    } else {
      /** For generic Errors, generate basic error alert */
      alert.color('danger').strong(`${octicons.alert.toSVG({ class: 'mr-2' })} Error:`).text(err.message);

      /** These are not designed to be user facing errors, make sure we've saved the stack in the error file */
      console.log(err.stack);
    }

    row.append(col);
    col.append(alert);

    /** Add to last container of indicated type */
    if ( typeof lastContainer == 'string' && lastContainer.length > 0 )
      this.last(lastContainer).append(row);
    else
      this.last('Body').append(row);

    /** Allow for call chaining */
    return row;
  }
  
  /**
   * Add new anchor to page.
   * @signature anchor() Add new anchor to last column
   * @signature anchor(string) Add new anchor to last container 
   * type indicated by (string)
   * @return This new anchor for call chaining
   */
  anchor(arg1) {
    /** Create new element */
    const anchor = new strapped.Anchor();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(anchor);
    else
      this.last('Col').append(anchor);
    
    /** Allow for call chaining */
    return anchor;
  }
  
  /**
   * Add new area to page.
   * @signature area() Add new area to last map
   * @signature area(string) Add new area to last container 
   * type indicated by (string)
   * @return This new area for call chaining
   */
  area(arg1) {
    /** Create new element */
    const area = new strapped.Area();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(area);
    else
      this.last('Map').append(area);
    
    /** Allow for call chaining */
    return area;
  }
  
  /**
   * Add new article to page.
   * @signature article() Add new article to last column
   * @signature article(string) Add new article to last container 
   * type indicated by (string)
   * @return This new article for call chaining
   */
  article(arg1) {
    /** Create new element */
    const article = new strapped.Article();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(article);
    else
      this.last('Col').append(article);
    
    /** Allow for call chaining */
    return article;
  }
  
  /**
   * Add new aside to page.
   * @signature aside() Add new aside to last column
   * @signature aside(string) Add new aside to last container 
   * type indicated by (string)
   * @return This new aside for call chaining
   */
  aside(arg1) {
    /** Create new element */
    const aside = new strapped.Aside();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(aside);
    else
      this.last('Col').append(aside);
    
    /** Allow for call chaining */
    return aside;
  }
  
  /**
   * Add new audio to page.
   * @signature audio() Add new audio to last column
   * @signature audio(string) Add new audio to last container 
   * type indicated by (string)
   * @return This new audio for call chaining
   */
  audio(arg1) {
    /** Create new element */
    const audio = new strapped.Audio();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(audio);
    else
      this.last('Col').append(audio);
    
    /** Allow for call chaining */
    return audio;
  }
  
  /**
   * Add new base to page.
   * @signature base() Add new base to last head
   * @signature base(string) Add new base to last container 
   * type indicated by (string)
   * @return This new base for call chaining
   */
  base(arg1) {
    /** Create new element */
    const base = new strapped.Base();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(base);
    else
      this.last('Head').append(base);
    
    /** Allow for call chaining */
    return base;
  }
  
  /**
   * Add new badge to page.
   * @signature badge() Add new badge to last column
   * @signature badge(string) Add new badge to last container 
   * type indicated by (string)
   * @return This new badge for call chaining
   */
  badge(arg1) {
    /** Create new element */
    const badge = new strapped.Badge();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(badge);
    else
      this.last('Col').append(badge);
    
    /** Allow for call chaining */
    return badge;
  }
  
  /**
   * Add new badge link to page.
   * @signature badgeLink() Add new badge link to last column
   * @signature badgeLink(string) Add new badge link to last container 
   * type indicated by (string)
   * @return This new badge link for call chaining
   */
  badgeLink(arg1) {
    /** Create new element */
    const badgeLink = new strapped.BadgeLink();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(badgeLink);
    else
      this.last('Col').append(badgeLink);
    
    /** Allow for call chaining */
    return badgeLink;
  }
  
  /**
   * Add new bidirectional isolation to page.
   * @signature bidirectionalIsolation() Add new bidirectional isolation to last column
   * @signature bidirectionalIsolation(string) Add new bidirectional isolation to last container 
   * type indicated by (string)
   * @return This new bidirectional isolation for call chaining
   */
  bidirectionalIsolation(arg1) {
    /** Create new element */
    const bidirectionalIsolation = new strapped.BidirectionalIsolation();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(bidirectionalIsolation);
    else
      this.last('Col').append(bidirectionalIsolation);
    
    /** Allow for call chaining */
    return bidirectionalIsolation;
  }
  
  /**
   * Add new bidirectional override to page.
   * @signature bidirectionalOverride() Add new bidirectional override to last column
   * @signature bidirectionalOverride(string) Add new bidirectional override to last container 
   * type indicated by (string)
   * @return This new bidirectional override for call chaining
   */
  bidirectionalOverride(arg1) {
    /** Create new element */
    const bidirectionalOverride = new strapped.BidirectionalOverride();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(bidirectionalOverride);
    else
      this.last('Col').append(bidirectionalOverride);
    
    /** Allow for call chaining */
    return bidirectionalOverride;
  }
  
  /**
   * Add new blockquote to page.
   * @signature blockquote() Add new blockquote to last column
   * @signature blockquote(string) Add new blockquote to last container 
   * type indicated by (string)
   * @return This new blockquote for call chaining
   */
  blockquote(arg1) {
    /** Create new element */
    const blockquote = new strapped.Blockquote();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(blockquote);
    else
      this.last('Col').append(blockquote);
    
    /** Allow for call chaining */
    return blockquote;
  }
  
  /**
   * Add new body to page.
   * @signature body() Add new body to last html
   * @signature body(string) Add new body to last container 
   * type indicated by (string)
   * @return This new body for call chaining
   */
  body(arg1) {
    /** Create new element */
    const body = new strapped.Body();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(body);
    else
      this.last('HTML').append(body);
    
    /** Allow for call chaining */
    return body;
  }
  
  /**
   * Add new bold to page.
   * @signature bold() Add new bold to last column
   * @signature bold(string) Add new bold to last container 
   * type indicated by (string)
   * @return This new bold for call chaining
   */
  bold(arg1) {
    /** Create new element */
    const bold = new strapped.Bold();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(bold);
    else
      this.last('Col').append(bold);
    
    /** Allow for call chaining */
    return bold;
  }
  
  /**
   * Add new button to page.
   * @signature button() Add new button to last column
   * @signature button(string) Add new button to last container 
   * type indicated by (string)
   * @return This new button for call chaining
   */
  button(arg1) {
    /** Create new element */
    const button = new strapped.Button();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(button);
    else
      this.last('Col').append(button);
    
    /** Allow for call chaining */
    return button;
  }
  
  /**
   * Add new button checkbox to page.
   * @signature buttonCheckbox() Add new button checkbox to last column
   * @signature buttonCheckbox(string) Add new button checkbox to last container 
   * type indicated by (string)
   * @return This new button checkbox for call chaining
   */
  buttonCheckbox(arg1) {
    /** Create new element */
    const buttonCheckbox = new strapped.ButtonCheckbox();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(buttonCheckbox);
    else
      this.last('Col').append(buttonCheckbox);
    
    /** Allow for call chaining */
    return buttonCheckbox;
  }
  
  /**
   * Add new button group to last column.
   * @signature buttonGroup() Add new button group to last column
   * @signature buttonGroup(string) Add new button group to last container 
   * type indicated by (string)
   * @return This new button group for call chaining
   */
  buttonGroup(arg1) {
    /** Create new element */
    const buttonGroup = new strapped.ButtonGroup();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(buttonGroup);
    else
      this.last('Col').append(buttonGroup);
    
    /** Allow for call chaining */
    return buttonGroup;
  }
  
  /**
   * Add new button link to page.
   * @signature buttonLink() Add new button link to last column
   * @signature buttonLink(string) Add new button link to last container 
   * type indicated by (string)
   * @return This new button link for call chaining
   */
  buttonLink(arg1) {
    /** Create new element */
    const buttonLink = new strapped.ButtonLink();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(buttonLink);
    else
      this.last('Col').append(buttonLink);
    
    /** Allow for call chaining */
    return buttonLink;
  }
  
  /**
   * Add new button radio to page.
   * @signature buttonRadio() Add new button radio to last column
   * @signature buttonRadio(string) Add new button radio to last container 
   * type indicated by (string)
   * @return This new button radio for call chaining
   */
  buttonRadio(arg1) {
    /** Create new element */
    const buttonRadio = new strapped.ButtonRadio();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(buttonRadio);
    else
      this.last('Col').append(buttonRadio);
    
    /** Allow for call chaining */
    return buttonRadio;
  }
  
  /**
   * Add new button toolbar to last column.
   * @signature buttonToolbar() Add new button toolbar to last column
   * @signature buttonToolbar(string) Add new button toolbar to last container 
   * type indicated by (string)
   * @return This new button toolbar for call chaining
   */
  buttonToolbar(arg1) {
    /** Create new element */
    const buttonToolbar = new strapped.ButtonToolbar();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(buttonToolbar);
    else
      this.last('Col').append(buttonToolbar);
    
    /** Allow for call chaining */
    return buttonToolbar;
  }
  
  /**
   * Add new canvas to page.
   * @signature canvas() Add new canvas to last column
   * @signature canvas(string) Add new canvas to last container 
   * type indicated by (string)
   * @return This new canvas for call chaining
   */
  canvas(arg1) {
    /** Create new element */
    const canvas = new strapped.Canvas();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(canvas);
    else if ( this.last('Col') )
      this.last('Col').append(canvas);
    else
      this.last('Body').append(canvas);
    
    /** Allow for call chaining */
    return canvas;
  }
  
  /**
   * Add new caption to page.
   * @signature caption() Add new caption to last column
   * @signature caption(string) Add new caption to last container 
   * type indicated by (string)
   * @return This new caption for call chaining
   */
  caption(arg1) {
    /** Create new element */
    const caption = new strapped.Caption();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(caption);
    else
      this.last('Col').append(caption);
    
    /** Allow for call chaining */
    return caption;
  }
  
  /**
   * Add new card to page.
   * @signature card() Add new card to last column
   * @signature card(string) Add new card to last container type indicated by (string)
   * @return This new card for call chaining
   */
  card(arg1) {
    /** Create new card */
    const card = new strapped.Card();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(card);
    else
      this.last('Col').append(card);
    
    /** Allow for call chaining */
    return card;
  }
  
  /**
   * Add new card body to page.
   * @signature cardBody() Add new card body to last card
   * @signature cardBody(string) Add new card body to container type indicated by (string)
   * @return This new card body for call chaining
   */
  cardBody(arg1) {
    /** Create new element */
    const cardBody = new strapped.CardBody();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardBody);
    else
      this.last('Card').append(cardBody);
    
    /** Allow for call chaining */
    return cardBody;
  }
  
  /**
   * Add new card columns to page.
   * @signature cardColumns() Add new card columns to last column
   * @signature cardColumns(string) Add new card columns to container type indicated by (string)
   * @return This new card columns for call chaining
   */
  cardColumns(arg1) {
    /** Create new element */
    const cardColumns = new strapped.CardColumns();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardColumns);
    else
      this.last('Col').append(cardColumns);
    
    /** Allow for call chaining */
    return cardColumns;
  }
  
  /**
   * Add new card deck to page.
   * @signature cardDeck() Add new card deck to last column
   * @signature cardDeck(string) Add new card deck to container type indicated by (string)
   * @return This new card deck for call chaining
   */
  cardDeck(arg1) {
    /** Create new element */
    const cardDeck = new strapped.CardDeck();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardDeck);
    else
      this.last('Col').append(cardDeck);
    
    /** Allow for call chaining */
    return cardDeck;
  }
  
  /**
   * Add new card footer to page.
   * @signature cardFooter() Add new card footer to last card
   * @signature cardFooter(string) Add new card footer to container type indicated by (string)
   * @return This new card footer for call chaining
   */
  cardFooter(arg1) {
    /** Create new element */
    const cardFooter = new strapped.CardFooter();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardFooter);
    else
      this.last('Card').append(cardFooter);
    
    /** Allow for call chaining */
    return cardFooter;
  }
  
  /**
   * Add new card group to page.
   * @signature cardGroup() Add new card group to last column
   * @signature cardGroup(string) Add new card group to container type indicated by (string)
   * @return This new card deck for call chaining
   */
  cardGroup(arg1) {
    /** Create new element */
    const cardGroup = new strapped.CardGroup();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardGroup);
    else
      this.last('Col').append(cardGroup);
    
    /** Allow for call chaining */
    return cardGroup;
  }
  
  /**
   * Add new card header to page.
   * @signature cardHeader() Add new card header to last card
   * @signature cardGroup(string) Add new card group to container type indicated by (string)
   * @return This new card header for call chaining
   */
  cardHeader(arg1) {
    /** Create new element */
    const cardHeader = new strapped.CardHeader();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardHeader);
    else
      this.last('Card').append(cardHeader);
    
    /** Allow for call chaining */
    return cardHeader;
  }
  
  /**
   * Add new card image to page.
   * @signature cardImage() Add new card image to top of last card
   * @signature cardImage(string) Add new card image to last container 
   * type indicated by (string)
   * @return This new card image for call chaining
   */
  cardImage(arg1) {
    /** Create new element */
    const cardImage = new strapped.CardImage();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardImage);
    else
      this.last('Card').append(cardImage);
    
    /** Allow for call chaining */
    return cardImage;
  }
  
  /**
   * Add new card image overlay to page.
   * @signature cardImageOverlay() Add new card image overlay to last card
   * @signature cardImageOverlay(string) Add new card image overlay to last container 
   * type indicated by (string)
   * @return This new card image overlay for call chaining
   */
  cardImageOverlay(arg1) {
    /** Create new element */
    const cardImageOverlay = new strapped.CardImageOverlay();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(cardImageOverlay);
    else
      this.last('Card').append(cardImageOverlay);
    
    /** Allow for call chaining */
    return cardImageOverlay;
  }
  
  /**
   * Add new carousel to last column.
   * @signature carousel() Add new carousel to last column
   * @signature carousel(string) Add new carousel to last container type indicated by (string)
   * @return This new carousel for call chaining
   */
  carousel(arg1) {
    /** Create new element */
    const carousel = new strapped.Carousel();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(carousel);
    else
      this.last('Col').append(carousel);
    
    /** Allow for call chaining */
    return carousel;
  }
  
  /**
   * Add new carousel item to page.
   * @signature carouselItem() Add new carousel item to last carousel
   * @signature carouselItem(string) Add new carousel item to last container type 
   * indicated by (string)
   * @return This new carousel item for call chaining
   */
  carouselItem(arg1) {
    /** Create new element */
    const carouselItem = new strapped.CarouselItem();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(carouselItem);
    else
      this.last('Carousel').append(carouselItem);
    
    /** Allow for call chaining */
    return carouselItem;
  }
  
  /**
   * Add new citation to page.
   * @signature citation() Add new citation to last column
   * @signature citation(string) Add new citation to last container 
   * type indicated by (string)
   * @return This new citation for call chaining
   */
  citation(arg1) {
    /** Create new element */
    const citation = new strapped.Citation();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(citation);
    else
      this.last('Col').append(citation);
    
    /** Allow for call chaining */
    return citation;
  }
  
  /**
   * Add new code to page.
   * @signature code() Add new code to last column
   * @signature code(string) Add new code to last container 
   * type indicated by (string)
   * @return This new code for call chaining
   */
  code(arg1) {
    /** Create new element */
    const code = new strapped.Code();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(code);
    else
      this.last('Col').append(code);
    
    /** Allow for call chaining */
    return code;
  }
  
  /**
   * Add new column to page.
   * @signature col() Add new column to last row
   * @signature col(string) Add new column to last container type indicated by (string)
   * @return This new column for call chaining
   */
  col(arg1) {
    /** Create new element */
    const col = new strapped.Col();
    
    /** Add to last container of indicated type */
    if ( arg1 == 'parent' )
      this.lastParent('Row').append(col);
    else if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(col);
    else
      this.last('Row').append(col);
    
    /** Allow for call chaining */
    return col;
  }

  /**
   * Add new collapse to page.
   * @signature collapse() Add new collapse to last column
   * @signature collapse(string) Add new collapse to container type indicated by (string)
   * @return This new collapse for call chaining
   */
  collapse(arg1) {
    /** Create new element */
    const collapse = new strapped.Collapse();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(collapse);
    else
      this.last('Col').append(collapse);
    
    /** Allow for call chaining */
    return collapse;
  }
  
  /**
   * Add new column group to page.
   * @signature columnGroup() Add new column group to last table
   * @signature columnGroup(string) Add new column group to last container 
   * type indicated by (string)
   * @return This new column group for call chaining
   */
  columnGroup(arg1) {
    /** Create new element */
    const columnGroup = new strapped.ColumnGroup();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(columnGroup);
    else
      this.last('Table').append(columnGroup);
    
    /** Allow for call chaining */
    return columnGroup;
  }
  
  /**
   * Add new column to page.
   * @signature column() Add new column to last column group
   * @signature column(string) Add new column to last container 
   * type indicated by (string)
   * @return This new column for call chaining
   */
  column(arg1) {
    /** Create new element */
    const column = new strapped.Column();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(column);
    else
      this.last('ColumnGroup').append(column);
    
    /** Allow for call chaining */
    return column;
  }
  
  /**
   * Add new data list to page.
   * @signature dataList() Add new data list to last column
   * @signature dataList(string) Add new data list to container type indicated by (string)
   * @return This new data list for call chaining
   */
  dataList(arg1) {
    /** Create new element */
    const dataList = new strapped.DataList();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(dataList);
    else
      this.last('Col').append(dataList);
    
    /** Allow for call chaining */
    return dataList;
  }
  
  /**
   * Add new definition to page.
   * @signature definition() Add new definition to last column
   * @signature definition(string) Add new definition to container type indicated by (string)
   * @return This new definition for call chaining
   */
  definition(arg1) {
    /** Create new element */
    const definition = new strapped.Definition();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(definition);
    else
      this.last('Col').append(definition);
    
    /** Allow for call chaining */
    return definition;
  }
  
  /**
   * Add new definition description to page.
   * @signature definitionDescription() Add new definition description to last definition list
   * @signature definitionDescription(string) Add new definition description to container 
   * type indicated by (string)
   * @return This new definition description for call chaining
   */
  definitionDescription(arg1) {
    /** Create new element */
    const definitionDescription = new strapped.DefinitionDescription();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(definitionDescription);
    else
      this.last('DefinitionList').append(definitionDescription);
    
    /** Allow for call chaining */
    return definitionDescription;
  }
  
  /**
   * Add new definition list to page.
   * @signature definitionList() Add new definition list to last column
   * @signature definitionList(string) Add new definition list to container 
   * type indicated by (string)
   * @return This new definition list for call chaining
   */
  definitionList(arg1) {
    /** Create new element */
    const definitionList = new strapped.DefinitionList();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(definitionList);
    else
      this.last('Col').append(definitionList);
    
    /** Allow for call chaining */
    return definitionList;
  }
  
  /**
   * Add new definition term to page.
   * @signature definitionTerm() Add new definition term to last definition list
   * @signature definitionTerm(string) Add new definition term to container 
   * type indicated by (string)
   * @return This new definition term for call chaining
   */
  definitionTerm(arg1) {
    /** Create new element */
    const definitionTerm = new strapped.DefinitionTerm();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(definitionTerm);
    else
      this.last('DefinitionList').append(definitionTerm);
    
    /** Allow for call chaining */
    return definitionTerm;
  }
  
  /**
   * Add new deleted to page.
   * @signature deleted() Add new deleted to last column
   * @signature deleted(string) Add new deleted to container type indicated by (string)
   * @return This new deleted for call chaining
   */
  deleted(arg1) {
    /** Create new element */
    const deleted = new strapped.Deleted();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(deleted);
    else
      this.last('Col').append(deleted);
    
    /** Allow for call chaining */
    return deleted;
  }
  
  /**
   * Add new details to page.
   * @signature details() Add new details to last column
   * @signature details(string) Add new details to container type indicated by (string)
   * @return This new details for call chaining
   */
  details(arg1) {
    /** Create new element */
    const details = new strapped.Details();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(details);
    else
      this.last('Col').append(details);
    
    /** Allow for call chaining */
    return details;
  }
  
  /**
   * Add new dialog to page.
   * @signature dialog() Add new dialog to column
   * @signature dialog(string) Add new dialog to container type indicated by (string)
   * @return This new dialog for call chaining
   */
  dialog(arg1) {
    /** Create new element */
    const dialog = new strapped.Dialog();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(dialog);
    else
      this.last('Col').append(dialog);
    
    /** Allow for call chaining */
    return dialog;
  }
  
  /**
   * Add new div to page.
   * @signature div() Add new div to last column
   * @signature div(string) Add new div to last container type indicated by (string)
   * @return This new div for call chaining
   */
  div(arg1) {
    /** Create new element */
    const div = new strapped.Div();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(div);
    else
      this.last('Col').append(div);
    
    /** Allow for call chaining */
    return div;
  }
  
  /**
   * Add new dropdown divider to page.
   * @signature dropdownDivider() Add new dropdown divider to last dropdown menu
   * @signature dropdownDivider(string) Add new dropdown divider to last container 
   * type indicated by (string)
   * @return This new dropdown divider for call chaining
   */
  dropdownDivider(arg1) {
    /** Create new element */
    const dropdownDivider = new strapped.DropdownDivider();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(dropdownDivider);
    else
      this.last('DropdownMenu').append(dropdownDivider);
    
    /** Allow for call chaining */
    return dropdownDivider;
  }
  
  /**
   * Add new dropdown header to page.
   * @signature dropdownHeader() Add new dropdown header to last dropdown menu
   * @signature dropdownHeader(string) Add new dropdown header to last container 
   * type indicated by (string)
   * @return This new dropdown header for call chaining
   */
  dropdownHeader(arg1) {
    /** Create new element */
    const dropdownHeader = new strapped.DropdownHeader();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(dropdownHeader);
    else
      this.last('DropdownMenu').append(dropdownHeader);
    
    /** Allow for call chaining */
    return dropdownHeader;
  }
  
  /**
   * Add new dropdown item to page.
   * @signature dropdownItem() Add new dropdown item to last dropdown menu
   * @signature dropdownItem(string) Add new dropdown item to last container 
   * type indicated by (string)
   * @return This new dropdown item for call chaining
   */
  dropdownItem(arg1) {
    /** Create new element */
    const dropdownItem = new strapped.DropdownItem();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(dropdownItem);
    else
      this.last('DropdownMenu').append(dropdownItem);
    
    /** Allow for call chaining */
    return dropdownItem;
  }
  
  /**
   * Add new dropdown menu to page.
   * @signature dropdownMenu() Add new dropdown menu to last column
   * @signature dropdownMenu(string) Add new dropdown menu to last container 
   * type indicated by (string)
   * @return This new dropdown menu for call chaining
   */
  dropdownMenu(arg1) {
    /** Create new element */
    const dropdownMenu = new strapped.DropdownMenu();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(dropdownMenu);
    else
      this.last('Col').append(dropdownMenu);
    
    /** Allow for call chaining */
    return dropdownMenu;
  }
  
  /**
   * Add new embed to page.
   * @signature embed() Add new embed to last column
   * @signature embed(string) Add new embed to container type indicated by (string)
   * @return This new embed for call chaining
   */
  embed(arg1) {
    /** Create new element */
    const embed = new strapped.Embed();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(embed);
    else
      this.last('Col').append(embed);
    
    /** Allow for call chaining */
    return embed;
  }
  
  /**
   * Add new emphasized to page.
   * @signature emphasized() Add new emphasized to last column
   * @signature emphasized(string) Add new emphasized to container type indicated by (string)
   * @return This new emphasized for call chaining
   */
  emphasized(arg1) {
    /** Create new element */
    const emphasized = new strapped.Emphasized();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(emphasized);
    else
      this.last('Col').append(emphasized);
    
    /** Allow for call chaining */
    return emphasized;
  }
  
  /**
   * Add new field set to page.
   * @signature fieldSet() Add new field set to last column
   * @signature fieldSet(string) Add new field set to container type indicated by (string)
   * @return This new field set for call chaining
   */
  fieldSet(arg1) {
    /** Create new element */
    const fieldSet = new strapped.FieldSet();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(fieldSet);
    else
      this.last('Col').append(fieldSet);
    
    /** Allow for call chaining */
    return fieldSet;
  }
  
  /**
   * Add new figure to page.
   * @signature figure() Add new figure to last column
   * @signature figure(string) Add new figure to container type indicated by (string)
   * @return This new figure for call chaining
   */
  figure(arg1) {
    /** Create new element */
    const figure = new strapped.Figure();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(figure);
    else
      this.last('Col').append(figure);
    
    /** Allow for call chaining */
    return figure;
  }
  
  /**
   * Add new figure caption to page.
   * @signature figureCaption() Add new figure caption to last figure
   * @signature figureCaption(string) Add new figure caption to container type indicated by (string)
   * @return This new figure caption for call chaining
   */
  figureCaption(arg1) {
    /** Create new element */
    const figureCaption = new strapped.FigureCaption();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(figureCaption);
    else
      this.last('Figure').append(figureCaption);
    
    /** Allow for call chaining */
    return figureCaption;
  }
  
  /**
   * Add new footer to page.
   * @signature footer() Add new footer to last body
   * @signature footer(string) Add new footer to container type indicated by (string)
   * @return This new footer for call chaining
   */
  footer(arg1) {
    /** Create new element */
    const footer = new strapped.Footer();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(footer);
    else
      this.last('Body').append(footer);
    
    /** Allow for call chaining */
    return footer;
  }
  
  /**
   * Add new form to page.
   * @signature form() Add new form to last column
   * @signature form(string) Add new form to last container type indicated by (string)
   * @return This new form for call chaining
   */
  form(arg1) {
    /** Create new element */
    const form = new strapped.Form();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(form);
    else
      this.last('Col').append(form);
    
    /** Allow for call chaining */
    return form;
  }
  
  /**
   * Add new head to page.
   * @signature head() Add new head to last html
   * @signature head(string) Add new head to last container type indicated by (string)
   * @return This new head for call chaining
   */
  head(arg1) {
    /** Create new element */
    const head = new strapped.Head();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(head);
    else
      this.last('HTML').append(head);
    
    /** Allow for call chaining */
    return head;
  }
  
  /**
   * Add new header to page.
   * @signature header() Add new header to last body
   * @signature header(string) Add new header to container type indicated by (string)
   * @return This new header for call chaining
   */
  header(arg1) {
    /** Create new element */
    const header = new strapped.Header();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(header);
    else
      this.last('Body').append(header);
    
    /** Allow for call chaining */
    return header;
  }
  
  /**
   * Add new rank 1 heading to page.
   * @signature h1() Add new rank 1 heading to last column
   * @signature h1(string) Add new rank 1 heading to last container type indicated by (string)
   * @return This new heading for call chaining
   */
  h1(arg1) {
    /** Create new element */
    const heading = new strapped.H1();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(heading);
    else
      this.last('Col').append(heading);
    
    /** Allow for call chaining */
    return heading;
  }
  
  /**
   * Add new rank 2 heading to page.
   * @signature h2() Add new rank 2 heading to last column
   * @signature h2(string) Add new rank 2 heading to last container type indicated by (string)
   * @return This new heading for call chaining
   */
  h2(arg1) {
    /** Create new element */
    const heading = new strapped.H2();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(heading);
    else
      this.last('Col').append(heading);
    
    /** Allow for call chaining */
    return heading;
  }
  
  /**
   * Add new rank 3 heading to page.
   * @signature h3() Add new rank 3 heading to last column
   * @signature h3(string) Add new rank 3 heading to last container type indicated by (string)
   * @return This new heading for call chaining
   */
  h3(arg1) {
    /** Create new element */
    const heading = new strapped.H3();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(heading);
    else
      this.last('Col').append(heading);
    
    /** Allow for call chaining */
    return heading;
  }
  
  /**
   * Add new rank 4 heading to page.
   * @signature h4() Add new rank 4 heading to last column
   * @signature h4(string) Add new rank 4 heading to last container type indicated by (string)
   * @return This new heading for call chaining
   */
  h4(arg1) {
    /** Create new element */
    const heading = new strapped.H4();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(heading);
    else
      this.last('Col').append(heading);
    
    /** Allow for call chaining */
    return heading;
  }
  
  /**
   * Add new rank 5 heading to page.
   * @signature h5() Add new rank 5 heading to last column
   * @signature h5(string) Add new rank 5 heading to last container type indicated by (string)
   * @return This new heading for call chaining
   */
  h5(arg1) {
    /** Create new element */
    const heading = new strapped.H5();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(heading);
    else
      this.last('Col').append(heading);
    
    /** Allow for call chaining */
    return heading;
  }
  
  /**
   * Add new rank 6 heading to page.
   * @signature h6() Add new rank 6 heading to last column
   * @signature h6(string) Add new rank 6 heading to last container type indicated by (string)
   * @return This new heading for call chaining
   */
  h6(arg1) {
    /** Create new element */
    const heading = new strapped.H6();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(heading);
    else
      this.last('Col').append(heading);
    
    /** Allow for call chaining */
    return heading;
  }
  
  /**
   * Add new heading group to page.
   * @signature headingGroup() Add new heading group to last column
   * @signature headingGroup(string) Add new heading group to last container type 
   * indicated by (string)
   * @return This new heading group for call chaining
   */
  headingGroup(arg1) {
    /** Create new element */
    const headingGroup = new strapped.HeadingGroup();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(headingGroup);
    else
      this.last('Col').append(headingGroup);
    
    /** Allow for call chaining */
    return headingGroup;
  }
  
  /**
   * Add new horizontal rule to page.
   * @signature rule() Add new horizontal rule to last column
   * @signature rule(string) Add new horizontal rule to last container type 
   * indicated by (string)
   * @return This new horizontal rule for call chaining
   */
  horizontalRule(arg1) {
    /** Create new element */
    const horizontalRule = new strapped.HorizontalRule();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(horizontalRule);
    else
      this.last('Col').append(horizontalRule);
    
    /** Allow for call chaining */
    return horizontalRule;
  }
  
  /**
   * Add new html to page.
   * @signature html() Add new html to page
   * @signature html(string) Add new html to last container type 
   * indicated by (string)
   * @return This new html for call chaining
   */
  html(arg1) {
    /** Create new element */
    const html = new strapped.HTML();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(html);
    else
      this.append(html);
    
    /** Allow for call chaining */
    return html;
  }
  
  /**
   * Find item by ID number.
   * @signature id(string) Get item with ID matching (string)
   * @return The found item
   */
  id(arg1) {
    let element = null;
    
    const getItemByID = (parent, id) => {
      if ( typeof parent.id == 'function' && parent.id() == id )   
        element = parent;
      
      if ( typeof parent.content == 'function' && typeof parent.content() == 'object' && parent.content().constructor.name == 'Array' ) {
        parent.content().forEach((item) => {
          getItemByID(item, id);
        });
      }
    };

    this.content().forEach((item) => {
      getItemByID(item, arg1);
    });
        
    return element;
  }
  
  /**
   * Add new image to page.
   * @signature image() Add new image to last column
   * @signature image(string) Add new image to last container type 
   * indicated by (string)
   * @return This new image for call chaining
   */
  image(arg1) {
    /** Create new element */
    const image = new strapped.Image();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(image);
    else
      this.last('Col').append(image);
    
    /** Allow for call chaining */
    return image;
  }
  
  /**
   * Add new input to page.
   * @signature input() Add new input to last form
   * @signature input(string) Add new input to last container type indicated by (string)
   * @return This new input for call chaining
   */
  input(arg1) {
    /** Create new element */
    const input = new strapped.Input();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(input);
    else
      this.last('Form').append(input);
    
    /** Allow for call chaining */
    return input;
  }
  
  /**
   * Add new input set to page.
   * @signature inputSet() Add new input set to last form
   * @signature inputSet(string) Add new input set to last container type 
   * indicated by (string)
   * @return This new input set for call chaining
   */
  inputSet(arg1) {
    /** Create new element */
    const inputSet = new strapped.InputSet();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(inputSet);
    else
      this.last('Form').append(inputSet);
    
    /** Allow for call chaining */
    return inputSet;
  }
  
  /**
   * Add new inserted to page.
   * @signature inserted() Add new inserted to last column
   * @signature inserted(string) Add new inserted to last container type 
   * indicated by (string)
   * @return This new inserted for call chaining
   */
  inserted(arg1) {
    /** Create new element */
    const inserted = new strapped.Inserted();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(inserted);
    else
      this.last('Col').append(inserted);
    
    /** Allow for call chaining */
    return inserted;
  }
  
  /**
   * Add new italic to page.
   * @signature italic() Add new italic to last column
   * @signature italic(string) Add new italic to last container type 
   * indicated by (string)
   * @return This new italic for call chaining
   */
  italic(arg1) {
    /** Create new element */
    const italic = new strapped.Italic();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(italic);
    else
      this.last('Col').append(italic);
    
    /** Allow for call chaining */
    return italic;
  }
  
  /**
   * Add new jumbotron to page.
   * @signature jumbotron() Add new jumbotron to last column
   * @signature jumbotron(string) Add new jumbotron to last container type 
   * indicated by (string)
   * @return This new jumbotron for call chaining
   */
  jumbotron(arg1) {
    /** Create new element */
    const jumbotron = new strapped.Jumbotron();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(jumbotron);
    else
      this.last('Col').append(jumbotron);
    
    /** Allow for call chaining */
    return jumbotron;
  }
  
  /**
   * Add new keyboard to page.
   * @signature keyboard() Add new keyboard to last column
   * @signature keyboard(string) Add new keyboard to last container type 
   * indicated by (string)
   * @return This new keyboard for call chaining
   */
  keyboard(arg1) {
    /** Create new element */
    const keyboard = new strapped.Keyboard();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(keyboard);
    else
      this.last('Col').append(keyboard);
    
    /** Allow for call chaining */
    return keyboard;
  }
  
  /**
   * Add new label to page.
   * @signature label() Add new label to last column
   * @signature label(string) Add new label to last container type 
   * indicated by (string)
   * @return This new label for call chaining
   */
  label(arg1) {
    /** Create new element */
    const label = new strapped.Label();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(label);
    else
      this.last('Col').append(label);
    
    /** Allow for call chaining */
    return label;
  }
  
  /**
   * Find last item of certain object type in contents.
   * @signature last(string) Get the last item of type (string) in contents
   * @return The last item of type (string) in contents
   */
  last(arg1) {
    let element = null;
      
    const getLastItemOfType = (parent, type) => {
      if ( typeof parent == 'object' && parent.constructor && parent.constructor.name.toLowerCase() == type.toLowerCase() )        
        element = parent;
      
      if ( typeof parent.content == 'function' && typeof parent.content() == 'object' && parent.content().constructor.name == 'Array' ) {
        parent.content().forEach((item) => {
          getLastItemOfType(item, type);
        });
      }
    };

    getLastItemOfType(this, arg1);
    
    return element;
  }
  
  /**
   * Find last parent item of certain object type in contents.
   * @signature lastParent(string) Get the last parent item of type (string) in contents
   * @return The last parent item of type (string) in contents
   */
  lastParent(arg1, count = 1) {
    /** Recursive algorithm for finding parent elements */
    const findParent = (item, type) => {      
      if ( !item.parent() ) {
        return null;
      } else if ( typeof item.parent() == 'object' && item.parent().constructor && item.parent().constructor.name.toLowerCase() == arg1.toLowerCase() ) {
        count--;
      
        if ( count == 0 )
          return item.parent();
      }
    
      return findParent(item.parent(), type);
    };
    
    /** Find parent element */
    return findParent(this.last(arg1));
  }
  
  /**
   * Add new legend to page.
   * @signature legend() Add new legend to last column
   * @signature legend(string) Add new legend to last container type 
   * indicated by (string)
   * @return This new legend for call chaining
   */
  legend(arg1) {
    /** Create new element */
    const legend = new strapped.Legend();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(legend);
    else
      this.last('Col').append(legend);
    
    /** Allow for call chaining */
    return legend;
  }
  
  /**
   * Add new line break to page.
   * @signature break() Add new line break to body (if it exists) otherwise to page
   * @signature break(string) Add new line break to last container 
   * type indicated by (string)
   * @return This new line break for call chaining
   */
  lineBreak(arg1) {
    /** Create new element */
    const lineBreak = new strapped.LineBreak();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(lineBreak);
    else if ( this.last('Col') )
      this.last('Col').append(lineBreak);
    else
      this.last('Body').append(lineBreak);
    
    /** Allow for call chaining */
    return lineBreak;
  }
  
  /**
   * Add new link to page.
   * @signature link() Add new link to last head
   * @signature link(string) Add new link to last container type 
   * indicated by (string)
   * @return This new link for call chaining
   */
  link(arg1) {
    /** Create new element */
    const link = new strapped.Link();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(link);
    else
      this.last('Head').append(link);
    
    /** Allow for call chaining */
    return link;
  }
  
  /**
   * Add new list group to page.
   * @signature listGroup() Add new list group to last column
   * @signature listGroup(string) Add new list group to last container type 
   * indicated by (string)
   * @return This new list group for call chaining
   */
  listGroup(arg1) {
    /** Create new element */
    const listGroup = new strapped.ListGroup();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(listGroup);
    else
      this.last('Col').append(listGroup);
    
    /** Allow for call chaining */
    return listGroup;
  }
  
  /**
   * Add new list group anchor to page.
   * @signature listGroupAnchor() Add new list group anchor to last list group
   * @signature listGroupAnchor(string) Add new list group anchor to last container type 
   * indicated by (string)
   * @return This new list group anchor for call chaining
   */
  listGroupAnchor(arg1) {
    /** Create new element */
    const listGroupAnchor = new strapped.ListGroupAnchor();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(listGroupAnchor);
    else
      this.last('ListGroup').append(listGroupAnchor);
    
    /** Allow for call chaining */
    return listGroupAnchor;
  }
  
  /**
   * Add new list group button to page.
   * @signature listGroupButton() Add new list group button to last list group
   * @signature listGroupButton(string) Add new list group button to last container type 
   * indicated by (string)
   * @return This new list group button for call chaining
   */
  listGroupButton(arg1) {
    /** Create new element */
    const listGroupButton = new strapped.ListGroupButton();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(listGroupButton);
    else
      this.last('ListGroup').append(listGroupButton);
    
    /** Allow for call chaining */
    return listGroupButton;
  }
  
  /**
   * Add new list group item to page.
   * @signature listGroupItem() Add new list group item to last list group
   * @signature listGroupItem(string) Add new list group item to last container type 
   * indicated by (string)
   * @return This new list group item for call chaining
   */
  listGroupItem(arg1) {
    /** Create new element */
    const listGroupItem = new strapped.ListGroupItem();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(listGroupItem);
    else
      this.last('ListGroup').append(listGroupItem);
    
    /** Allow for call chaining */
    return listGroupItem;
  }
  
  /**
   * Add new list item to page.
   * @signature listItem() Add new list item to last unordered list
   * @signature listItem(string) Add new list item to last container type 
   * indicated by (string)
   * @return This new list item for call chaining
   */
  listItem(arg1) {
    /** Create new element */
    const listItem = new strapped.ListItem();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(listItem);
    else
      this.last('UnorderedList').append(listItem);
    
    /** Allow for call chaining */
    return listItem;
  }
  
  /**
   * Add new main to page.
   * @signature main() Add new main to last column
   * @signature main(string) Add new main to last container type indicated by (string)
   * @return This new main for call chaining
   */
  main(arg1) {
    /** Create new element */
    const main = new strapped.Main();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(main);
    else
      this.last('Col').append(main);
    
    /** Allow for call chaining */
    return main;
  }
  
  /**
   * Add new map to page.
   * @signature map() Add new map to last column
   * @signature map(string) Add new map to last container type indicated by (string)
   * @return This new map for call chaining
   */
  map(arg1) {
    /** Create new element */
    const map = new strapped.Map();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(map);
    else
      this.last('Col').append(map);
    
    /** Allow for call chaining */
    return map;
  }
  
  /**
   * Add new mark to page.
   * @signature mark() Add new mark to last column
   * @signature mark(string) Add new mark to last container type indicated by (string)
   * @return This new mark for call chaining
   */
  mark(arg1) {
    /** Create new element */
    const mark = new strapped.Mark();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(mark);
    else
      this.last('Col').append(mark);
    
    /** Allow for call chaining */
    return mark;
  }
  
  /**
   * Add new menu to page.
   * @signature menu() Add new menu to last column
   * @signature menu(string) Add new menu to last container type indicated by (string)
   * @return This new menu for call chaining
   */
  menu(arg1) {
    /** Create new element */
    const menu = new strapped.Menu();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(menu);
    else
      this.last('Col').append(menu);
    
    /** Allow for call chaining */
    return menu;
  }
  
  /**
   * Add new menu item to page.
   * @signature menuItem() Add new menu item to last menu
   * @signature menuItem(string) Add new menu item to last container type indicated by (string)
   * @return This new menu item for call chaining
   */
  menuItem(arg1) {
    /** Create new element */
    const menuItem = new strapped.MenuItem();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(menuItem);
    else
      this.last('Menu').append(menuItem);
    
    /** Allow for call chaining */
    return menuItem;
  }
  
  /**
   * Add new meta to page.
   * @signature meta() Add new meta to last head
   * @signature meta(string) Add new meta to last container type indicated by (string)
   * @return This new meta for call chaining
   */
  meta(arg1) {
    /** Create new element */
    const meta = new strapped.Meta();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(meta);
    else
      this.last('Head').append(meta);
    
    /** Allow for call chaining */
    return meta;
  }
  
  /**
   * Add new meter to page.
   * @signature meter() Add new meter to last column
   * @signature meter(string) Add new meter to last container type indicated by (string)
   * @return This new meter for call chaining
   */
  meter(arg1) {
    /** Create new element */
    const meter = new strapped.Meter();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(meter);
    else
      this.last('Col').append(meter);
    
    /** Allow for call chaining */
    return meter;
  }
  
  /**
   * Add new modal to page.
   * @signature modal() Add new modal to last column
   * @signature modal(string) Add new modal to last container type indicated by (string)
   * @return This new modal for call chaining
   */
  modal(arg1) {
    /** Create new element */
    const modal = new strapped.Modal();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(modal);
    else
      this.last('Col').append(modal);
    
    /** Allow for call chaining */
    return modal;
  }
  
  /**
   * Add new modal body to page.
   * @signature modalBody() Add new modal body to last modal
   * @signature modalBody(string) Add new modal body to last container type 
   * indicated by (string)
   * @return This new modal body for call chaining
   */
  modalBody(arg1) {
    /** Create new element */
    const modalBody = new strapped.ModalBody();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(modalBody);
    else
      this.last('Modal').append(modalBody);
    
    /** Allow for call chaining */
    return modalBody;
  }
  
  /**
   * Add new modal footer to page.
   * @signature modalFooter() Add new modal footer to last modal
   * @signature modalFooter(string) Add new modal footer to last container type 
   * indicated by (string)
   * @return This new modal footer for call chaining
   */
  modalFooter(arg1) {
    /** Create new element */
    const modalFooter = new strapped.ModalFooter();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(modalFooter);
    else
      this.last('Modal').append(modalFooter);
    
    /** Allow for call chaining */
    return modalFooter;
  }
  
  /**
   * Add new modal header to page.
   * @signature modalHeader() Add new modal header to last modal
   * @signature modalHeader(string) Add new modal header to last container type 
   * indicated by (string)
   * @return This new modal header for call chaining
   */
  modalHeader(arg1) {
    /** Create new element */
    const modalHeader = new strapped.ModalHeader();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(modalHeader);
    else
      this.last('Modal').append(modalHeader);
    
    /** Allow for call chaining */
    return modalHeader;
  }
  
  /**
   * Add new multimedia object to page.
   * @signature multimediaObject() Add new multimedia object to last column
   * @signature multimediaObject(string) Add new multimedia object to last container type 
   * indicated by (string)
   * @return This new multimedia object for call chaining
   */
  multimediaObject(arg1) {
    /** Create new element */
    const multimediaObject = new strapped.MultimediaObject();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(multimediaObject);
    else
      this.last('Col').append(multimediaObject);
    
    /** Allow for call chaining */
    return multimediaObject;
  }
  
  /**
   * Find item by name.
   * @signature name(string) Get item with name matching (string)
   * @return The found item
   */
  name(arg1) {
    let element = null;
    
    const getItemByName = (parent, name) => {
      if ( typeof parent.name == 'function' && parent.name() == name )   
        element = parent;
      
      if ( typeof parent.content == 'function' && typeof parent.content() == 'object' && parent.content().constructor.name == 'Array' ) {
        parent.content().forEach((item) => {
          getItemByName(item, name);
        });
      }
    };

    this.content().forEach((item) => {
      getItemByName(item, arg1);
    });
        
    return element;
  }
  
  /**
   * Add new nav to page.
   * @signature nav() Add new nav to last body
   * @signature nav(string) Add new nav to last container type indicated by (string)
   * @return This new nav for call chaining
   */
  nav(arg1) {
    /** Create new element */
    const nav = new strapped.Nav();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(nav);
    else
      this.last('Body').append(nav);
    
    /** Allow for call chaining */
    return nav;
  }
  
  /**
   * Add new no-script to page.
   * @signature noScript() Add new no-script to last column
   * @signature noScript(string) Add new no-script to last container type indicated by (string)
   * @return This new no-script for call chaining
   */
  noScript(arg1) {
    /** Create new element */
    const noScript = new strapped.NoScript();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(noScript);
    else
      this.last('Col').append(noScript);
    
    /** Allow for call chaining */
    return noScript;
  }
  
  /**
   * Add new option group to page.
   * @signature optionGroup() Add new option group to last select
   * @signature optionGroup(string) Add new option group to last container type 
   * indicated by (string)
   * @return This new option group for call chaining
   */
  optionGroup(arg1) {
    /** Create new element */
    const optionGroup = new strapped.OptionGroup();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(optionGroup);
    else
      this.last('Select').append(optionGroup);
    
    /** Allow for call chaining */
    return optionGroup;
  }
  
  /**
   * Add new option to page.
   * @signature option() Add new option to last select
   * @signature option(string) Add new option to last container type 
   * indicated by (string)
   * @return This new option for call chaining
   */
  option(arg1) {
    /** Create new element */
    const option = new strapped.Option();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(option);
    else
      this.last('Select').append(option);
    
    /** Allow for call chaining */
    return option;
  }
  
  /**
   * Add new ordered list to page.
   * @signature orderedList() Add new ordered list to last column
   * @signature orderedList(string) Add new ordered list to last container type indicated by (string)
   * @return This new ordered list for call chaining
   */
  orderedList(arg1) {
    /** Create new element */
    const orderedList = new strapped.OrderedList();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(orderedList);
    else
      this.last('Col').append(orderedList);
    
    /** Allow for call chaining */
    return orderedList;
  }
  
  /**
   * Add new output to page.
   * @signature output() Add new output to last form
   * @signature output(string) Add new output to last container type indicated by (string)
   * @return This new output for call chaining
   */
  output(arg1) {
    /** Create new element */
    const output = new strapped.Output();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(output);
    else
      this.last('Form').append(output);
    
    /** Allow for call chaining */
    return output;
  }
  
  /**
   * Add new param to page.
   * @signature param() Add new param to last multimedia object
   * @signature param(string) Add new param to last container type indicated by (string)
   * @return This new param for call chaining
   */
  param(arg1) {
    /** Create new element */
    const param = new strapped.Param();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(param);
    else
      this.last('MultimediaObject').append(param);
    
    /** Allow for call chaining */
    return param;
  }
  
  /**
   * Add new paragraph to page.
   * @signature paragraph() Add new paragraph to last column
   * @signature paragraph(string) Add new paragraph to last container type 
   * indicated by (string)
   * @return This new paragraph for call chaining
   */
  paragraph(arg1) {
    /** Create new element */
    const paragraph = new strapped.Paragraph();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(paragraph);
    else
      this.last('Col').append(paragraph);
    
    /** Allow for call chaining */
    return paragraph;
  }
  
  /**
   * Add new picture to page.
   * @signature picture() Add new picture to last column
   * @signature picture(string) Add new picture to last container type 
   * indicated by (string)
   * @return This new picture for call chaining
   */
  picture(arg1) {
    /** Create new element */
    const picture = new strapped.Picture();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(picture);
    else
      this.last('Col').append(picture);
    
    /** Allow for call chaining */
    return picture;
  }
  
  /**
   * Add new preformatted text to page.
   * @signature preformattedText() Add new preformatted text to last column
   * @signature preformattedText(string) Add new preformatted text to last container type 
   * indicated by (string)
   * @return This new preformatted text for call chaining
   */
  preformattedText(arg1) {
    /** Create new element */
    const preformattedText = new strapped.PreformattedText();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(preformattedText);
    else
      this.last('Col').append(preformattedText);
    
    /** Allow for call chaining */
    return preformattedText;
  }
  
  /**
   * Add new progress to page.
   * @signature progress() Add new progress to last column
   * @signature progress(string) Add new progress to last container type 
   * indicated by (string)
   * @return This new progress for call chaining
   */
  progress(arg1) {
    /** Create new element */
    const progress = new strapped.Progress();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(progress);
    else
      this.last('Col').append(progress);
    
    /** Allow for call chaining */
    return progress;
  }
  
  /**
   * Add new progress bar to page.
   * @signature progressBar() Add new progress bar to last column
   * @signature progressBar(string) Add new progress bar to last container type 
   * indicated by (string)
   * @return This new progress bar for call chaining
   */
  progressBar(arg1) {
    /** Create new element */
    const progressBar = new strapped.ProgressBar();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(progressBar);
    else
      this.last('Col').append(progressBar);
    
    /** Allow for call chaining */
    return progressBar;
  }
  
  /**
   * Add new quotation to page.
   * @signature quotation() Add new quotation to last column
   * @signature quotation(string) Add new quotation to last container type 
   * indicated by (string)
   * @return This new quotation for call chaining
   */
  quotation(arg1) {
    /** Create new element */
    const quotation = new strapped.Quotation();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(quotation);
    else
      this.last('Col').append(quotation);
    
    /** Allow for call chaining */
    return quotation;
  }
  
  /**
   * Add new row to page.
   * @signature row() Add new row to body (if it exists) otherwise to page
   * @signature row(string) Add new row to last container type indicated by (string)
   * @return This new row for call chaining
   */
  row(arg1) {
    /** Create new element */
    const row = new strapped.Row();

    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(row);
    else if ( this.last('Body') )
      this.last('Body').append(row);
    else
      this.append(row);
    
    /** Allow for call chaining */
    return row;
  }
  
  /**
   * Add new sample to page.
   * @signature sample() Add new sample to last column
   * @signature sample(string) Add new sample to last container type 
   * indicated by (string)
   * @return This new sample for call chaining
   */
  sample(arg1) {
    /** Create new element */
    const sample = new strapped.Sample();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(sample);
    else
      this.last('Col').append(sample);
    
    /** Allow for call chaining */
    return sample;
  }
  
  /**
   * Add new script to page.
   * @signature script() Add new script to last head
   * @signature script(string) Add new script to last container type indicated by (string)
   * @return This new script for call chaining
   */
  script(arg1) {
    /** Create new element */
    const script = new strapped.Script();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(script);
    else
      this.last('Head').append(script);
    
    /** Allow for call chaining */
    return script;
  }
  
  /**
   * Add new section to page.
   * @signature section() Add new section to last column
   * @signature section(string) Add new section to last container type 
   * indicated by (string)
   * @return This new section for call chaining
   */
  section(arg1) {
    /** Create new element */
    const section = new strapped.Section();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(section);
    else
      this.last('Col').append(section);
    
    /** Allow for call chaining */
    return section;
  }
  
  /**
   * Add new select to page.
   * @signature select() Add new select to last form
   * @signature select(string) Add new select to last container type indicated by (string)
   * @return This new select for call chaining
   */
  select(arg1) {
    /** Create new element */
    const select = new strapped.Select();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(select);
    else
      this.last('Form').append(select);
    
    /** Allow for call chaining */
    return select;
  }
  
  /**
   * Add new small to page.
   * @signature small() Add new small to last column
   * @signature small(string) Add new small to last container type 
   * indicated by (string)
   * @return This new small for call chaining
   */
  small(arg1) {
    /** Create new element */
    const small = new strapped.Small();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(small);
    else
      this.last('Col').append(small);
    
    /** Allow for call chaining */
    return small;
  }
  
  /**
   * Add new source to page.
   * @signature source() Add new source to last audio
   * @signature source(string) Add new source to last container type 
   * indicated by (string)
   * @return This new source for call chaining
   */
  source(arg1) {
    /** Create new element */
    const source = new strapped.Source();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(source);
    else
      this.last('Audio').append(source);
    
    /** Allow for call chaining */
    return source;
  }
  
  /**
   * Add new span to page.
   * @signature span() Add new span to last column
   * @signature span(string) Add new span to last container type indicated by (string)
   * @return This new span for call chaining
   */
  span(arg1) {
    /** Create new element */
    const span = new strapped.Span();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(span);
    else
      this.last('Col').append(span);
    
    /** Allow for call chaining */
    return span;
  }
  
  /**
   * Add new strikethrough to page.
   * @signature strikethrough() Add new strikethrough to last column
   * @signature strikethrough(string) Add new strikethrough to last container type 
   * indicated by (string)
   * @return This new strikethrough for call chaining
   */
  strikethrough(arg1) {
    /** Create new element */
    const strikethrough = new strapped.Strikethrough();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(strikethrough);
    else
      this.last('Col').append(strikethrough);
    
    /** Allow for call chaining */
    return strikethrough;
  }
  
  /**
   * Add new strong to page.
   * @signature strong() Add new strong to last column
   * @signature strong(string) Add new strong to last container type 
   * indicated by (string)
   * @return This new strong for call chaining
   */
  strong(arg1) {
    /** Create new element */
    const strong = new strapped.Strong();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(strong);
    else
      this.last('Col').append(strong);
    
    /** Allow for call chaining */
    return strong;
  }
  
  /**
   * Add new style to page.
   * @signature style() Add new style to last head
   * @signature style(string) Add new style to last container type 
   * indicated by (string)
   * @return This new style for call chaining
   */
  style(arg1) {
    /** Create new element */
    const style = new strapped.Style();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(style);
    else
      this.last('Head').append(style);
    
    /** Allow for call chaining */
    return style;
  }
  
  /**
   * Add new subscript to page.
   * @signature subscript() Add new subscript to last column
   * @signature subscript(string) Add new subscript to last container type 
   * indicated by (string)
   * @return This new subscript for call chaining
   */
  subscript(arg1) {
    /** Create new element */
    const subscript = new strapped.Subscript();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(subscript);
    else
      this.last('Col').append(subscript);
    
    /** Allow for call chaining */
    return subscript;
  }
  
  /**
   * Add new summary to page.
   * @signature summary() Add new summary to last column
   * @signature summary(string) Add new summary to last container type 
   * indicated by (string)
   * @return This new summary for call chaining
   */
  summary(arg1) {
    /** Create new element */
    const summary = new strapped.Summary();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(summary);
    else
      this.last('Col').append(summary);
    
    /** Allow for call chaining */
    return summary;
  }
  
  /**
   * Add new superscript to page.
   * @signature superscript() Add new superscript to last column
   * @signature superscript(string) Add new superscript to last container type 
   * indicated by (string)
   * @return This new superscript for call chaining
   */
  superscript(arg1) {
    /** Create new element */
    const superscript = new strapped.Superscript();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(superscript);
    else
      this.last('Col').append(superscript);
    
    /** Allow for call chaining */
    return superscript;
  }
  
  /**
   * Add new SVG to page.
   * @signature svg() Add new SVG to last column
   * @signature svg(string) Add new SVG to last container type 
   * indicated by (string)
   * @return This new SVG for call chaining
   */
  svg(arg1) {
    /** Create new element */
    const svg = new strapped.SVG();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(svg);
    else
      this.last('Col').append(svg);
    
    /** Allow for call chaining */
    return svg;
  }
  
  /**
   * Add new table body to page.
   * @signature tableBody() Add new table body to last table
   * @signature tableBody(string) Add new table body to last container type 
   * indicated by (string)
   * @return This new table body for call chaining
   */
  tableBody(arg1) {
    /** Create new element */
    const tableBody = new strapped.TableBody();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(tableBody);
    else
      this.last('Table').append(tableBody);
    
    /** Allow for call chaining */
    return tableBody;
  }
  
  /**
   * Add new table data to page.
   * @signature tableData() Add new table data to last table row
   * @signature tableData(string) Add new table data to last container type 
   * indicated by (string)
   * @return This new table data for call chaining
   */
  tableData(arg1) {
    /** Create new element */
    const tableData = new strapped.TableData();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(tableData);
    else
      this.last('TableRow').append(tableData);
    
    /** Allow for call chaining */
    return tableData;
  }
  
  /**
   * Add new table footer to page.
   * @signature tableFooter() Add new table footer to last table
   * @signature tableFooter(string) Add new table footer to last container type 
   * indicated by (string)
   * @return This new table footer for call chaining
   */
  tableFooter(arg1) {
    /** Create new element */
    const tableFooter = new strapped.TableFooter();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(tableFooter);
    else
      this.last('Table').append(tableFooter);
    
    /** Allow for call chaining */
    return tableFooter;
  }
  
  /**
   * Add new table head to page.
   * @signature tableHead() Add new table head to last table
   * @signature tableHead(string) Add new table head to last container type 
   * indicated by (string)
   * @return This new table head for call chaining
   */
  tableHead(arg1) {
    /** Create new element */
    const tableHead = new strapped.TableHead();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(tableHead);
    else
      this.last('Table').append(tableHead);
    
    /** Allow for call chaining */
    return tableHead;
  }
  
  /**
   * Add new table header to page.
   * @signature tableHeader() Add new table header to last table row
   * @signature tableHeader(string) Add new table header to last container type 
   * indicated by (string)
   * @return This new table header for call chaining
   */
  tableHeader(arg1) {
    /** Create new element */
    const tableHeader = new strapped.TableHeader();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(tableHeader);
    else
      this.last('TableRow').append(tableHeader);
    
    /** Allow for call chaining */
    return tableHeader;
  }
  
  /**
   * Add new table row to page.
   * @signature tableRow() Add new table row to last table body
   * @signature tableRow(string) Add new table row to last container type 
   * indicated by (string)
   * @return This new table row for call chaining
   */
  tableRow(arg1) {
    /** Create new element */
    const tableRow = new strapped.TableRow();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(tableRow);
    else
      this.last('TableBody').append(tableRow);
    
    /** Allow for call chaining */
    return tableRow;
  }
  
  /**
   * Add new table to page.
   * @signature table() Add new table to last column
   * @signature table(string) Add new table to last container type indicated by (string)
   * @return This new table for call chaining
   */
  table(arg1) {
    /** Create new element */
    const table = new strapped.Table();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(table);
    else
      this.last('Col').append(table);
    
    /** Allow for call chaining */
    return table;
  }
  
  /**
   * Add new template to page.
   * @signature template() Add new template to last column
   * @signature template(string) Add new template to last container type indicated by (string)
   * @return This new template for call chaining
   */
  template(arg1) {
    /** Create new element */
    const template = new strapped.Template();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(template);
    else
      this.last('Col').append(template);
    
    /** Allow for call chaining */
    return template;
  }
  
  /**
   * Add new text to page.
   * @signature text() Add new text to last column
   * @signature text(string) Add new text to last container type indicated by (string)
   * @return This new text for call chaining
   */
  text(arg1) {
    /** Create new element */
    const text = new strapped.Text();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(text);
    else
      this.last('Col').append(text);
    
    /** Allow for call chaining */
    return text;
  }
  
  /**
   * Add new textarea to page.
   * @signature textarea() Add new textarea to last form
   * @signature textarea(string) Add new textarea to last container type indicated by (string)
   * @return This new textarea for call chaining
   */
  textarea(arg1) {
    /** Create new element */
    const textarea = new strapped.TextArea();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(textarea);
    else
      this.last('Form').append(textarea);
    
    /** Allow for call chaining */
    return textarea;
  }
   
  /**
   * Add new time to page.
   * @signature time() Add new time to last column
   * @signature time(string) Add new time to last container type indicated by (string)
   * @return This new time for call chaining
   */
  time(arg1) {
    /** Create new element */
    const time = new strapped.Time();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(time);
    else
      this.last('Col').append(time);
    
    /** Allow for call chaining */
    return time;
  }
  
  /**
   * Add new title to page.
   * @signature title() Add new title to last head
   * @signature title(string) Add new title to last container type indicated by (string)
   * @return This new title for call chaining
   */
  title(arg1) {
    /** Create new element */
    const title = new strapped.Title();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(title);
    else
      this.last('Head').append(title);
    
    /** Allow for call chaining */
    return title;
  }
  
  /**
   * Add new track to page.
   * @signature track() Add new track to last video
   * @signature track(string) Add new track to last container type indicated by (string)
   * @return This new track for call chaining
   */
  track(arg1) {
    /** Create new element */
    const track = new strapped.Track();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(track);
    else
      this.last('Video').append(track);
    
    /** Allow for call chaining */
    return track;
  }
  
  /**
   * Add new underline to page.
   * @signature underline() Add new underline to last column
   * @signature underline(string) Add new underline to last container type indicated by (string)
   * @return This new underline for call chaining
   */
  underline(arg1) {
    /** Create new element */
    const underline = new strapped.Underline();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(underline);
    else
      this.last('Col').append(underline);
    
    /** Allow for call chaining */
    return underline;
  }
  
  /**
   * Add new unordered list to page.
   * @signature unorderedList() Add new unordered list to last column
   * @signature unorderedList(string) Add new unordered list to last container type 
   * indicated by (string)
   * @return This new unordered list for call chaining
   */
  unorderedList(arg1) {
    /** Create new element */
    const unorderedList = new strapped.UnorderedList();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(unorderedList);
    else
      this.last('Col').append(unorderedList);
    
    /** Allow for call chaining */
    return unorderedList;
  }
  
  /**
   * Add new variable to page.
   * @signature variable() Add new variable to last column
   * @signature variable(string) Add new variable to last container type indicated by (string)
   * @return This new variable for call chaining
   */
  variable(arg1) {
    /** Create new element */
    const variable = new strapped.Variable();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(variable);
    else
      this.last('Col').append(variable);
    
    /** Allow for call chaining */
    return variable;
  }
  
  /**
   * Add new video to page.
   * @signature video() Add new video to last column
   * @signature video(string) Add new video to last container type indicated by (string)
   * @return This new video for call chaining
   */
  video(arg1) {
    /** Create new element */
    const video = new strapped.Video();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(video);
    else
      this.last('Col').append(video);
    
    /** Allow for call chaining */
    return video;
  }
  
  /**
   * Add new word break opportunity to page.
   * @signature wordBreakOpportunity() Add new word break opportunity to last column
   * @signature wordBreakOpportunity(string) Add new word break opportunity to last container 
   * type indicated by (string)
   * @return This new word break opportunity for call chaining
   */
  wordBreakOpportunity(arg1) {
    /** Create new element */
    const wordBreakOpportunity = new strapped.WordBreakOpportunity();
    
    /** Add to last container of indicated type */
    if ( typeof arg1 == 'string' && arg1.length > 0 )
      this.last(arg1).append(wordBreakOpportunity);
    else
      this.last('Col').append(wordBreakOpportunity);
    
    /** Allow for call chaining */
    return wordBreakOpportunity;
  }
  
  /**
   * Render the page.
   * @signature render(number) Render this page with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    let markup = '';
    
    /** Loop through each content item and render to markup */
    this.content().forEach((content) => {
      if ( typeof content == 'function' )
        markup += ' '.repeat(indent) + content.toString().split('\n').slice(1, -1).join('\n' + ' '.repeat(indent)) + '\n';
      else
        markup += content.render(indent);
    });
        
    return markup;
  }
}

module.exports.Page = Page;
