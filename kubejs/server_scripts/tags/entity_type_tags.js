// priority: 80
// Valhelsia: Enhanced Vanilla

/**
 * @file Entity Type Tag Additions for Valhelsia: Enhanced Vanilla.
 */

/**
 * Entity Type Tag Event Handler (to be used for tag addition only).
 */
onEvent('entity_type.tags', event => {

  // Halloween Event Candy
  event.add('valhelsia_tweaks:drops_candy', [
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    // TODO: Add spooky mobs from V:EV here.
  ]);

  // Missing Entity Type tag from Ecologics.
  event.add('minecraft:freeze_immune_entity_types', [
    'ecologics:penguin',
  ]);

});