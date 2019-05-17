capitalizeFirst = arr => arr.map(f => f.charAt(0).toUpperCase() + f.substring(1).toLowerCase());

module.exports = capitalizeFirst;