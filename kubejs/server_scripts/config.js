// priority: 9001
// A global config file for Valhelsia: Enhanced Vanilla.

// Accessing Config Entries in scripts:
// let debug = global.config.debug;
// let starting_points = global.config.starting_points

// Setting Config Entries in scripts:
// setConfig('debug', true)
// setConfig('starting_points', 3)

const configFileName = 'vev_config.json';
const defaultConfig = {
  debug: false,
  simple_advancement_points: true,
  individual_advancement_points: true,
  task_points: 1,
  goal_points: 2,
  challenge_points: 3,
  starting_points: 3
};

// Entries are automatically converted into lower case but values are not.
function setConfig(entry, value) {
  // Quick and dirty parser - converts strings to boolean or number if needed before storing them.
  if (typeof value == 'string') {
    if (value.equalsIgnoreCase('true')) {
      value = true;
    } else if (value.equalsIgnoreCase('false')) {
      value = false;
    }

    if (isNumeric(value)) {
      value = Number(value);
    }
  }

  global.config[entry.toLowerCase()] = value;
  JsonIO.write(configFileName, global.config);
}

// Command Parser for Config Adjustment via Chat.
onEvent('player.chat', function (event) {
  
  // Command Syntax: 
  // Get Config: !config [option]
  // Set Config: !config [option] [setting]

  if (event.message.startsWith('!config')) {
    if (event.player.isOp()) {
      const params = event.message.split(' ')
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
let config = JsonIO.read(configFileName);
let configDirty = false;

if (!config) {
  configDirty = true;
  config = defaultConfig;
}

for (const property in defaultConfig) {
  if (!config.hasOwnProperty(property)) {
    config[property] = defaultConfig[property];
    configDirty = true;
  }
}

if (configDirty) {
  JsonIO.write(configFileName, defaultConfig);
  configDirty = false;
}

global.config = config;