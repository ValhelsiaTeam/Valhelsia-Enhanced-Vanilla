// priority: 5
// Valhelsia: Enhanced Vanilla

/**
 * @file First Start Script - Handles the first time a player joins a world (whether single- or multiplayer).
 * 
 * This includes things like introductory chat messages + links, starting items, and anything else that needs 
 * to be set just once the first time a player connects.
 * 
 */

/**
 * Player Login Event Handler
 */
onEvent('player.logged_in', function (event) {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start');
    
    event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.starting_points}`);

    event.player.tell(Text.translate('valhelsia.first_start_message'));
    event.player.tell(Text.translate('valhelsia.getting_started_guide').blue().underlined().click('https://wiki.valhelsia.net/modpacks/valhelsia-enhanced-vanilla/getting-started-guide'));
  }
})