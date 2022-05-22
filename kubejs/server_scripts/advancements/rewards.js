// priority: 10
// Valhelsia: Enhanced Vanilla
// Advancement Rewards Script

/**
 * @file Advancement reward handling for Valhelsia: Enhanced Vanilla. Gives rewards to players for
 * obtaining advancements (typically skills or points in the LevelZ mod).
 */

/**
 * Default reward data, used when writing a new blank advancement reward to disk.
 * @const {string, number}
 * @default 
 */
const DEFAULT_REWARD_DATA = {
  skill: "points",
  points: 0
};

/**
 * Event handler for rewarding the player when gaining advancements.
 */
onEvent('player.advancement', (event) => {
  if (event.advancement.hasDisplay()) {
    let display = event.advancement.advancement.getDisplay();

    // Award points only for advancements that are announced to chat or that show a toast:
	  if (display.shouldAnnounceChat() || display.shouldShowToast()) {

	    let frameType = display.getFrame().getName();

      // Debug output of advancement information to log.
      if (global.config.debug) {
	      console.log(`Advancement Obtained: ${event.advancement.getTitle()} ("${event.advancement.id()}"), type: "${frameType}"`);
      }

      // Simple Advancement Reward System
      if (global.config.simple_advancement_points) {
        switch(frameType) {
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
            console.warn(`Unknown advancement type: ${frameType}`);
        }
      }

      // Advanced Advancement Reward System
      if (global.config.individual_advancement_points) {
        let path = `kubejs/script_data/advancement_rewards/${event.advancement.id().toString().replace(':', '-').replace('/', '-')}.json`;
        let rewardData = JsonIO.read(path);
        if (!rewardData) {
          if (global.config.write_default_reward_data) {
            JsonIO.write(path, DEFAULT_REWARD_DATA);
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