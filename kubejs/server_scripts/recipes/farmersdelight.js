// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Recipe additions for Farmer's Delight's crafting methods.
 * 
 * Includes templates for adding cutting board or cooking pot recipes,
 * including presets for different categories of cutting board recipe
 * (eg. stripping, chopping, cutting).
 * 
 */

/**
 * Farmer's Delight Recipe Event Handler
 */
onEvent('recipes', (event) => {

  /**
   * Creates an Axe Stripping recipe for the Farmer's Delight Cutting Board.
   * Automatically adds the tree bark as one output.
   * @param {(string|Item)} output The resulting stripped log. 
   * @param {(string|Ingredient)} input An unstripped log to be stripped.
   */
  const strip = (output, input) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool',
        tag: 'c:axes'
      },
      result: [
        Item.of(output).toResultJson(),
        {item: 'farmersdelight:tree_bark'}
      ],
      sound: 'minecraft:item.axe.strip'
    });
  };

  /**
   * Creates an Axe Chopping recipe for the Farmer's Delight Cutting Board.
   * @param {(string|Item)} output The output item.
   * @param {(string|Ingredient)} input The input ingredient.
   */
  const chop = (output, input) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: 'farmersdelight:tool',
        tag: 'c:axes'
      },
      result: [
        Item.of(output).toResultJson()
      ]
    });
  };

  /**
   * Creates a Knife Cutting recipe for the Farmer's Delight Cutting Board.
   * @param {Item[]} output An array of items to output.
   * @param {(string|Ingredient)} input The input ingredient(s).
   */
  const cut = (output, input) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        tag: 'c:tools/knives'
      },
      result: output
    });
  };

  /**
   * Creates a Cooking Pot recipe for Farmer's Delight.
   * Automatically grants 0.2 XP and takes 200 ticks to cook.
   * @param {(string|Item)} output An output item.
   * @param {(string|Ingredient)} input An input ingredient.
   * @param {(string|Item)} container An item to use as a container (eg. 'minecraft:bowl').
   */
  const pot = (output, input, container) => {
    event.custom({
      type: 'farmersdelight:cooking',
      ingredients: input,
      result: Item.of(output).toResultJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    });
  };

  // ----- Axe Recipes -----
  strip('architects_palette:stripped_twisted_log', 'architects_palette:twisted_log');
  strip('architects_palette:stripped_twisted_wood', 'architects_palette:twisted_wood');
  strip('blockus:stripped_white_oak_log', 'blockus:white_oak_log');
  strip('blockus:stripped_white_oak_wood', 'blockus:white_oak_wood');
  strip('techreborn:rubber_log_stripped', 'techreborn:rubber_log');
  strip('techreborn:stripped_rubber_wood', 'techreborn:rubber_wood');

  // ----- Knife Recipes -----
  cut([Item.of('minecraft:string', 2)], '#minecraft:wool');

  // ----- Cooking Pot Recipes -----

});
