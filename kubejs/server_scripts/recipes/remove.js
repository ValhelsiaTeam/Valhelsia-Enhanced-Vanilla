// priority: 100
// Valhelsia: Enhanced Vanilla

/**
 * @file Recipe removals for Valhelsia: Enhanced Vanilla.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 */

/**
 * Recipe Removal Event Handler (to be used for recipe removal only).
 */
onEvent('recipes', (event) => {

  // Remove recipes by recipe ID.
  [
    // Architect's Palette
    'architects_palette:ender_pearl_block',

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
    'blockus:blockus_barrels_into_vanilla_barrel',
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
    'blockus:rainbow_glowstone',

    // Ecologics
    'ecologics:moss_block',
    'ecologics:surface_moss',

    // Quartz Elevator
    'quartzelv:quartz_elevator',
    'quartzelv:quartz_elevator_from_quartz_block',
    'quartzelv:smooth_quartz_elevator_from_smooth_quartz',

    // Decorative Blocks
    'decorative_blocks:chain',
    'decorative_blocks:rocky_dirt',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // None yet.
  ].forEach((ingredientID) => event.remove({input: ingredientID}));

  // Remove recipes by output.
  [ 
    // Additional Additions
    'additionaladditions:fried_egg',

    // Blockus
    'blockus:snow_bricks',
    'blockus:snow_brick_stairs',
    'blockus:snow_brick_slab',
    'blockus:snow_brick_wall',
    'blockus:amethyst_bricks',
    'blockus:amethyst_brick_stairs',
    'blockus:amethyst_brick_slab',
    'blockus:amethyst_brick_wall',
    'blockus:polished_amethyst',
    'blockus:polished_amethyst_stairs',
    'blockus:polished_amethyst_slab',
    'blockus:chiseled_amethyst',

    // Twigs
    'twigs:mossy_bricks',
    'twigs:mossy_brick_stairs',
    'twigs:mossy_brick_slab',
    'twigs:mossy_brick_wall',
  ].forEach((itemID) => event.remove({output: itemID}));
});
