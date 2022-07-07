// priority: 9001
// Valhelsia: Enhanced Vanilla
// Config Script

/**
 * @file A global config file for Valhelsia: Enhanced Vanilla.
 * When the pack is loaded, the config file will be automatically loaded and stored.
 * If the config file does not exist (or there are any missing entries), the file
 * will be created or updated. See the examples for how to use the config in
 * KubeJS scripts.
 * 
 * It is possible to adjust the config in-game using chat 
 * (via the !vconfig command by default).
 * 
 * @example Accessing Config Entries:
 * let debug = global.config.debug;
 * let starting_points = global.config.starting_points
 * 
 * @example Setting Config Entries:
 * setConfig('debug', true)
 * setConfig('starting_points', 3)
 * 
 */

/**
 * The filename of the config file.
 * @const {string}
 * @default 
 */
const CONFIG_FILENAME = 'vev_config.json';

/**
 * The chat command to modify the config.
 * @const {string}
 * @default
 */
const CONFIG_COMMAND = '!vconfig';

/**
 * The default values for config options in the pack.
 * @const {Object}
 */
const DEFAULT_CONFIG = {
  debug: false,
  write_default_reward_data: false,
  log_added_recipes: false,
  log_removed_recipes: false,
  log_skipped_recipes: false,
  log_erroring_recipes: true,
  simple_advancement_points: false,
  individual_advancement_points: true,
  task_points: 1,
  goal_points: 2,
  challenge_points: 3,
  starting_points: 3,
  disable_travellers_maps: true,
};

/**
 * Converts a given value into a boolean or number, if appropriate.
 * @param {*} value The input to parse. Often a string, but not required to be.
 * @returns {boolean|Number|string} The converted value.
 */
function parseConfigValue(value) {
  // Quick and dirty parser - converts strings to boolean or number if needed before storing them.
  if (value == "true") {
    return true;
  }
  if (value == "false") {
    return false;
  }
  if (isNumeric(value)) {
    return Number(value);
  }
  return value;
}

/**
 * Sets a config entry and then saves the config file.
 * @param {string} key The config key to set. Automatically converted to lower case.
 * @param {*} value The value to set. Will be automatically parsed into the appropriate type.
 */
function setConfig(key, value) {
  global.config[key.toLowerCase()] = parseConfigValue(value);
  JsonIO.write(CONFIG_FILENAME, global.config);
}

/**
 * Chat event handler that parses config commands.
 * 
 * Command Syntax (in-game chat, assuming default command): 
 * Get Config: !vconfig [option]
 * Set Config: !vconfig [option] [setting]
 * 
 * @example Using the config command:
 * Note: This example uses the default value for the command.
 * Announce the current value of the debug entry to chat: !config debug
 * Set the value of the debug entry to true: !config debug true
 */
onEvent('player.chat', (event) => {
  if (event.message.startsWith(CONFIG_COMMAND)) {
    if (event.player.isOp()) {
      const params = event.message.trim().split(' ')
      if (params.length < 2) {
        event.player.tell(Text.translate('valhelsia.config.syntax'));
      } else if (params.length == 2) {
        event.player.tell(Text.translate('valhelsia.config.current', `${params[1]}: '${global.config[params[1]]}'`));
      } else {
        setConfig(params[1], params[2])
        event.player.tell(Text.translate('valhelsia.config.updated', `${params[1]}: '${global.config[params[1]]}'`));
      }
    } else {
      event.player.tell(Text.translate('valhelsia.config.no_permission'));
    }
    event.cancel();
  }
});

// Read in current config + set any missing properties to defaults:
let config = JsonIO.read(CONFIG_FILENAME);
let configDirty = false;

if (!config) {
  configDirty = true;
  config = DEFAULT_CONFIG;
}

for (const index in DEFAULT_CONFIG) {
  if (!config.hasOwnProperty(index)) {
    config[index] = DEFAULT_CONFIG[index];
    configDirty = true;
  }
}

if (configDirty) {
  JsonIO.write(CONFIG_FILENAME, config);
  configDirty = false;
}

global.config = config;

// KubeJS Settings
settings.logAddedRecipes = config.log_added_recipes ? true : false;
settings.logRemovedRecipes = config.log_removed_recipess ? true : false;
settings.logSkippedRecipes = config.log_skipped_recipess ? true : false;
settings.logErroringRecipes = config.log_erroring_recipess ? true : false;