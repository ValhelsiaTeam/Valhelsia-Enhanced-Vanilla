// priority: 80
// Valhelsia: Enhanced Vanilla

/**
 * @file Item Tag Additions for Valhelsia: Enhanced Vanilla.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Item Tag Event Handler (to be used for tag addition only).
 */
ServerEvents.tags('item', event => {
  
  // Tools
  event.add('fabric:swords', [
    'ae2:certus_quartz_sword',
    'ae2:nether_quartz_sword',
  ]);

  event.add('fabric:pickaxes', [
    'ae2:certus_quartz_pickaxe',
    'ae2:nether_quartz_pickaxe',
  ]);

  event.add('fabric:axes', [
    'ae2:certus_quartz_axe',
    'ae2:nether_quartz_axe',
  ]);

  event.add('fabric:shovels', [
    'ae2:certus_quartz_shovel',
    'ae2:nether_quartz_shovel',
  ]);

  event.add('fabric:hoes', [
    'ae2:certus_quartz_hoe',
    'ae2:nether_quartz_hoe',
  ]);

  // Machetes
  event.add('harvest_scythes:machetes', [
    'harvest_scythes:wooden_machete',
    'harvest_scythes:stone_machete',
    'harvest_scythes:iron_machete',
    'harvest_scythes:golden_machete', 
    'harvest_scythes:diamond_machete',
    'harvest_scythes:netherite_machete',
    'harvest_scythes:creative_machete',
    'harvest_scythes:dragon_machete',
  ]);

  // ----- Inter-mod Compatibility -----
  event.add('c:ender_pearl_dusts', 'betterend:ender_dust');

});