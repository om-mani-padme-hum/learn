/** Require local modules */
const elements = require(`./elements`);

/**
 * @class ezhtml.Page
 * @extends Container
 * @added v1.4.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML elements using short-hand methods and auto-nesting.
 *
 * @signature render(indent) 
 * @added v1.4.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this page with `indent` spaces of indentation before each line.
 */
class Page extends elements.Container {
  /**
   * @signature new Page(template)
   * @added v1.4.0
   * @param template boolean
   * @returns Page
   * @description Returns a new [Page] instance, initializing with <html>, <head>, and <body>
   * tags already included unless `false` is passed to the constructor.
   */
  constructor(template = true) {
    /** Call parent constructor */
    super();
    
    /** Initialize content */
    this.init();
    
    /** If we're going to template the HTML, head, and body tags... */
    if ( template ) {
      /** Create HTML tag */
      const html = new elements.HTML();
    
      /** Append to container contents */
      this.append(html);
          
      /** Create head tag */
      const head = new elements.Head();
      
      /** Append to HTML contents */
      html.append(head);
      
      /** Create body tag */
      const body = new elements.Body();

      /** Append to HTML contents */
      html.append(body);
    }
  }
  
  /**
   * @signature abbreviation()
   * @added v1.4.0
   * @param nest string|Array
   * @returns Abbreviation
   * @description Returns a new [Abbreviation] instance, nesting inside the most recent
   * <div> element, if one exists, otherwise the <body> element.
   */
  abbreviation(nest = [`div`, `body`]) {
    /** Create element */
    const abbreviation = new elements.Abbreviation();
    
    /** Append element to container */
    this.container(nest).append(abbreviation);
    
    /** Return element for call chaining */
    return abbreviation;
  }
  
  /**
   * @signature abbreviation(nest)
   * @added v1.4.0
   * @param nest string|Array
   * @returns Abbreviation
   * @description Returns a new [Abbreviation] instance, nesting inside the most recent
   * element specified by the string or string elements of `nest`, if provided, otherwise
   * the most recent <div> element, if one exists, otherwise the <body> element.
   */
  address(nest = [`div`, `body`]) {
    /** Create element */
    const address = new elements.Address();
    
    /** Append element to container */
    this.container(nest).append(address);
    
    /** Return element for call chaining */
    return address;
  }
  
  /**
   * @signature anchor(nest)
   * @added v1.4.0
   * @param nest string|Array<string>
   * @returns Anchor
   * @description Returns a new [Anchor] instance, nesting inside the most recent
   * element specified by the string or string elements of `nest`, if provided, otherwise
   * the most recent <div> element, if one exists, otherwise the <body> element.
   */
  anchor(nest = [`div`, `body`]) {
    /** Create element */
    const anchor = new elements.Anchor();
    
    /** Append element to container */
    this.container(nest).append(anchor);
    
    /** Return element for call chaining */
    return anchor;
  }
  
  /**
   * @signature area(nest)
   * @added v1.4.0
   * @param nest string|Array<string>
   * @returns Area
   * @description Returns a new [Area] instance, nesting inside the most recent
   * element specified by the string or string elements of `nest`, if provided, otherwise
   * the most recent <map> element.
   */
  area(nest = [`mapelement`]) {
    /** Create element */
    const area = new elements.Area();
    
    /** Append element to container */
    this.container(nest).append(area);
    
    /** Return element for call chaining */
    return area;
  }
  
  /**
   * @signature article()
   * @added v1.4.0
   * @param nest string|Array<string>
   * @returns Article
   * @description Returns a new [Article] instance, nesting inside the most recent
   * element specified by the string or string elements of `nest`, if provided, otherwise
   * the most recent <div>, <main>, or <aside> element, if one exists, otherwise the 
   * <body> element.
   */
  article(nest = [`div`, `main`, `aside`, `body`]) {
    /** Create element */
    const article = new elements.Article();
    
    /** Append element to container */
    this.container(nest).append(article);
    
    /** Return element for call chaining */
    return article;
  }
  
