/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 dropdown items.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class DropdownItem extends html.Anchor {
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
    this.addClass(`dropdown-item`);
            
    return super.render(indent);
  }
}

module.exports.DropdownItem = DropdownItem;
