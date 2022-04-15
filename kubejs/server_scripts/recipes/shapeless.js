// priority: 10
// Valhelsia: Enhanced Vanilla
// Shapeless Recipe Additions

onEvent('recipes', event => {
  
  // Architect's Palette
  event.shapeless('architects_palette:heavy_mossy_stone_bricks', ['architects_palette:heavy_stone_bricks', 'immersive_weathering:moss_clump']);
  event.shapeless('architects_palette:heavy_mossy_stone_bricks', ['architects_palette:heavy_stone_bricks', 'minecraft:moss_block']);

  // Blockus
  event.shapeless('blockus:mossy_deepslate_bricks', ['minecraft:deepslate_bricks', 'immersive_weathering:moss_clump']);

  // Twigs
  event.shapeless('twigs:mossy_cobblestone_bricks', ['twigs:cobblestone_bricks', 'immersive_weathering:moss_clump']);
  event.shapeless('twigs:mossy_cobblestone_bricks', ['twigs:cobblestone_bricks', 'minecraft:vine']);

  // Ecologics
  event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block');  

  // Oxidized
  event.shapeless('oxidized:copper_button', ['#minecraft:planks', 'minecraft:copper_ingot']);
});