  /**
   * @signature aside()
   * @added v1.4.0
   * @param nest string|Array<string>
   * @returns Aside
   * @description Returns a new [Aside] instance, nesting inside the most recent
   * element specified by the string or string elements of `nest`, if provided, otherwise
   * the most recent <div> element, if one exists, otherwise the <body> element.
   */
  aside(nest = [`div`, `body`]) {
    /** Create element */
    const aside = new elements.Aside();
    
    /** Append element to container */
    this.container(nest).append(aside);
    
    /** Return element for call chaining */
    return aside;
  }
  
  audio(nest = [`body`]) {
    /** Create element */
    const audio = new elements.Audio();
    
    /** Append element to container */
    this.container(nest).append(audio);
    
    /** Return element for call chaining */
    return audio;
  }
  
  base(nest = [`head`]) {
    /** Create element */
    const base = new elements.Base();
    
    /** Append element to container */
    this.container(nest).append(base);
    
    /** Return element for call chaining */
    return base;
  }
  
  bidirectionalIsolation(nest = [`div`, `body`]) {
    /** Create element */
    const bidirectionalIsolation = new elements.BidirectionalIsolation();
    
    /** Append element to container */
    this.container(nest).append(bidirectionalIsolation);
    
    /** Return element for call chaining */
    return bidirectionalIsolation;
  }
  
  bidirectionalOverride(nest = [`listitemli`, `paragraph`, `div`, `body`]) {
    /** Create element */
    const bidirectionalOverride = new elements.BidirectionalOverride();
    
    /** Append element to container */
    this.container(nest).append(bidirectionalOverride);
    
    /** Return element for call chaining */
    return bidirectionalOverride;
  }
  
  blockquote(nest = [`div`, `body`]) {
    /** Create element */
    const blockquote = new elements.Blockquote();
    
    /** Append element to container */
    this.container(nest).append(blockquote);
    
    /** Return element for call chaining */
    return blockquote;
  }
  
  body(nest = [`html`]) {
    /** Create element */
    const body = new elements.Body();
    
    /** Append element to container */
    this.container(nest).append(body);
    
    /** Return element for call chaining */
    return body;
  }
  
  bold(nest = [`div`, `body`]) {
    /** Create element */
    const bold = new elements.Bold();
    
    /** Append element to container */
    this.container(nest).append(bold);
    
    /** Return element for call chaining */
    return bold;
  }
  
  button(nest = [`form`, `div`, `body`]) {
    /** Create element */
    const button = new elements.Button();
    
    /** Append element to container */
    this.container(nest).append(button);
    
    /** Return element for call chaining */
    return button;
  }
  
  canvas(nest = [`body`]) {
    /** Create element */
    const canvas = new elements.Canvas();
    
    /** Append element to container */
    this.container(nest).append(canvas);
    
    /** Return element for call chaining */
    return canvas;
  }
  
  caption(nest = [`table`]) {
    /** Create element */
    const caption = new elements.Caption();
    
    /** Append element to container */
    this.container(nest).append(caption);
    
    /** Return element for call chaining */
    return caption;
  }
  
  citation(nest = [`div`, `body`]) {
    /** Create element */
    const citation = new elements.Citation();
    
    /** Append element to container */
    this.container(nest).append(citation);
    
    /** Return element for call chaining */
    return citation;
  }
  
  code(nest = [`div`, `body`]) {
    /** Create element */
    const code = new elements.Code();
    
    /** Append element to container */
    this.container(nest).append(code);
    
    /** Return element for call chaining */
    return code;
  }
  
  columnGroup(nest = [`table`]) {
    /** Create element */
    const columnGroup = new elements.ColumnGroup();
    
    /** Append element to container */
    this.container(nest).append(columnGroup);
    
    /** Return element for call chaining */
    return columnGroup;
  }
  
  column(nest = [`columngroup`]) {
    /** Create element */
    const column = new elements.Column();
    
    /** Append element to container */
    this.container(nest).append(column);
    
    /** Return element for call chaining */
    return column;
  }
  
