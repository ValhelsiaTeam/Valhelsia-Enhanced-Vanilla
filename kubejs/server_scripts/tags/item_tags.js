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
  event.get('c:swords').add([
    'ae2:certus_quartz_sword',
    'ae2:nether_quartz_sword',
  ]);

  event.get('c:pickaxes').add([
    'ae2:certus_quartz_pickaxe',
    'ae2:nether_quartz_pickaxe',
  ]);

  event.get('c:tools/axes').add([
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

  // Ingot Unification
  event.add('c:ingots', [
    'techreborn:brass_ingot', 
    'techreborn:zinc_ingot',
  ]);

  event.add('c:ingots/brass', 'techreborn:brass_ingot');
  event.add('c:ingots/zinc', 'techreborn:zinc_ingot');

  event.add('c:brass_ingots', 'create:brass_ingot');
  event.add('c:zinc_ingots', 'create:zinc_ingot');

  // Nugget Unification
  event.add('c:nuggets', [
    'techreborn:brass_nugget',
    'techreborn:zinc_nugget',
  ]);

  event.add('c:nuggets/brass', 'techreborn:brass_nugget');
  event.add('c:nuggets/zinc', 'techreborn:zinc_nugget');

  event.add('c:brass_nuggets', 'create:brass_nugget');
  event.add('c:zinc_nuggets', 'create:zinc_nugget');

  // Storage Block Unification
  event.add('c:storage_blocks', [
    'techreborn:brass_storage_block',
    'techreborn:zinc_storage_block',
  ]);

  event.add('c:storage_blocks/brass', 'techreborn:brass_storage_block');
  event.add('c:storage_blocks/zinc', 'techreborn:zinc_storage_block');

  // Plate Unification
  event.add('c:plates', [
    'techreborn:brass_plate',
    'techreborn:copper_plate',
    'techreborn:gold_plate',
    'techreborn:iron_plate',
    'techreborn:zinc_plate',
  ]);

  event.add('c:plates/brass', 'techreborn:brass_plate');
  event.add('c:plates/copper', 'techreborn:copper_plate');
  event.add('c:plates/gold', 'techreborn:gold_plate');
  event.add('c:plates/iron', 'techreborn:iron_plate');
  event.add('c:plates/zinc', 'techreborn:zinc_plate');

  event.add('c:brass_plates', 'create:brass_sheet');
  event.add('c:copper_plates', 'create:copper_sheet');
  event.add('c:gold_plates', 'create:golden_sheet');
  event.add('c:iron_plates', 'create:iron_sheet');

  // Farmer's Delight compatibility retagging
  event.add('c:tools/pickaxes', '#c:pickaxes')
  event.add('c:tools/axes', '#c:axes')

  // Enhanced mushrooms uses fabric:tools/axes in their recipes
  event.add('fabric:tools/axes', '#c:axes')

});
