// priority: 10
// Valhelsia: Enhanced Vanilla
// Shapeless Recipe Additions

onEvent('recipes', event => {
  // Architect's Palette
  event.shapeless(Item.of('minecraft:ender_pearl', 4), ['architects_palette:ender_pearl_block'])

  // Oxidized
  event.shapeless('oxidized:copper_button', [
    '#minecraft:planks',
    'minecraft:copper_ingot'
  ]) 
});
