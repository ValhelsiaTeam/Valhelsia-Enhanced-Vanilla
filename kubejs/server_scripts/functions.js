// priority: 9002
// Valhelsia: Enhanced Vanilla

/**
 * @file Functions that have general purpose use throughout other server scripts.
 */

/**
 * Checks if a string can be parsed as a number.
 * @param {string} str The input string to check.
 * @returns True for strings that can be parsed as floats (except NaN), false otherwise.
 */
function isNumeric(str) {
  // Although we expect a string here, it's robust enough to return false for non-strings rather than break.
  if (typeof str != 'string') {
    return false;
  }

  return !isNaN(str) && !isNaN(parseFloat(str));
}