  container(container) {
    /** If nest is not a string or an array, throw error */
    if ( typeof container != `string` && ( typeof container != `object` || container.constructor.name != `Array` ) )
      throw new TypeError(`Page.container(): Invalid 'container' variable type, must be string or array of strings.`);
    
    /** Otherwise, if nest it not an array, put string in new array */
    else if ( typeof container != `object` || container.constructor.name != `Array` )
      container = [container];
    
    /** Loop through each item in nest array */
    for ( let i = 0, iMax = container.length; i < iMax; i++ ) {
      /** If member of array is not a string, throw error */
      if ( typeof container[i] != `string` )
        throw new TypeError(`Page.container(): Invalid 'container' variable type in array, must be string.`);
      
      /** Attempt to split item by period */
      const partsCount = container[i].split(`.`);
      
      let count = 1;
      let name = partsCount[0];
      
      if ( partsCount.length > 1 ) {
        if ( isNaN(partsCount[0]) )
          throw new TypeError(`Page.container(): Container name contains a period '.', but invalid number '${partsCount[0]}' preceeding period.`);
        
        count = parseInt(partsCount[0]);
        name = partsCount[1];
      }
      
      /** Attempt to split item by colon */
      const partsName = name.split(`:`);
      
      /** If there was a colon... */
      if ( partsName.length > 1 ) {
        if ( partsName[1] == `first` ) {
          const found = this.findStart(partsName[0], count);
          
          if ( found )
            return found;
        } else if ( partsName[1] == `last` ) {
          const found = this.findEnd(partsName[0], count);
          
          if ( found )
            return found;
        } else {
          throw new ReferenceError(`Page.container(): Container name contains a colon ':', but invalid string '${partsName[1]}' following colon.`);
        }
      } 
      
      /** Otherwise... */
      else {
        const found = this.findEnd(partsName[0], count);
          
        if ( found )
          return found;
      }
    }
    
    throw new ReferenceError(`Page.container(): No matching container found.`);
  }
  
  dataList(nest = [`form`, `div`, `body`]) {
    /** Create element */
    const dataList = new elements.DataList();
    
    /** Append element to container */
    this.container(nest).append(dataList);
    
    /** Return element for call chaining */
    return dataList;
  }
  
  data(nest = [`div`, `body`]) {
    /** Create element */
    const data = new elements.Data();
    
    /** Append element to container */
    this.container(nest).append(data);
    
    /** Return element for call chaining */
    return data;
  }
  
  definitionDescription(nest = [`definitionlist`]) {
    /** Create element */
    const definitionDescription = new elements.DefinitionDescription();
    
    /** Append element to container */
    this.container(nest).append(definitionDescription);
    
    /** Return element for call chaining */
    return definitionDescription;
  }
  
  definitionList(nest = [`div`, `body`]) {
    /** Create element */
    const definitionList = new elements.DefinitionList();
    
    /** Append element to container */
    this.container(nest).append(definitionList);
    
    /** Return element for call chaining */
    return definitionList;
  }
  
  definitionTerm(nest = [`definitionlist`]) {
    /** Create element */
    const definitionTerm = new elements.DefinitionTerm();
    
    /** Append element to container */
    this.container(nest).append(definitionTerm);
    
    /** Return element for call chaining */
    return definitionTerm;
  }
  
  definition(nest = [`div`, `body`]) {
    /** Create element */
    const definition = new elements.Definition();
    
    /** Append element to container */
    this.container(nest).append(definition);
    
    /** Return element for call chaining */
    return definition;
  }
  
  deleted(nest = [`div`, `body`]) {
    /** Create element */
    const deleted = new elements.Deleted();
    
    /** Append element to container */
    this.container(nest).append(deleted);
    
    /** Return element for call chaining */
    return deleted;
  }
  
  details(nest = [`div`, `body`]) {
    /** Create element */
    const details = new elements.Details();
    
    /** Append element to container */
    this.container(nest).append(details);
    
    /** Return element for call chaining */
    return details;
  }
  
  dialog(nest = [`div`, `body`]) {
    /** Create element */
    const dialog = new elements.Dialog();
    
    /** Append element to container */
    this.container(nest).append(dialog);
    
    /** Return element for call chaining */
    return dialog;
  }
  
