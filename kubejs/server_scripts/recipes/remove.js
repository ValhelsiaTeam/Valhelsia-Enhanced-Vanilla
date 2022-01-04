// priority: 100

onEvent('recipes', function (event) {

  var idRemove = [

    // Oxidized
    'oxidized:copper_nugget', // Duplicate recipe.
    'oxidized:rose_gold_sword', // Duplicate recipe.
    'oxidized:rose_gold_pickaxe', // Duplicate recipe.
    'oxidized:rose_gold_axe', // Duplicate recipe.
    'oxidized:rose_gold_shovel', // Duplicate recipe.
    'oxidized:rose_gold_hoe', // Duplicate recipe.
    'oxidized:copper_button', // Conflicts with vanilla.

    // Additional Enchanted Miner
    'quarryplus:adv_quarry', // Duplicate machine.
    'quarryplus:adv_pump', // Duplicate machine.
    'quarryplus:quarry',
    'quarryplus:install_bedrock_module_adv_quarry',
    'quarryplus:install_bedrock_module_quarry',
    'quarryplus:remove_bedrock_module',

    // Blockus
    'blockus:ender_block',
    'blockus:ender_pearl_from_ender_block',
    'blockus:paper_lamp',
    'blockus:legacy_stonecutter',
    'blockus:legacy_glowing_obsidian',
    'blockus:legacy_crying_obsidian',
    'blockus:legacy_nether_reactor_core',
    'blockus:legacy_glowstone',
    'blockus:legacy_diamond_block',
    'blockus:legacy_explosion_proof_gold_block',
    'blockus:legacy_explosion_proof_gold_block_from_legacy_gold_block',
    'blockus:legacy_lapis_block',
    'blockus:legacy_sponge',
    'blockus:legacy_coal_block',
    'blockus:legacy_gold_block',
    'blockus:legacy_iron_block',
    'blockus:legacy_gravel',
    'blockus:legacy_mossy_cobblestone',
    'blockus:legacy_cobblestone',
    'blockus:legacy_first_cobblestone',
    'blockus:legacy_first_cobblestone_stonecutting',
    'blockus:legacy_planks',
    'blockus:legacy_bricks',
    'blockus:legacy_leaves',
    'blockus:legacy_grass_block',
    'blockus:legacy_first_grass_block',
    'blockus:legacy_first_grass_block_stonecutting',

    // Quartz Elevator
    'quartzelv:quartz_elevator',
    'quartzelv:quartz_elevator_from_quartz_block',
    'quartzelv:smooth_quartz_elevator_from_smooth_quartz',

    // Decorative Blocks
    'decorative_blocks:chain',
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })

  var outputRemove = [
  ]

  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
