// priority: 10
onEvent('player.advancement', function (event) {
  
  // Note: This is an early WIP. If anybody is looking at this file before the update has released,
  // it is very subject to change (and indeed, is intended to change - there's a reason that there's
  // a new config system + advancement IDs being logged).

  if (event.advancement.hasDisplay()) {
    // Mappings used below:
    // method_686 = getDisplay()
    // method_824 = isHidden()
    // method_808 = announceToChat()
    // method_815 = getFrame()
    // method_831 = getId() or getTitle()

    // Don't award points for invisible or root tasks:
    if (!event.advancement.advancement.method_686().method_824() && event.advancement.advancement.method_686().method_808()) {

      // Debug output of advancement information to log.
      if (global.config.debug) {
	      console.info(`Advancement Obtained: ${event.advancement.getTitle()} ("${event.advancement.id()}"), type: "${event.advancement.advancement.method_686().method_815().method_831()}"`);
      }

      let advancementType = event.advancement.advancement.method_686().method_815().method_831();

      // Jangro's Suggestion - award points based on the type of advancement:
      if (global.config.simple_advancement_points) {
        switch(advancementType) {
          case 'task':
            if (global.config.task_points > 0) {
              event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.task_points}`);
              event.server.schedule(1, event.player, function (callback) {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.awarded_points', global.config.task_points))
              });
            }
            break;
          case 'goal':
            if (global.config.goal_points > 0) {
              event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.goal_points}`);
              event.server.schedule(1, event.player, function (callback) {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.awarded_points', global.config.goal_points))
              });
            }
            break;
          case 'challenge':
            if (global.config.challenge_points > 0) {
              event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.challenge_points}`);
              event.server.schedule(1, event.player, function (callback) {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.awarded_points', global.config.challenge_points))
              });
            }
            break;
          default:
            console.warn(`Unknown advancement type: ${advancementType}`);
        }
      }


    }
  }
})