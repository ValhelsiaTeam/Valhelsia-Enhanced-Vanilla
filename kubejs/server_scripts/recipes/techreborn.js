// priority: 10
// Valhelsia: Enhanced Vanilla
// Tech Reborn Additions & Compatibility

onEvent('recipes', (event) => {
  
  // Grinder Recipe Template
  const grind = (output, input, power, time) => {
    event.custom({
      type: "techreborn:grinder",
      power: power,
      time: time,
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      results: [
        Item.of(output).toJson()
      ]
    })
  }

  // ----- Grinder Recipes -----
  grind('techreborn:marble_dust', 'blockus:marble', 2, 1440)
});