  div(nest = [`div`, `body`]) {
    /** Create element */
    const div = new elements.Div();
    
    /** Append element to container */
    this.container(nest).append(div);
    
    /** Return element for call chaining */
    return div;
  }
  
  embed(nest = [`div`, `body`]) {
    /** Create element */
    const embed = new elements.Embed();
    
    /** Append element to container */
    this.container(nest).append(embed);
    
    /** Return element for call chaining */
    return embed;
  }
  
  emphasized(nest = [`div`, `body`]) {
    /** Create element */
    const emphasized = new elements.Emphasized();
    
    /** Append element to container */
    this.container(nest).append(emphasized);
    
    /** Return element for call chaining */
    return emphasized;
  }
  
  fieldSet(nest = [`form`]) {
    /** Create element */
    const fieldSet = new elements.FieldSet();
    
    /** Append element to container */
    this.container(nest).append(fieldSet);
    
    /** Return element for call chaining */
    return fieldSet;
  }
  
  figureCaption(nest = [`figure`]) {
    /** Create element */
    const figureCaption = new elements.FigureCaption();
    
    /** Append element to container */
    this.container(nest).append(figureCaption);
    
    /** Return element for call chaining */
    return figureCaption;
  }
  
  figure(nest = [`div`, `body`]) {
    /** Create element */
    const figure = new elements.Figure();
    
    /** Append element to container */
    this.container(nest).append(figure);
    
    /** Return element for call chaining */
    return figure;
  }
  
  findStart(name, count = 1) {
    /** Create array of matching element names */
    const items = [];
    
    /** All name comparisons should be done in lower case */
    name = name.toLowerCase();
    
    /** Create recursive helper function for identifying matching elements */
    const findElements = (currentElement) => {
      /** If current element's constructor name matches query, add to list */
      if ( currentElement.constructor.name.toLowerCase() == name )
        items.push(currentElement);
      
      /** If current element has contents... */
      if ( typeof currentElement.content == `function` && currentElement.content().constructor.name == `Array` ) {
        /** Loop through them and recursively search for matching elemenets */
        currentElement.content().forEach((element) => {
          findElements(element);
        });
      }
    };
    
    /** Find elements starting with this page */
    findElements(this);
    
    /** Return element 'count' indices from first */
    if ( items.length >= count - 1 )
      return items[count - 1];
    
    /** Throw error if 'count' was out of range */
    return null;
  }
  
  findEnd(name, count = 1) {
    /** Create array of matching element names */
    const items = [];
    
    /** All name comparisons should be done in lower case */
    name = name.toLowerCase();
    
    /** Create recursive helper function for identifying matching elements */
    const findElements = (currentElement) => {
      /** If current element's constructor name matches query, add to list */
      if ( currentElement.constructor.name.toLowerCase() == name )
        items.push(currentElement);
      
      /** If current element has contents... */
      if ( typeof currentElement.content == `function` && currentElement.content().constructor.name == `Array` ) {
        /** Loop through them and recursively search for matching elemenets */
        currentElement.content().forEach((element) => {
          findElements(element);
        });
      }
    };
    
    /** Find elements starting with this page */
    findElements(this);
    
    /** Return element 'count' indices from last */
    if ( items.length >= items.length - count + 1 )
      return items[items.length - count];
    
    /** Throw error if 'count' was out of range */
    return null;
  }
  
  footer(nest = [`body`]) {
    /** Create element */
    const footer = new elements.Footer();
    
    /** Append element to container */
    this.container(nest).append(footer);
    
    /** Return element for call chaining */
    return footer;
  }
  
  form(nest = [`div`, `body`]) {
    /** Create element */
    const form = new elements.Form();
    
    /** Append element to container */
    this.container(nest).append(form);
    
    /** Return element for call chaining */
    return form;
  }
  
  h1(nest = [`div`, `body`]) {
    /** Create element */
    const h1 = new elements.H1();
    
    /** Append element to container */
    this.container(nest).append(h1);
    
    /** Return element for call chaining */
    return h1;
  }
  
  h2(nest = [`div`, `body`]) {
    /** Create element */
    const h2 = new elements.H2();
    
    /** Append element to container */
    this.container(nest).append(h2);
    
    /** Return element for call chaining */
    return h2;
  }
  
