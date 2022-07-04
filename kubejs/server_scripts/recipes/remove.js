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

    // Better End
    'betterend:charcoal_block',
    
    // Oxidized
    'oxidized:copper_nugget', // Duplicate recipe.
    'oxidized:rose_gold_sword', // Duplicate recipe.
    'oxidized:rose_gold_pickaxe', // Duplicate recipe.
    'oxidized:rose_gold_axe', // Duplicate recipe.
    'oxidized:rose_gold_shovel', // Duplicate recipe.
    'oxidized:rose_gold_hoe', // Duplicate recipe.
    'oxidized:copper_button', // Conflicts with vanilla.

    // Blockus
    'blockus:blockus_barrels_into_vanilla_barrel',
    'blockus:ender_block',
    'blockus:ender_pearl_from_ender_block',
    'blockus:paper_lamp',
    'blockus:legacy_stonecutter',
    'blockus:legacy_nether_reactor_core',
    'blockus:legacy_planks',
    'blockus:legacy_leaves',
    'blockus:legacy_grass_block',
    'blockus:legacy_sapling',
    'blockus:rainbow_glowstone',
    'blockus:coal_from_legacy_coal_block',
    'blockus:charcoal_from_legacy_charcoal_block',
    'blockus:lapis_lazuli_from_legacy_lapis_block',
    'blockus:iron_ingot_from_legacy_iron_block',
    'blockus:gold_ingot_from_legacy_gold_block',
    'blockus:gold_ingot_from_legacy_explosion_proof_gold_block',

    // Ecologics
    'ecologics:moss_block',
    'ecologics:surface_moss',

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

    // Architect's Palette
    'architects_palette:charcoal_block',

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
    'blockus:ice_bricks',
    'blockus:ice_brick_wall',
    'blockus:legacy_mossy_cobblestone',
    'blockus:legacy_first_cobblestone',
    'blockus:legacy_first_grass_block',
    'blockus:legacy_coal_block',
    'blockus:legacy_gold_block',
    'blockus:legacy_iron_block',
    'blockus:legacy_explosion_proof_gold_block',
    'blockus:legacy_diamond_block',
    'blockus:legacy_lapis_block',
    'blockus:legacy_sponge',
    'blockus:legacy_gravel',
    'blockus:legacy_glowing_obsidian',
    'blockus:legacy_glowstone',
    'blockus:legacy_crying_obsidian',
    'blockus:legacy_cobblestone',
    'blockus:legacy_bricks',

    // Twigs
    'twigs:mossy_bricks',
    'twigs:mossy_brick_stairs',
    'twigs:mossy_brick_slab',
    'twigs:mossy_brick_wall',
  ].forEach((itemID) => event.remove({output: itemID}));
});
