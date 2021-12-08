// priority: 80
onEvent('tags.items', event => {
  
  //
  event.get('fabric:swords').add([
    'ae2:certus_quartz_sword',
    'ae2:nether_quartz_sword',
  ])

  event.get('fabric:pickaxes').add([
    'ae2:certus_quartz_pickaxe',
    'ae2:nether_quartz_pickaxe',
  ])

  event.get('fabric:axes').add([
    'ae2:certus_quartz_axe',
    'ae2:nether_quartz_axe',
  ])

  event.get('fabric:shovels').add([
    'ae2:certus_quartz_shovel',
    'ae2:nether_quartz_shovel',
  ])

  event.get('fabric:hoes').add([
    'ae2:certus_quartz_hoe',
    'ae2:nether_quartz_hoe',
  ])

  //
  event.get('harvest_scythes:machetes').add([
    'harvest_scythes:wooden_machete',
    'harvest_scythes:stone_machete',
    'harvest_scythes:iron_machete',
    'harvest_scythes:golden_machete', 
    'harvest_scythes:diamond_machete',
    'harvest_scythes:netherite_machete',
    'harvest_scythes:creative_machete',
    'harvest_scythes:peridot_machete',
    'harvest_scythes:sapphire_machete',
    'harvest_scythes:ruby_machete',
    'harvest_scythes:bronze_machete',
    'harvest_scythes:dragon_machete'
  ])
})