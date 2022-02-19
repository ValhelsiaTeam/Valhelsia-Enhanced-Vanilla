// priority: 10

onEvent('recipes', function (event) {
  // Fixes incorrect output for Tech Reborn's raw ore storage blocks:
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_iridium_storage_block'}, 'techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_lead_storage_block'}, 'techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_silver_storage_block'}, 'techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_tin_storage_block'}, 'techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block')
  event.replaceOutput({id: 'techreborn:crafting_table/storage_block/raw_tungsten_storage_block'}, 'techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block')

  // Inter-mod compatibility:
  event.replaceInput({}, 'betterend:ender_dust', '#c:ender_pearl_dusts')
  event.replaceInput({}, 'techreborn:ender_pearl_dust', '#c:ender_pearl_dusts')

  // Unification:
  event.replaceOutput({}, 'betterend:ender_dust', 'techreborn:ender_pearl_dust')
  event.replaceOutput({}, 'ae2:ender_dust', 'techreborn:ender_pearl_dust')
})