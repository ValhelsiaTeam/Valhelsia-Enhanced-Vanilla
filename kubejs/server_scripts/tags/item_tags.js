// priority: 80
onEvent('tags.items', event => {
  
  // TechReborn compatibility with LevelZ
  event.get('fabric:pickaxes').remove([
    'techreborn:industrial_drill',
    'techreborn:industrial_jackhammer',
    'techreborn:advanced_drill',
    'techreborn:advanced_jackhammer',
    'techreborn:basic_drill',
    'techreborn:basic_jackhammer',
    'techreborn:rock_cutter',
    'techreborn:omni_tool'
  ])

  event.get('fabric:shovels').remove([
    'techreborn:industrial_drill',
    'techreborn:advanced_drill',
    'techreborn:basic_drill',
    'techreborn:omni_tool'
  ])

  event.get('fabric:swords').remove([
    'techreborn:nanosaber',
    'techreborn:industrial_chainsaw',
    'techreborn:advanced_chainsaw',
    'techreborn:basic_chainsaw',
    'techreborn:omni_tool'
  ])

  event.get('fabric:axes').remove([
    'techreborn:industrial_chainsaw',
    'techreborn:advanced_chainsaw',
    'techreborn:basic_chainsaw',
    'techreborn:omni_tool'
  ])
})