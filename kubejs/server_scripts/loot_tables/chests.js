// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Chest loot table injection / replacement for Valhelsia: Enhanced Vanilla.
 */

/**
 * Chest Loot Table Event Handler
 */
onEvent('chest.loot_tables', event => {

  // End City Treasure Chest Injection
  event.modify('minecraft:end_city_treasure', table => {
    // Applied Energistics Inscriber Presses, initially added
    // while meteorites weren't generating, but they remain
    // decent as chest loot for end cities.
    table.addPool(pool => {
      // One random press per end city chest, guaranteed.
      pool.rolls = 1;
      pool.addItem('ae2:calculation_processor_press');
      pool.addItem('ae2:engineering_processor_press');
      pool.addItem('ae2:logic_processor_press');
      pool.addItem('ae2:silicon_press');
    });
  });

});