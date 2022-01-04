// priority: 10

onEvent('recipes', event => {

  // Minecraft
  event.shapeless('1x minecraft:string', [ 
    Item.of('harvest_scythes:wooden_machete').ignoreNBT(),
    '#minecraft:wool'
  ]).damageIngredient(0).keepIngredient('harvest_scythes:wooden_machete'),

  event.shapeless('1x minecraft:string', [ 
    Item.of('harvest_scythes:stone_machete').ignoreNBT(),
    '#minecraft:wool'
  ]).damageIngredient(0).keepIngredient('harvest_scythes:stone_machete'),

  event.shapeless('1x minecraft:string', [ 
    Item.of('harvest_scythes:iron_machete').ignoreNBT(),
    '#minecraft:wool'
  ]).damageIngredient(0).keepIngredient('harvest_scythes:iron_machete'),

  event.shapeless('1x minecraft:string', [ 
    Item.of('harvest_scythes:golden_machete').ignoreNBT(),
    '#minecraft:wool'
  ]).damageIngredient(0).keepIngredient('harvest_scythes:golden_machete'),

  event.shapeless('1x minecraft:string', [ 
    Item.of('harvest_scythes:diamond_machete').ignoreNBT(),
    '#minecraft:wool'
  ]).damageIngredient(0).keepIngredient('harvest_scythes:diamond_machete'),

  event.shapeless('1x minecraft:string', [ 
    Item.of('harvest_scythes:netherite_machete').ignoreNBT(),
    '#minecraft:wool'
  ]).damageIngredient(0).keepIngredient('harvest_scythes:netherite_machete')

  // Oxidized
  event.shapeless('oxidized:copper_button', [
    '#minecraft:planks',
    'minecraft:copper_ingot'
  ])

  // Blockus
  event.shapeless(Item.of('minecraft:ender_pearl', 4), ['architects_palette:ender_pearl_block'])
})

  // Unsupported
  //event.shapeless('1x minecraft:string', [ 
  //  Item.of('harvest_scythes:bronze_machete').ignoreNBT(),
  //  '#minecraft:wool'
  //]).damageIngredient(1).keepIngredient('harvest_scythes:bronze_machete'),

  //event.shapeless('1x minecraft:string', [ 
  //  Item.of('harvest_scythes:ruby_machete').ignoreNBT(),
  //  '#minecraft:wool'
  //]).damageIngredient(0).keepIngredient('harvest_scythes:ruby_machete'),

  //event.shapeless('1x minecraft:string', [ 
  //  Item.of('harvest_scythes:peridot_machete').ignoreNBT(),
  //  '#minecraft:wool'
  //]).damageIngredient(0).keepIngredient('harvest_scythes:peridot_machete'),

  //event.shapeless('1x minecraft:string', [ 
  //  Item.of('harvest_scythes:sapphire_machete').ignoreNBT(),
  //  '#minecraft:wool'
  //]).damageIngredient(0).keepIngredient('harvest_scythes:sapphire_machete'),

  //event.shapeless('1x minecraft:string', [ 
  //  Item.of('harvest_scythes:dragon_machete').ignoreNBT(),
  //  '#minecraft:wool'
  //]).damageIngredient(0).keepIngredient('harvest_scythes:dragon_machete')
