// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Recipe additions for Create's crafting methods.
 * 
 */

onEvent('recipes', event => {

  event.recipes.create.mixing(
    ['2x techreborn:electrum_ingot'],
    ['minecraft:gold_ingot', '#c:silver_ingots']
  ).heated();

  
  // Crushing recipes for TR ores.
  // Generally same outputs as industrial grinder with water.
  event.recipes.create.crushing(
    [
      '4x techreborn:bauxite_dust',
      'techreborn:aluminum_dust',
    ],
    '#c:bauxite_ores'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:galena_dust',
      'techreborn:sulfur_dust'
    ],
    '#c:galena_ores'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:raw_iridium',
      'techreborn:platinum_small_dust'
    ],
    '#c:iridium_ores'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:raw_lead',
      '2x techreborn:galena_small_dust'
    ],
    '#c:lead_ores'
  );

  event.recipes.create.crushing(
    [
      'techreborn:peridot_gem',
      '6x techreborn:peridot_small_dust',
      '2x techreborn:emerald_small_dust'
    ],
    'techreborn:peridot_ore'
  );

  event.recipes.create.crushing(
    [
      '5x techreborn:pyrite_dust',
      '2x techreborn:sulfur_dust'
    ],
    '#c:pyrite_ores'
  );

  event.recipes.create.crushing(
    [
      'techreborn:ruby_gem',
      '6x techreborn:ruby_small_dust',
      '2x techreborn:red_garnet_small_dust'
    ],
    '#c:ruby_ores'
  );

  event.recipes.create.crushing(
    [
      'techreborn:sapphire_gem',
      '6x techreborn:sapphire_small_dust',
      '2x techreborn:peridot_small_dust'
    ],
    '#c:sapphire_ores'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:platinum_dust',
      'techreborn:nickel_dust',
      '2x techreborn:iridium_nugget'
    ],
    'techreborn:sheldonite_ore'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:raw_silver',
      '2x techreborn:galena_small_dust'
    ],
    '#c:silver_ores'
  );

  event.recipes.create.crushing(
    [
      '10x techreborn:sodalite_dust',
      '2x techreborn:aluminum_dust'
    ],
    'techreborn:sodalite_ore'
  );

  event.recipes.create.crushing(
    [
      '5x techreborn:sphalerite_dust',
      'create:crushed_zinc_ore',
      'techreborn:yellow_garnet_small_dust'
    ],
    '#c:sphalerite_ores'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:raw_tin',
      '3x minecraft:iron_nugget',
      '3x create:zinc_nugget'
    ],
    '#c:tin_ores'
  );

  event.recipes.create.crushing(
    [
      '2x techreborn:raw_tungsten',
      '7x minecraft:iron_nugget',
      '3x techreborn:manganese_small_dust'
    ],
    '#c:tungsten_ores'
  );
});