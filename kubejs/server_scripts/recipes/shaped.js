// priority: 10

onEvent('recipes', function (event) {

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
  
  // Additional Enchanted Miner
  event.shaped(Item.of('quarryplus:quarry', 1), [
    'AFA',
    'BEB',
    'CDC'
  ], {
    A: 'techreborn:advanced_circuit',
    B: 'techreborn:extractor',
    C: 'techreborn:steel_plate',
    D: 'techreborn:advanced_drill',
    E: 'techreborn:iridium_ingot',
    F: 'techreborn:advanced_machine_frame',
  })
})