  h3(nest = [`div`, `body`]) {
    /** Create element */
    const h3 = new elements.H3();
    
    /** Append element to container */
    this.container(nest).append(h3);
    
    /** Return element for call chaining */
    return h3;
  }
  
  h4(nest = [`div`, `body`]) {
    /** Create element */
    const h4 = new elements.H4();
    
    /** Append element to container */
    this.container(nest).append(h4);
    
    /** Return element for call chaining */
    return h4;
  }
  
  h5(nest = [`div`, `body`]) {
    /** Create element */
    const h5 = new elements.H5();
    
    /** Append element to container */
    this.container(nest).append(h5);
    
    /** Return element for call chaining */
    return h5;
  }
  
  h6(nest = [`div`, `body`]) {
    /** Create element */
    const h6 = new elements.H6();
    
    /** Append element to container */
    this.container(nest).append(h6);
    
    /** Return element for call chaining */
    return h6;
  }
  
  head(nest = [`html`]) {
    /** Create element */
    const head = new elements.Head();
    
    /** Append element to container */
    this.container(nest).append(head);
    
    /** Return element for call chaining */
    return head;
  }
  
  header(nest = [`body`]) {
    /** Create element */
    const header = new elements.Header();
    
    /** Append element to container */
    this.container(nest).append(header);
    
    /** Return element for call chaining */
    return header;
  }
  
  horizontalRule(nest = [`div`, `body`]) {
    /** Create element */
    const horizontalRule = new elements.HorizontalRule();
    
    /** Append element to container */
    this.container(nest).append(horizontalRule);
    
    /** Return element for call chaining */
    return horizontalRule;
  }
  
  html() {
    /** Create element */
    const html = new elements.HTML();
    
    /** Append element to container */
    this.append(html);
    
    /** Return element for call chaining */
    return html;
  }
  
  image(nest = [`figure`, `anchor`, `div`, `body`]) {
    /** Create element */
    const image = new elements.Image();
    
    /** Append element to container */
    this.container(nest).append(image);
    
    /** Return element for call chaining */
    return image;
  }
  
  input(nest = [`fieldset`, `form`]) {
    /** Create element */
    const input = new elements.Input();
    
    /** Append element to container */
    this.container(nest).append(input);
    
    /** Return element for call chaining */
    return input;
  }
  
  inserted(nest = [`div`, `body`]) {
    /** Create element */
    const inserted = new elements.Inserted();
    
    /** Append element to container */
    this.container(nest).append(inserted);
    
    /** Return element for call chaining */
    return inserted;
  }
  
  italic(nest = [`div`, `body`]) {
    /** Create element */
    const italic = new elements.Italic();
    
    /** Append element to container */
    this.container(nest).append(italic);
    
    /** Return element for call chaining */
    return italic;
  }
  
  keyboard(nest = [`div`, `body`]) {
    /** Create element */
    const keyboard = new elements.Keyboard();
    
    /** Append element to container */
    this.container(nest).append(keyboard);
    
    /** Return element for call chaining */
    return keyboard;
  }
  
  label(nest = [`fieldset`, `form`, `div`, `body`]) {
    /** Create element */
    const label = new elements.Label();
    
    /** Append element to container */
    this.container(nest).append(label);
    
    /** Return element for call chaining */
    return label;
  }
  
  legend(nest = [`fieldset`]) {
    /** Create element */
    const legend = new elements.Legend();
    
    /** Append element to container */
    this.container(nest).append(legend);
    
    /** Return element for call chaining */
    return legend;
  }
  
  lineBreak(nest = [`div`, `body`]) {
    /** Create element */
    const lineBreak = new elements.LineBreak();
    
    /** Append element to container */
    this.container(nest).append(lineBreak);
    
    /** Return element for call chaining */
    return lineBreak;
  }
  
  link(nest = [`head`]) {
    /** Create element */
    const link = new elements.Link();
    
    /** Append element to container */
    this.container(nest).append(link);
    
    /** Return element for call chaining */
    return link;
  }
  
