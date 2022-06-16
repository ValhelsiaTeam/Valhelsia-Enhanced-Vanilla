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
  addTooltip('mobscarecrow:default_scarecrow', 'valhelsia.mob_scarecrow_tooltip');
  addTooltip('mobscarecrow:cat_plushie', 'valhelsia.cat_plushie_tooltip');
  addTooltip('mobscarecrow:wolf_plushie', 'valhelsia.wolf_plushie_tooltip');
  addTooltip('mobscarecrow:pigeon_plushie', 'valhelsia.pigeon_plushie_tooltip');
  addTooltip('mobscarecrow:iron_golem_plushie', 'valhelsia.iron_golem_plushie_tooltip');
  addTooltip('mobscarecrow:snow_golem_plushie', 'valhelsia.snow_golem_plushie_tooltip');
  addTooltip('mobscarecrow:axolotl_plushie', 'valhelsia.axolotl_plushie_tooltip');
  addTooltip('mobscarecrow:villager_plushie', 'valhelsia.villager_plushie_tooltip');
  addTooltip('mobscarecrow:pillager_plushie', 'valhelsia.pillager_plushie_tooltip');
  addTooltip('mobscarecrow:copper_golem_plushie', 'valhelsia.copper_golem_plushie_tooltip');
  addTooltip('mobscarecrow:zombified_piglin_plushie', 'valhelsia.zombified_piglin_plushie_tooltip');
  addTooltip('mobscarecrow:gold_pig_plushie', 'valhelsia.gold_pig_plushie_tooltip');
  addTooltip('mobscarecrow:rabbit_plushie', 'valhelsia.rabbit_plushie_tooltip');
  addTooltip('mobscarecrow:steve_plushie', 'valhelsia.steve_plushie_tooltip');
  addTooltip('mobscarecrow:chicken_plushie', 'valhelsia.chicken_plushie_tooltip');
  addTooltip('mobscarecrow:zombie_plushie', 'valhelsia.zombie_plushie_tooltip');
  addTooltip('mobscarecrow:piglin_plushie', 'valhelsia.piglin_plushie_tooltip');
})