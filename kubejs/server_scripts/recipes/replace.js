// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Recipe input / output replacements for Valhelsia: Enhanced Vanilla.
 * 
 * Contains several convenience functions for frequently used removal approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a prefered mod to use.
 * 
 */

/**
 * Recipe Replacement Event Handler
 */
onEvent('recipes', (event) => {

  // Convenience Functions
  const replaceInputID = (recipeID, from, to) => { event.replaceInput({id: recipeID}, from, to, true)};
  const replaceOutputID = (recipeID, from, to) => { event.replaceOutput({id: recipeID}, from, to, true)};
  const replaceInput = (from, to) => { event.replaceInput({}, from, to, true)};
  const replaceOutput = (from, to) => { event.replaceOutput({}, from, to, true)};

  // ----- Bug Fixes -----
  replaceOutputID('techreborn:crafting_table/storage_block/raw_iridium_storage_block', 'techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block');
  replaceOutputID('techreborn:crafting_table/storage_block/raw_lead_storage_block', 'techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block');
  replaceOutputID('techreborn:crafting_table/storage_block/raw_silver_storage_block', 'techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block');
  replaceOutputID('techreborn:crafting_table/storage_block/raw_tin_storage_block', 'techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block');
  replaceOutputID('techreborn:crafting_table/storage_block/raw_tungsten_storage_block', 'techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block');
  
  replaceInputID('techreborn:crafting_table/raw/raw_iridium_from_block', 'techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block');
  replaceInputID('techreborn:crafting_table/raw/raw_lead_from_block', 'techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block');
  replaceInputID('techreborn:crafting_table/raw/raw_silver_from_block', 'techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block');
  replaceInputID('techreborn:crafting_table/raw/raw_tin_from_block', 'techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block');
  replaceInputID('techreborn:crafting_table/raw/raw_tungsten_from_block', 'techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block');

  // ----- Inter-mod Compatibility -----

  // Ingots
  replaceInput('techreborn:brass_ingot', '#c:ingots/brass');
  replaceInput('techreborn:zinc_ingot', '#c:zinc_ingots');

  // Storage Blocks
  replaceInput('techreborn:brass_storage_block', '#c:storage_blocks/brass');

  // Nuggets
  replaceInput('techreborn:brass_nugget', '#c:nuggets/brass');
  replaceInput('techreborn:zinc_nugget', '#c:zinc_nuggets');

  // Dusts
  replaceInput('betterend:ender_dust', '#c:ender_pearl_dusts');
  replaceInput('techreborn:ender_pearl_dust', '#c:ender_pearl_dusts');
  replaceInput('ae2:ender_dust', '#c:ender_pearl_dusts');
  replaceInput('techreborn:obsidian_dust', '#c:obsidian_dusts');

  // Plates
  replaceInput('techreborn:brass_plate', '#c:plates/brass');
  replaceInput('techreborn:copper_plate', '#c:plates/copper');
  replaceInput('techreborn:gold_plate', '#c:plates/gold');
  replaceInput('techreborn:iron_plate', '#c:plates/iron');
  replaceInput('techreborn:obsidian_plate', '#c:plates/obsidian');
  replaceInput('techreborn:zinc_plate', '#c:plates/zinc');

  replaceInput('create:brass_sheet', '#c:plates/brass');
  replaceInput('create:copper_sheet', '#c:plates/copper');
  replaceInput('create:golden_sheet', '#c:plates/gold');
  replaceInput('create:iron_sheet', '#c:plates/iron');
  replaceInput('create:sturdy_sheet', '#c:plates/obsidian');

  // Misc
  replaceInput('farmersdelight:tree_bark', '#immersive_weathering:bark');
  replaceInput('blockus:snow_bricks', 'ecologics:snow_bricks');
  replaceInput('blockus:amethyst_bricks', 'twigs:polished_amethyst_bricks');
  replaceInput('blockus:polished_amethyst', 'twigs:polished_amethyst');

  // ----- Unification -----
  // When 2+ mods have almost identical items, add preferred outputs here.

  // Ingots
  replaceOutput('techreborn:brass_ingot', 'create:brass_ingot');

  // Nuggets  
  replaceOutput('techreborn:brass_nugget', 'create:brass_nugget');
  replaceOutput('techreborn:copper_nugget', 'create:copper_nugget');
  replaceOutput('techreborn:zinc_nugget', 'create:zinc_nugget');

  // Note: Storage Blocks outputs aren't removed here as blocks from multiple mods have a use in building.

  // Dusts
  replaceOutput('betterend:ender_dust', 'techreborn:ender_pearl_dust');
  replaceOutput('ae2:ender_dust', 'techreborn:ender_pearl_dust');
  replaceOutput('techreborn:obsidian_dust', 'create:powdered_obsidian');

  // Plates
  replaceOutput('techreborn:brass_plate', 'create:brass_sheet');
  replaceOutput('techreborn:copper_plate', 'create:copper_sheet');
  replaceOutput('techreborn:gold_plate', 'create:golden_sheet');
  replaceOutput('techreborn:iron_plate', 'create:iron_sheet');
  replaceOutput('techreborn:obsidian_plate', 'create:sturdy_sheet');
});