  listItem(nest = [`orderedlist`, `unorderedlist`]) {
    /** Create element */
    const listItem = new elements.ListItem();
    
    /** Append element to container */
    this.container(nest).append(listItem);
    
    /** Return element for call chaining */
    return listItem;
  }
  
  main(nest = [`body`]) {
    /** Create element */
    const main = new elements.Main();
    
    /** Append element to container */
    this.container(nest).append(main);
    
    /** Return element for call chaining */
    return main;
  }
  
  map(nest = [`div`, `body`]) {
    /** Create element */
    const map = new elements.MapElement();
    
    /** Append element to container */
    this.container(nest).append(map);
    
    /** Return element for call chaining */
    return map;
  }
  
  mark(nest = [`div`, `body`]) {
    /** Create element */
    const mark = new elements.Mark();
    
    /** Append element to container */
    this.container(nest).append(mark);
    
    /** Return element for call chaining */
    return mark;
  }
  
  meta(nest = [`head`]) {
    /** Create element */
    const meta = new elements.Meta();
    
    /** Append element to container */
    this.container(nest).append(meta);
    
    /** Return element for call chaining */
    return meta;
  }
  
  meter(nest = [`span`, `div`, `body`]) {
    /** Create element */
    const meter = new elements.Meter();
    
    /** Append element to container */
    this.container(nest).append(meter);
    
    /** Return element for call chaining */
    return meter;
  }
  
  nav(nest = [`div`, `body`]) {
    /** Create element */
    const nav = new elements.Nav();
    
    /** Append element to container */
    this.container(nest).append(nav);
    
    /** Return element for call chaining */
    return nav;
  }
  
  noScript(nest = [`body`, `head`]) {
    /** Create element */
    const noScript = new elements.NoScript();
    
    /** Append element to container */
    this.container(nest).append(noScript);
    
    /** Return element for call chaining */
    return noScript;
  }
  
  object(nest = [`div`, `body`]) {
    /** Create element */
    const object = new elements.MultimediaObject();
    
    /** Append element to container */
    this.container(nest).append(object);
    
    /** Return element for call chaining */
    return object;
  }
  
  optionGroup(nest = [`select`]) {
    /** Create element */
    const optionGroup = new elements.OptionGroup();
    
    /** Append element to container */
    this.container(nest).append(optionGroup);
    
    /** Return element for call chaining */
    return optionGroup;
  }
  
  option(nest = [`optiongroup`, `select`, `datalist`]) {
    /** Create element */
    const option = new elements.Option();
    
    /** Append element to container */
    this.container(nest).append(option);
    
    /** Return element for call chaining */
    return option;
  }
  
  orderedList(nest = [`div`, `body`]) {
    /** Create element */
    const orderedList = new elements.OrderedList();
    
    /** Append element to container */
    this.container(nest).append(orderedList);
    
    /** Return element for call chaining */
    return orderedList;
  }
  
  output(nest = [`form`, `div`, `body`]) {
    /** Create element */
    const output = new elements.Output();
    
    /** Append element to container */
    this.container(nest).append(output);
    
    /** Return element for call chaining */
    return output;
  }
  
  paragraph(nest = [`div`, `body`]) {
    /** Create element */
    const paragraph = new elements.Paragraph();
    
    /** Append element to container */
    this.container(nest).append(paragraph);
    
    /** Return element for call chaining */
    return paragraph;
  }
  
  param(nest = [`object`]) {
    /** Create element */
    const param = new elements.Param();
    
    /** Append element to container */
    this.container(nest).append(param);
    
    /** Return element for call chaining */
    return param;
  }
  
  picture(nest = [`div`, `body`]) {
    /** Create element */
    const picture = new elements.Picture();
    
    /** Append element to container */
    this.container(nest).append(picture);
    
    /** Return element for call chaining */
    return picture;
  }
  
  preformattedText(nest = [`div`, `body`]) {
    /** Create element */
    const preformattedText = new elements.PreformattedText();
    
    /** Append element to container */
    this.container(nest).append(preformattedText);
    
    /** Return element for call chaining */
    return preformattedText;
  }
  
