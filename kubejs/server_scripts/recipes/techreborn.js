// priority: 10
// Valhelsia: Enhanced Vanilla
// Tech Reborn Additions & Compatibility

onEvent('recipes', (event) => {
  
  // Grinder Recipe Template
  const grind = (output, input, power, time) => {
    event.custom({
      type: "techreborn:grinder",
      power: power,
      time: time,
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      results: [
        Item.of(output).toJson()
      ]
    });
  }

  // Implosion Compressor Recipe Template
  const implosion = (outputs, inputs, power, time) => {
    event.custom({
      type: "techreborn:implosion_compressor",
      power: power,
      time: time,
      ingredients: inputs,
      results: outputs
    });
  }

  // ----- Grinder Recipes -----
  grind('techreborn:marble_dust', 'blockus:marble', 2, 1440);

  // ----- Implosion Compressor Recipes -----
  implosion(['8x ae2:sky_stone_block', '16x techreborn:dark_ashes_dust'], ['8x minecraft:crying_obsidian', '16x minecraft:tnt'], 30, 2000);
  implosion(['8x ae2:sky_stone_block', '4x techreborn:ender_eye_small_dust'], ['8x minecraft:crying_obsidian', '4x minecraft:end_crystal'], 30, 2000);
});