// priority: 15
// Valhelsia: Enhanced Vanilla

/**
 * @file Server Load Script - handles everything that needs to be done when a server first starts.
 */

/**
 * Server Load Event Handler
 */
onEvent('server.load', event => {

  // Disable Terralith's Traveller's Maps (due to excessive generation lag).
  if (global.config.disable_travellers_maps) {
    if (!event.server.persistentData.disabledTravellersMaps) {
      console.log('Disabling Terralith\'s Traveller\'s Maps due to excessive lag.');
      event.server.runCommandSilent('/scoreboard objectives add tr.disable_maps dummy');
      event.server.runCommandSilent('/scoreboard players set %DISABLE_MAP tr.disable_maps 1');
      event.server.persistentData.disabledTravellersMaps = true;
    }
  }
});