  progress(nest = [`div`, `body`]) {
    /** Create element */
    const progress = new elements.Progress();
    
    /** Append element to container */
    this.container(nest).append(progress);
    
    /** Return element for call chaining */
    return progress;
  }
  
  quotation(nest = [`div`, `body`]) {
    /** Create element */
    const quotation = new elements.Quotation();
    
    /** Append element to container */
    this.container(nest).append(quotation);
    
    /** Return element for call chaining */
    return quotation;
  }
  
  sample(nest = [`div`, `body`]) {
    /** Create element */
    const sample = new elements.Sample();
    
    /** Append element to container */
    this.container(nest).append(sample);
    
    /** Return element for call chaining */
    return sample;
  }
  
  script(nest = [`body`, `head`]) {
    /** Create element */
    const script = new elements.Script();
    
    /** Append element to container */
    this.container(nest).append(script);
    
    /** Return element for call chaining */
    return script;
  }
  
  section(nest = [`div`, `body`]) {
    /** Create element */
    const section = new elements.Section();
    
    /** Append element to container */
    this.container(nest).append(section);
    
    /** Return element for call chaining */
    return section;
  }
  
  select(nest = [`fieldset`, `form`, `div`, `body`]) {
    /** Create element */
    const select = new elements.Select();
    
    /** Append element to container */
    this.container(nest).append(select);
    
    /** Return element for call chaining */
    return select;
  }
  
  small(nest = [`div`, `body`]) {
    /** Create element */
    const small = new elements.Small();
    
    /** Append element to container */
    this.container(nest).append(small);
    
    /** Return element for call chaining */
    return small;
  }
  
  source(nest = [`video`, `audio`, `picture`]) {
    /** Create element */
    const source = new elements.Source();
    
    /** Append element to container */
    this.container(nest).append(source);
    
    /** Return element for call chaining */
    return source;
  }
  
  span(nest = [`div`, `body`]) {
    /** Create element */
    const span = new elements.Span();
    
    /** Append element to container */
    this.container(nest).append(span);
    
    /** Return element for call chaining */
    return span;
  }
  
  strikethrough(nest = [`div`, `body`]) {
    /** Create element */
    const strikethrough = new elements.Strikethrough();
    
    /** Append element to container */
    this.container(nest).append(strikethrough);
    
    /** Return element for call chaining */
    return strikethrough;
  }
  
  strong(nest = [`div`, `body`]) {
    /** Create element */
    const strong = new elements.Strong();
    
    /** Append element to container */
    this.container(nest).append(strong);
    
    /** Return element for call chaining */
    return strong;
  }
  
  style(nest = [`head`]) {
    /** Create element */
    const style = new elements.Style();
    
    /** Append element to container */
    this.container(nest).append(style);
    
    /** Return element for call chaining */
    return style;
  }
  
  subscript(nest = [`div`, `body`]) {
    /** Create element */
    const subscript = new elements.Subscript();
    
    /** Append element to container */
    this.container(nest).append(subscript);
    
    /** Return element for call chaining */
    return subscript;
  }
  
  summary(nest = [`div`, `body`]) {
    /** Create element */
    const summary = new elements.Summary();
    
    /** Append element to container */
    this.container(nest).append(summary);
    
    /** Return element for call chaining */
    return summary;
  }
  
  superscript(nest = [`div`, `body`]) {
    /** Create element */
    const superscript = new elements.Superscript();
    
    /** Append element to container */
    this.container(nest).append(superscript);
    
    /** Return element for call chaining */
    return superscript;
  }
  
  svg(nest = [`div`, `body`]) {
    /** Create element */
    const svg = new elements.SVG();
    
    /** Append element to container */
    this.container(nest).append(svg);
    
    /** Return element for call chaining */
    return svg;
  }
  
  tableBody(nest = [`table`]) {
    /** Create element */
    const tableBody = new elements.TableBody();
    
    /** Append element to container */
    this.container(nest).append(tableBody);
    
    /** Return element for call chaining */
    return tableBody;
  }
  
