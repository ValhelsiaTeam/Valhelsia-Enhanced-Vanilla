// priority: 0
// Valhelsia: Enhanced Vanilla

/**
 * @file Add or modify item tooltips.
 * 
 * Includes a convenience function for adding translated tooltips,
 * as all tooltips included in Valhelsia packs should use language entries
 * to ensure translations can be made via CrowdIn.
 */

/**
 * Event handler for adding / adjusting item tooltips.
 */
onEvent('item.tooltip', tooltip => {

  /**
   * Adds a translated tooltip to an item (using default colour).
   * @param {string} itemID The ID of the item to add the tooltip to.
   * @param {string} textID The language entry for the tooltip.
   */
  const addTooltip = (itemID, textID) => {
    tooltip.add(itemID, Text.translate(textID));
  };
})