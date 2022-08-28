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
  replaceInput('betterend:ender_dust', '#c:ender_pearl_dusts');
  replaceInput('techreborn:ender_pearl_dust', '#c:ender_pearl_dusts');
  replaceInput('ae2:ender_dust', '#c:ender_pearl_dusts');
  replaceInput('farmersdelight:tree_bark', '#immersive_weathering:bark');

  // ----- Unification -----
  replaceInput('blockus:snow_bricks', 'ecologics:snow_bricks');
  replaceInput('blockus:amethyst_bricks', 'twigs:polished_amethyst_bricks');
  replaceInput('blockus:polished_amethyst', 'twigs:polished_amethyst');
  replaceInput('techreborn:brass_ingot', '#c:ingots/brass');
  replaceInput('techreborn:brass_storage_block', '#c:storage_blocks/brass');
  replaceInput('techreborn:brass_nugget', '#c:nuggets/brass');
  replaceInput('techreborn:iron_plate', '#c:iron_plates');
  replaceInput('techreborn:gold_plate', '#c:gold_plates');
  replaceInput('techreborn:zinc_ingot', '#c:zinc_ingots');
  replaceInput('techreborn:zinc_nugget', '#c:zinc_nuggets');
  
  replaceOutput('betterend:ender_dust', 'techreborn:ender_pearl_dust');
  replaceOutput('ae2:ender_dust', 'techreborn:ender_pearl_dust');

  replaceOutput('techreborn:copper_plate', 'create:copper_sheet');
  replaceOutput('techreborn:iron_plate', 'create:iron_sheet');
  replaceOutput('techreborn:gold_plate', 'create:golden_sheet');
  replaceOutput('techreborn:brass_plate', 'create:brass_sheet');
  replaceOutput('techreborn:obsidian_plate', 'create:sturdy_sheet');
  replaceOutput('techreborn:brass_ingot', 'create:brass_ingot');
  replaceOutput('techreborn:brass_nugget', 'create:brass_nugget');
  replaceOutput('techreborn:copper_nugget', 'create:copper_nugget');
  replaceOutput('techreborn:zinc_nugget', 'create:zinc_nugget');

  replaceOutput('techreborn:obsidian_dust', 'create:powdered_obsidian');
  replaceInput('techreborn:obsidian_dust', '#c:obsidian_dusts');
});
