function capitalizeFirst(arr) {
  return arr.map(f => f.charAt(0).toUpperCase() + f.substring(1).toLowerCase());
}

module.exports = capitalizeFirst;