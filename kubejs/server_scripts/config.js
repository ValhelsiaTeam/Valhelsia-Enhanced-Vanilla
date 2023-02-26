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
 * Note: There is a single config file per instance, not per world. Changing settings
 * will impact all saves / worlds. Use NBT instead for per-world configuration.
 * 
 * It is possible to adjust the config in-game using chat 
 * (via the /vconfig command by default).
 * 
 * @example <caption>Accessing Config Entries (via script)</caption>
 * let debug = global.config.debug;
 * let debug = global.config.debug;
 * 
 * @example <caption>Setting Config Entries (via script)</caption>
 * setConfig('debug', true);
 * setConfig('starting_points', 3);
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * The filename of the config file.
 * @const {string}
 * @default  'vev2_config.json
 */
const CONFIG_FILENAME = 'vev2_config.json';

/**
 * The chat command to modify the config.
 * @const {string}
 * @default 'vconfig'
 */
const CONFIG_COMMAND = '!vconfig';

/**
 * The permission level required to use the config command.
 * @see {@link https://minecraft.fandom.com/wiki/Permission_level#Java_Edition Permission Level}
 * for information about each permission level.
 * @const {!number}
 * @default 3
 */
 const CONFIG_COMMAND_PERMISSION_LEVEL = 3;

/**
 * The default values for config options in the pack.
 * @const {Object}
 */
const DEFAULT_CONFIG = {
  debug: false,
  expert: false,
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
 * Command registry handler that adds the config command.
 * 
 * Command Syntax (assuming default command): 
 * Get Config: /vconfig [key]
 * Set Config: /vconfig [key] [value]
 */
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal(CONFIG_COMMAND)
      .requires((source) => source.hasPermission(CONFIG_COMMAND_PERMISSION_LEVEL))
      .then(Commands.argument('key', Arguments.STRING.create(event))
        .then(Commands.argument('value', Arguments.STRING.create(event))
          .executes((ctx) => {
            // Set updated config entry (key, value).
            const key = Arguments.STRING.getResult(ctx, 'key').toLowerCase();
            const value = Arguments.STRING.getResult(ctx, 'value');
            setConfig(key, value);
            ctx.source.sendSuccess(Text.translate('valhelsia.config.updated', `${key}: '${global.config[key]}'.`), true);
            return 1;
          })
        )
        .executes((ctx) => {
          // Get current config entry (key).
          const key = Arguments.STRING.getResult(ctx, 'key');
          ctx.source.sendSuccess(Text.translate('valhelsia.config.current', `${key}: '${global.config[key]}'.`), false);
          return 1;
        })
      )
  );
});

/** @type {?Object} */
let config = JsonIO.read(CONFIG_FILENAME);
/** @type {!boolean} */
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
