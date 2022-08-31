// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Tech Reborn Additions & Compatibility
 */

/**
 * Tech Reborn Recipe Event Handler
 */
onEvent('recipes', (event) => {
  
  /**
   * Adds a recipe to the Grinder.
   * @param {string|Item} outputs Output item(s).
   * @param {string|Ingredient} inputs Input ingredient(s).
   * @param {*} [power] Power usage (defaults to 2).
   * @param {*} [time] Processing time (defaults to 1440).
   */
  const grind = (output, input, power, time) => {
    if (typeof power == 'undefined') {
      power = 2;
    }

    if (typeof time == 'undefined') {
      time = 1440;
    }

    event.custom({
      type: 'techreborn:grinder',
      power: power,
      time: time,
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      results: [
        Item.of(output).toJson()
      ]
    });
  };

  /**
   * Adds a recipe to the Implosion Compressor.
   * @param {string[]|Item[]} outputs An array of output items.
   * @param {string[]|Ingredient[]} inputs An array of input ingredients.
   * @param {*} [power] Power usage (defaults to 30).
   * @param {*} [time] Processing time (defaults to 2000).
   */
  const implosion = (outputs, inputs, power, time) => {
    if (typeof power == 'undefined') {
      power = 30;
    }

    if (typeof time == 'undefined') {
      time = 2000;
    }

    event.custom({
      type: 'techreborn:implosion_compressor',
      power: power,
      time: time,
      ingredients: inputs,
      results: outputs
    });
  };

  /**
   * Adds a recipe to the Alloy Smelter.
   * @param {string[]|Item[]} outputs An array of output items.
   * @param {string[]|Ingredient[]} inputs An array of input ingredients.
   * @param {*} [power] Power usage (defaults to 6).
   * @param {*} [time] Processing time (defaults to 200).
   */
  const alloy = (outputs, inputs, power, time) => {
    if (typeof power == 'undefined') {
      power = 6;
    }

    if (typeof time == 'undefined') {
      time = 200;
    }

    event.custom({
      type: 'techreborn:alloy_smelter',
      power: power,
      time: time,
      ingredients: inputs,
      results: outputs
    });
  };
  // ----- Grinder Recipes -----
  grind('techreborn:marble_dust', 'blockus:marble', 2, 1440);

  // ----- Implosion Compressor Recipes -----
  implosion(['8x ae2:sky_stone_block', '16x techreborn:dark_ashes_dust'], ['8x minecraft:crying_obsidian', '16x minecraft:tnt'], 30, 2000);
  implosion(['8x ae2:sky_stone_block', '4x techreborn:ender_eye_small_dust'], ['8x minecraft:crying_obsidian', '4x minecraft:end_crystal'], 30, 2000);

  // ----- Alloy Smelter Recipes -----
  // None yet.
  
});