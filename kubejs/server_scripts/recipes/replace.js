// priority: 10
// Valhelsia: Enhanced Vanilla
// Recipe Input & Output Replacements

onEvent('recipes', (event) => {
  // ----- Bug Fixes -----
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_iridium_storage_block'}, 'techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_lead_storage_block'}, 'techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_silver_storage_block'}, 'techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_tin_storage_block'}, 'techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_tungsten_storage_block'}, 'techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block')
  
  event.replaceInput({id: 'techreborn:crafting_table/raw/raw_iridium_from_block'}, 'techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block')
  event.replaceInput({id: 'techreborn:crafting_table/raw/raw_lead_from_block'}, 'techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block')
  event.replaceInput({id: 'techreborn:crafting_table/raw/raw_silver_from_block'}, 'techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block')
  event.replaceInput({id: 'techreborn:crafting_table/raw/raw_tin_from_block'}, 'techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block')
  event.replaceInput({id: 'techreborn:crafting_table/raw/raw_tungsten_from_block'}, 'techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block')


  // ----- Inter-mod Compatibility -----
  event.replaceInput({}, 'betterend:ender_dust', '#c:ender_pearl_dusts')
  event.replaceInput({}, 'techreborn:ender_pearl_dust', '#c:ender_pearl_dusts')

  // ----- Unification -----
  event.replaceOutput({}, 'betterend:ender_dust', 'techreborn:ender_pearl_dust')
  event.replaceOutput({}, 'ae2:ender_dust', 'techreborn:ender_pearl_dust')
});