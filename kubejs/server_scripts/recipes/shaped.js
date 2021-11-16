// priority: 10

events.listen('recipes', function (event) {

  // Minecraft
  event.shaped(Item.of('minecraft:cobweb', 1), [
    'AA',
    'AA'
  ], {
    A: 'minecraft:string'
  })
  event.shaped(Item.of('minecraft:dispenser', 1), [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: 'minecraft:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  })
  event.shaped(Item.of('minecraft:chainmail_helmet', 1), [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(Item.of('minecraft:chainmail_chestplate', 1), [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(Item.of('minecraft:chainmail_leggings', 1), [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(Item.of('minecraft:chainmail_boots', 1), [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  
  // Alloy Forgery
  event.shaped(Item.of('alloy_forgery:deepslate_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:deepslate_bricks',
    B: 'alloy_forgery:bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:deepslate_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:deepslate_bricks',
    B: 'alloy_forgery:stone_bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:polished_blackstone_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:polished_blackstone',
    B: 'alloy_forgery:bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:polished_blackstone_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:polished_blackstone',
    B: 'alloy_forgery:stone_bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:end_stone_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:end_stone_bricks',
    B: 'alloy_forgery:polished_blackstone_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:end_stone_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:end_stone_bricks',
    B: 'alloy_forgery:deepslate_bricks_forge_controller'
  })
})
