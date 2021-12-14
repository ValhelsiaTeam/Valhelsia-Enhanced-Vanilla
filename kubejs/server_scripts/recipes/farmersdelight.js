// priority: 10

onEvent('recipes', function (event) {

  // Cutting Board Axe Stripping
  const strip = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tag: "fabric:tools/axes"
      },
      result: [
        Item.of(output).toResultJson(),
        {item: "farmersdelight:tree_bark"}
      ],
      sound: "minecraft:item.axe.strip"
    })
  }

  // Cutting Board Axe Chopping
  const chop = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tag: "fabric:tools/axes"
      },
      result: [
        Item.of(output).toResultJson()
      ]
    })
  }

  // Cutting Board Knife Cutting
  // Note: When using this, ensure that output is an array.
  const cut = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        tag: "fabric:tools/knives"
      },
      result: output
    })
  }

  // Cooking Pot Recipes
  const pot = (output, input, container) => {
    event.custom({
      type: "farmersdelight:cooking",
      ingredients: input,
      result: Item.of(output).toResultJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    })
  }

  // ----- Axe Recipes -----
  strip('architects_palette:stripped_twisted_log', 'architects_palette:twisted_log')
  strip('architects_palette:stripped_twisted_wood', 'architects_palette:twisted_wood')
  strip('blockus:stripped_white_oak_log', 'blockus:white_oak_log')
  strip('blockus:stripped_white_oak_wood', 'blockus:white_oak_wood')
  strip('techreborn:stripped_rubber_log', 'techreborn:rubber_log')
  strip('techreborn:stripped_rubber_wood', 'techreborn:rubber_wood')

  // ----- Knife Recipes -----
  cut([Item.of('minecraft:string', 2)], '#minecraft:wool')

  // ----- Cooking Pot Recipes -----

})