// priority: 9002
// Generally useful functions.

function isNumeric(str) {
  if (typeof str != "string") {
    return false;
  }

  return !isNaN(str) && !isNaN(parseFloat(str))
}