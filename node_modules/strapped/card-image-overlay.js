/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 card image overlays.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class CardImageOverlay extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.addClass(`card-img-overlay`);
    
    return super.render(indent);
  }
}

module.exports.CardImageOverlay = CardImageOverlay;
