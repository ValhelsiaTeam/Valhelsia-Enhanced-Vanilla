// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Recipe input / output replacements for Valhelsia: Enhanced Vanilla.
 * 
 * Contains several convenience functions for frequently used removal approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a prefered mod to use.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // Convenience Functions
  const replaceInputID = (recipeID, from, to) => { event.replaceInput({id: recipeID}, from, to, true)};
  const replaceOutputID = (recipeID, from, to) => { event.replaceOutput({id: recipeID}, from, to, true)};
  const replaceInput = (from, to) => { event.replaceInput({}, from, to, true)};
  const replaceOutput = (from, to) => { event.replaceOutput({}, from, to, true)};

  // ----- Inter-mod Compatibility -----
  replaceInput('farmersdelight:tree_bark', '#immersive_weathering:bark');

});