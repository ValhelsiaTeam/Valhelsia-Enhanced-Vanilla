// priority: 80
// Valhelsia: Enhanced Vanilla

/**
 * @file Item Tag Additions for Valhelsia: Enhanced Vanilla.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 */

/**
 * Item Tag Event Handler (to be used for tag addition only).
 */
onEvent('tags.items', event => {
  
  // Tools
  event.get('fabric:swords').add([
    'ae2:certus_quartz_sword',
    'ae2:nether_quartz_sword',
  ]);

  event.get('fabric:pickaxes').add([
    'ae2:certus_quartz_pickaxe',
    'ae2:nether_quartz_pickaxe',
  ]);

  event.get('fabric:axes').add([
    'ae2:certus_quartz_axe',
    'ae2:nether_quartz_axe',
  ]);

  event.get('fabric:shovels').add([
    'ae2:certus_quartz_shovel',
    'ae2:nether_quartz_shovel',
  ]);

  event.get('fabric:hoes').add([
    'ae2:certus_quartz_hoe',
    'ae2:nether_quartz_hoe',
  ]);

  // Machetes
  event.get('harvest_scythes:machetes').add([
    'harvest_scythes:wooden_machete',
    'harvest_scythes:stone_machete',
    'harvest_scythes:iron_machete',
    'harvest_scythes:golden_machete', 
    'harvest_scythes:diamond_machete',
    'harvest_scythes:netherite_machete',
    'harvest_scythes:creative_machete',
    'harvest_scythes:peridot_machete',
    'harvest_scythes:sapphire_machete',
    'harvest_scythes:ruby_machete',
    'harvest_scythes:bronze_machete',
    'harvest_scythes:dragon_machete',
  ]);

  // ----- Inter-mod Compatibility -----
  event.get('valhelsia:storage_blocks/ender').add([
    'architects_palette:ender_pearl_block',
    'betterend:ender_block',
    'blockus:ender_block', // This is disabled, but if a player somehow gets one it should work in recipes anyway.
  ]);

  event.add('c:ender_pearl_dusts', 'betterend:ender_dust');
});