  tableData(nest = [`tablerow`]) {
    /** Create element */
    const tableData = new elements.TableData();
    
    /** Append element to container */
    this.container(nest).append(tableData);
    
    /** Return element for call chaining */
    return tableData;
  }
  
  tableFooter(nest = [`table`]) {
    /** Create element */
    const tableFooter = new elements.TableFooter();
    
    /** Append element to container */
    this.container(nest).append(tableFooter);
    
    /** Return element for call chaining */
    return tableFooter;
  }
  
  tableHead(nest = [`table`]) {
    /** Create element */
    const tableHead = new elements.TableHead();
    
    /** Append element to container */
    this.container(nest).append(tableHead);
    
    /** Return element for call chaining */
    return tableHead;
  }
  
  tableHeader(nest = [`tablerow`]) {
    /** Create element */
    const tableHeader = new elements.TableHeader();
    
    /** Append element to container */
    this.container(nest).append(tableHeader);
    
    /** Return element for call chaining */
    return tableHeader;
  }
  
  tableRow(nest = [`tablefooter`, `tablebody`, `tablehead`]) {
    /** Create element */
    const tableRow = new elements.TableRow();
    
    /** Append element to container */
    this.container(nest).append(tableRow);
    
    /** Return element for call chaining */
    return tableRow;
  }
  
  table(nest = [`div`, `body`]) {
    /** Create element */
    const table = new elements.Table();
    
    /** Append element to container */
    this.container(nest).append(table);
    
    /** Return element for call chaining */
    return table;
  }
  
  template(nest = [`body`]) {
    /** Create element */
    const template = new elements.Template();
    
    /** Append element to container */
    this.container(nest).append(template);
    
    /** Return element for call chaining */
    return template;
  }
  
  textArea(nest = [`fieldset`, `form`]) {
    /** Create element */
    const textArea = new elements.TextArea();
    
    /** Append element to container */
    this.container(nest).append(textArea);
    
    /** Return element for call chaining */
    return textArea;
  }
  
  text(nest = [`div`, `body`]) {
    /** Create element */
    const text = new elements.Text();
    
    /** Append element to container */
    this.container(nest).append(text);
    
    /** Return element for call chaining */
    return text;
  }
  
  time(nest = [`div`, `body`]) {
    /** Create element */
    const time = new elements.Time();
    
    /** Append element to container */
    this.container(nest).append(time);
    
    /** Return element for call chaining */
    return time;
  }
  
  title(nest = [`head`]) {
    /** Create element */
    const title = new elements.Title();
    
    /** Append element to container */
    this.container(nest).append(title);
    
    /** Return element for call chaining */
    return title;
  }
  
  track(nest = [`audio`, `video`]) {
    /** Create element */
    const track = new elements.Track();
    
    /** Append element to container */
    this.container(nest).append(track);
    
    /** Return element for call chaining */
    return track;
  }
  
  underline(nest = [`div`, `body`]) {
    /** Create element */
    const underline = new elements.Underline();
    
    /** Append element to container */
    this.container(nest).append(underline);
    
    /** Return element for call chaining */
    return underline;
  }
  
  unorderedList(nest = [`div`, `body`]) {
    /** Create element */
    const unorderedList = new elements.UnorderedList();
    
    /** Append element to container */
    this.container(nest).append(unorderedList);
    
    /** Return element for call chaining */
    return unorderedList;
  }
  
  variable(nest = [`div`, `body`]) {
    /** Create element */
    const variable = new elements.Variable();
    
    /** Append element to container */
    this.container(nest).append(variable);
    
    /** Return element for call chaining */
    return variable;
  }
  
  video(nest = [`div`, `body`]) {
    /** Create element */
    const video = new elements.Video();
    
    /** Append element to container */
    this.container(nest).append(video);
    
    /** Return element for call chaining */
    return video;
  }
  
  wordBreakOpportunity(nest = [`div`, `body`]) {
    /** Create element */
    const wordBreakOpportunity = new elements.WordBreakOpportunity();
    
    /** Append element to container */
    this.container(nest).append(wordBreakOpportunity);
    
    /** Return element for call chaining */
    return wordBreakOpportunity;
  }
};

module.exports.Page = Page;
