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

  // Axes that can fell trees (FallingTree mod):
  tooltip.add([
    'additionaladditions:rose_gold_axe', 
    'minecraft:diamond_axe', 
    'minecraft:netherite_axe', 
    'dragonloot:dragon_axe', 
    'betterend:terminite_axe', 
    'betterend:aeternium_axe'
  ], ['', Text.translate('valhelsia.can_fell_tree_tooltip').green()]);

  // Axes that can't fell trees (FallingTree mod):
  tooltip.add([
    'minecraft:wooden_axe', 
    'minecraft:stone_axe', 
    'minecraft:iron_axe',
    'minecraft:golden_axe', 
    'betterend:thallasium_axe', 
    'techreborn:bronze_axe', 
    'techreborn:ruby_axe', 
    'techreborn:peridot_axe', 
    'techreborn:sapphire_axe', 
    'ae2:nether_quartz_axe', 
    'ae2:certus_quartz_axe',
    'ae2:fluix_axe'
  ], ['', Text.translate('valhelsia.cannot_fell_tree_tooltip').red()]);

  // Mob Scarecrows Tooltips
  addTooltip('mobscarecrow:scarecrow', 'valhelsia.mob_scarecrow_tooltip');
  addTooltip('mobscarecrow:creeper_scarecrow', 'valhelsia.creeper_scarecrow_plushie_tooltip');
  addTooltip('mobscarecrow:creeper_scarecrow_statue', 'valhelsia.creeper_scarecrow_statue_tooltip');
  addTooltip('mobscarecrow:skeleton_scarecrow', 'valhelsia.skeleton_scarecrow_plushie_tooltip');
  addTooltip('mobscarecrow:skeleton_scarecrow_statue', 'valhelsia.skeleton_scarecrow_statue_tooltip');
  addTooltip('mobscarecrow:spider_scarecrow', 'valhelsia.spider_scarecrow_plushie_tooltip');
  addTooltip('mobscarecrow:spider_scarecrow_statue', 'valhelsia.spider_scarecrow_statue_tooltip');
  addTooltip('mobscarecrow:zombie_scarecrow', 'valhelsia.zombie_scarecrow_plushie_tooltip');
  addTooltip('mobscarecrow:zombie_scarecrow_statue', 'valhelsia.zombie_scarecrow_statue_tooltip');
  addTooltip('mobscarecrow:turtle_scarecrow', 'valhelsia.turtle_scarecrow_plushie_tooltip');
  addTooltip('mobscarecrow:turtle_scarecrow_statue', 'valhelsia.turtle_scarecrow_statue_tooltip');
  addTooltip('mobscarecrow:endermite_scarecrow', 'valhelsia.endermite_scarecrow_plushie_tooltip');
  addTooltip('mobscarecrow:endermite_scarecrow_statue', 'valhelsia.endermite_scarecrow_statue_tooltip');
})