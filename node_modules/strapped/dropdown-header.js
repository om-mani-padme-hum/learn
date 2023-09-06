/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 dropdown headers.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class DropdownHeader extends html.H6 {
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
    this.addClass(`dropdown-header`);
            
    return super.render(indent);
  }
}

module.exports.DropdownHeader = DropdownHeader;
