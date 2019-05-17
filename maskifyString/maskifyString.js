maskifyString = str => {
  return str.length < 4 ? str : (("#".repeat(str.length-4)) + str.slice(-4)); }

module.exports = maskifyString;