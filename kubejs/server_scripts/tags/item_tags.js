// priority: 80
onEvent('tags.items', event => {
  
  // TechReborn compatibility with LevelZ
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