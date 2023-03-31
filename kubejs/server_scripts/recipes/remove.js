// priority: 100
// Valhelsia: Enhanced Vanilla

/**
 * @file Recipe removals for Valhelsia: Enhanced Vanilla.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Recipe Removal Event Handler (to be used for recipe removal only).
 */
ServerEvents.recipes(event => {

  // Remove recipes by recipe ID.
  [
    // Oxidized
    'oxidized:copper_nugget', // Duplicate recipe.
    'oxidized:rose_gold_sword', // Duplicate recipe.
    'oxidized:rose_gold_pickaxe', // Duplicate recipe.
    'oxidized:rose_gold_axe', // Duplicate recipe.
    'oxidized:rose_gold_shovel', // Duplicate recipe.
    'oxidized:rose_gold_hoe', // Duplicate recipe.
    'oxidized:copper_button', // Conflicts with vanilla.

    // Ecologics
    'ecologics:moss_block',
    'ecologics:surface_moss',

    // Decorative Blocks
    'decorative_blocks:chain',
    'decorative_blocks:rocky_dirt',

    // Nether's Delight
    'nethersdelight:iron_machete',
    'nethersdelight:golden_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // None yet.
  ].forEach((ingredientID) => event.remove({input: ingredientID}));

  // Remove recipes by output.
  [ 
    // Additional Additions
    'additionaladditions:fried_egg',

    // Twigs
    'twigs:mossy_bricks',
    'twigs:mossy_brick_stairs',
    'twigs:mossy_brick_slab',
    'twigs:mossy_brick_wall',
  ].forEach((itemID) => event.remove({output: itemID}));
});
