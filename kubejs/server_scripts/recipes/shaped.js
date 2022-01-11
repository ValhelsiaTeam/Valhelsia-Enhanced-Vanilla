// priority: 10

onEvent('recipes', function (event) {

  // Minecraft
  event.shaped('minecraft:cobweb', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:string'
  })

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: 'minecraft:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  })

  event.shaped('minecraft:dispenser', [
    'RS ',
    'RDS',
    'RS '
  ], {
    R: 'minecraft:stick',
    S: 'minecraft:string',
    D: 'minecraft:dropper'
  })

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  
  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: 'minecraft:string',
    C: 'farmersdelight:canvas'
  })
  
  // Additional Enchanted Miner
  event.shaped('quarryplus:quarry', [
    'AFA',
    'BEB',
    'CDC'
  ], {
    A: 'techreborn:advanced_circuit',
    B: 'techreborn:extractor',
    C: 'techreborn:steel_plate',
    D: 'techreborn:advanced_drill',
    E: 'techreborn:iridium_ingot',
    F: 'techreborn:advanced_machine_frame'
  })

  // Quartz Elevator
  event.shaped('quartzelv:quartz_elevator', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    A: 'architects_palette:ender_pearl_block',
    B: 'minecraft:quartz'
  })

  // Blockus
  event.shaped('blockus:paper_lamp', [
    'BCB',
    'BAB',
    'BCB'
  ], {
    A: 'minecraft:torch',
    B: 'minecraft:paper',
    C: 'minecraft:jungle_slab'
  })

  event.shaped('blockus:oak_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:oak_planks',
    B: 'minecraft:oak_slab'
  })

  event.shaped('blockus:birch_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:birch_planks',
    B: 'minecraft:birch_slab'
  })

  event.shaped('blockus:jungle_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:jungle_planks',
    B: 'minecraft:jungle_slab'
  })

  event.shaped('blockus:acacia_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:acacia_planks',
    B: 'minecraft:acacia_slab'
  })

  event.shaped('blockus:dark_oak_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:dark_oak_planks',
    B: 'minecraft:dark_oak_slab'
  })

  event.shaped('blockus:warped_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:warped_planks',
    B: 'minecraft:warped_slab'
  })

  event.shaped('blockus:crimson_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'minecraft:crimson_planks',
    B: 'minecraft:crimson_slab'
  })

  event.shaped('blockus:white_oak_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'blockus:white_oak_planks',
    B: 'blockus:white_oak_slab'
  })

  event.shaped('blockus:charred_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'blockus:charred_planks',
    B: 'blockus:charred_slab'
  })

  event.shaped('blockus:bamboo_barrel', [
    'ABA',
    'A A',
    'ABA'
  ], {
    A: 'blockus:bamboo_planks',
    B: 'blockus:bamboo_slab'
  })

  // Decorative Blocks
  event.shaped('decorative_blocks:chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  })

  // Better End
  event.shaped('betterend:ender_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'betterend:ender_shard'
  })

  event.shaped('minecraft:ender_pearl', [
    'AA',
    'AA'
  ], {
    A: 'betterend:ender_shard'
  })
})
