// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Shapeless recipe additions for Valhelsia: Enhanced Vanilla.
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {

  // Twigs
  event.shapeless('twigs:mossy_cobblestone_bricks', ['twigs:cobblestone_bricks', 'immersive_weathering:moss_clump']);
  event.shapeless('twigs:mossy_cobblestone_bricks', ['twigs:cobblestone_bricks', 'minecraft:vine']);

  // Ecologics
  event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block');  

  // Oxidized
  event.shapeless('oxidized:copper_button', ['#minecraft:planks', 'minecraft:copper_ingot']);
});
