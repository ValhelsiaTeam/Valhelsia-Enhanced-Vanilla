// priority: 9001
// A global config file for Valhelsia: Enhanced Vanilla.

// Accessing Config Entries in scripts:
// let debug = global.config.debug;
// let starting_points = global.config.starting_points

// Setting Config Entries in scripts:
// setConfig('debug', true)
// setConfig('starting_points', 3)

const CONFIG_FILENAME = 'vev_config.json';
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
};


function parseConfigValue(value) {
  // Quick and dirty parser - converts strings to boolean or number if needed before storing them.
  if (value == "true") return true;
  if (value == "false") return false;
  if (isNumeric(value)) return Number(value);
  return value;
}

// Entries are automatically converted into lower case but values are not.
function setConfig(entry, value) {
  global.config[entry.toLowerCase()] = parseConfigValue(value);
  JsonIO.write(CONFIG_FILENAME, global.config);
}

// Command Parser for Config Adjustment via Chat.
onEvent('player.chat', (event) => {
  
  // Command Syntax: 
  // Get Config: !config [option]
  // Set Config: !config [option] [setting]

  if (event.message.startsWith('!config')) {
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

for (const property in DEFAULT_CONFIG) {
  if (!config.hasOwnProperty(property)) {
    config[property] = DEFAULT_CONFIG[property];
    configDirty = true;
  }
}

if (configDirty) {
  JsonIO.write(CONFIG_FILENAME, config);
  configDirty = false;
}

global.config = config;

// KubeJS Settings
settings.logAddedRecipes = config.log_added_recipes;
settings.logRemovedRecipes = config.log_removed_recipes;
settings.logSkippedRecipes = config.log_skipped_recipes;
settings.logErroringRecipes = config.log_erroring_recipes;