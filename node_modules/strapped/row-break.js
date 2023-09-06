/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 row breaks.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class RowBreak extends html.Div {
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
    this.addClass(`wd-100`);
    
    return super.render(indent);
  }
}

module.exports.RowBreak = RowBreak;
