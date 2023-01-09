// priority: 15
// Valhelsia: Enhanced Vanilla

/**
 * @file Removes unused / undesired advancements from the pack.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Which advancements to remove from the pack.
 * These should be the resource location of the advancement, including the .json file extension.
 * @example Example entry: 'outvoted:advancements/obtain_wildfire_helmet.json'
 * @const {string[]}
 */
 const ADVANCEMENTS_TO_REMOVE = [
];

/**
 * Empty advancement JSON, for the purposes of effectively deleting an advancement (but without triggering errors).
 * @const {Object}
 * @default 
 */
const EMPTY_ADVANCEMENT = {criteria:{impossible:{trigger:"minecraft:impossible"}}};

/**
 * Event handler for KubeJS's virtual datapack. Removes unused / undesired advancements
 * from the pack.
 */
ServerEvents.highPriorityData(event => {
  // Remove specified advancements.
  ADVANCEMENTS_TO_REMOVE.forEach(file => {
    event.addJson(file, EMPTY_ADVANCEMENT);
  });
});