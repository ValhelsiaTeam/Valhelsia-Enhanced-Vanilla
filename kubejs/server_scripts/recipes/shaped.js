// priority: 10
// Valhelsia: Enhanced Vanilla
// Shaped Recipe Additions

onEvent('recipes', (event) => {

  // Convenience Functions:
  let shaped2x2 = (output, input) => {event.shaped(output, ['AA', 'AA'], {A: input})}
  let shaped3x3 = (output, input) => {event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input})}
  let donut = (output, input) => {event.shaped(output, ['AAA', 'A A', 'AAA'], {A: input})}
  let wrapped = (output, core, wrap) => {event.shaped(output, ['AAA', 'ABA', 'AAA'], {A: wrap, B: core})}
  let barrel = (output, plank, slab) => {event.shaped(output, ['ABA', 'A A', 'ABA'], {A: plank, B: slab})}

  // Minecraft
  shaped3x3('minecraft:cobweb', 'minecraft:string')

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
  
  // Better End
  shaped3x3('betterend:ender_block', 'betterend:ender_shard')
  shaped2x2('minecraft:ender_pearl', 'betterend:ender_shard')

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

  barrel('blockus:oak_barrel', 'minecraft:oak_planks', 'minecraft:oak_slab')
  barrel('blockus:birch_barrel', 'minecraft:birch_planks', 'minecraft:birch_slab')
  barrel('blockus:jungle_barrel', 'minecraft:jungle_planks', 'minecraft:jungle_slab')
  barrel('blockus:acacia_barrel', 'minecraft:acacia_planks', 'minecraft:acacia_slab')
  barrel('blockus:dark_oak_barrel', 'minecraft:dark_oak_planks', 'minecraft:dark_oak_slab')
  barrel('blockus:warped_barrel', 'minecraft:warped_planks', 'minecraft:warped_slab')
  barrel('blockus:crimson_barrel', 'minecraft:crimson_planks', 'minecraft:crimson_slab')
  barrel('blockus:white_oak_barrel', 'blockus:white_oak_planks', 'blockus:white_oak_slab')
  barrel('blockus:charred_barrel', 'blockus:charred_planks', 'blockus:charred_slab')
  barrel('blockus:bamboo_barrel', 'blockus:bamboo_planks', 'blockus:bamboo_slab')

  // Decorative Blocks
  event.shaped('decorative_blocks:chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  })
  
  // Quartz Elevator
  wrapped('quartzelv:quartz_elevator', '#valhelsia:storage_blocks/ender', 'minecraft:quartz')

});
