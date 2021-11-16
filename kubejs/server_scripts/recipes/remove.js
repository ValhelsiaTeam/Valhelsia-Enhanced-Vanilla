// priority: 100

events.listen('recipes', function (event) {

  var idRemove = [

    // Oxidized
    'oxidized:copper_nugget', // Duplicate recipe.
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })

  var outputRemove = [

    // Alloy Forgery
    'alloy_forgery:deepslate_bricks_forge_controller', // Duplicate recipe.
    'alloy_forgery:polished_blackstone_forge_controller', // Duplicate recipe.
    'alloy_forgery:end_stone_bricks_forge_controller', // Duplicate recipe.
  ]

  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
