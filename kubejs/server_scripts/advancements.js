// priority: 10

// Used when the option to create an empty reward file is enabled.
const defaultRewardData = {
  skill: "points",
  points: 0
}

// Server Datapack Load
onEvent('server.datapack.high_priority', (event) => {
  // TODO: Append additional information to advancement descriptions. Presumably this is the correct event to do it in?
});

// Advancement Gain
onEvent('player.advancement', (event) => {
  if (event.advancement.hasDisplay()) {
    // Mappings used below:
    // method_686 = getDisplay()
    // method_824 = isHidden()
    // method_808 = announceToChat()
    // method_815 = getFrame()
    // method_831 = getId() or getTitle()

    // Disabled isHidden check - we want to give rewards for hidden advancements now as long as they're announced:
    // !event.advancement.advancement.method_686().method_824() && 

    // Award points only for advancements that are announced to chat:
    if (event.advancement.advancement.method_686().method_808()) {

      let advancementType = event.advancement.advancement.method_686().method_815().method_831();

      // Debug output of advancement information to log.
      if (global.config.debug) {
	      console.info(`Advancement Obtained: ${event.advancement.getTitle()} ("${event.advancement.id()}"), type: "${advancementType}"`);
      }

      // Jangro's Suggestion - award points based on the type of advancement:
      if (global.config.simple_advancement_points) {
        switch(advancementType) {
          case 'task':
            if (global.config.task_points > 0) {
              event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.task_points}`);
              event.server.schedule(1, event.player, function (callback) {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.points.awarded', global.config.task_points));
              });
            }
            break;
          case 'goal':
            if (global.config.goal_points > 0) {
              event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.goal_points}`);
              event.server.schedule(1, event.player, function (callback) {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.points.awarded', global.config.goal_points));
              });
            }
            break;
          case 'challenge':
            if (global.config.challenge_points > 0) {
              event.server.runCommandSilent(`/playerstats ${event.player.name} add points ${global.config.challenge_points}`);
              event.server.schedule(1, event.player, function (callback) {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.points.awarded', global.config.challenge_points));
              });
            }
            break;
          default:
            console.warn(`Unknown advancement type: ${advancementType}`);
        }
      }

      // Reward points based on the specific advancement data:
      if (global.config.individual_advancement_points) {
        let path = `kubejs/script_data/advancement_rewards/${event.advancement.id().toString().replace(/:|\//g, '-')}.json`;
        let rewardData = JsonIO.read(path);
        if (!rewardData) {
          if (global.config.write_default_reward_data) {
            rewardData = defaultRewardData;
            JsonIO.write(path, defaultRewardData);
          }
        } else {
          if (rewardData.points > 0) {
            event.server.runCommandSilent(`/playerstats ${event.player.name} add ${rewardData.skill} ${rewardData.points}`);
            event.server.schedule(1, event.player, function (callback) {
              // Of these reward types, progress and levels probably shouldn't be used, but are there for completeness.
              if (rewardData.skill == 'points') {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.points.awarded', rewardData.points));
              } else if (rewardData.skill == 'progress') {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.progress.awarded', rewardData.points));
              } else if (rewardData.skill == 'level') {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.levels.awarded', rewardData.points));
              } else {
                callback.data.tell(Text.translate('valhelsia.advancement_levels.skills.awarded', rewardData.points, Text.translate(`spritetip.levelz.${rewardData.skill}_skill`)));
              }
            });
          }
        }
      }
    }
  }
});