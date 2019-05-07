function spelling (str) {
  let arr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str.slice(0,i+1));
  }
  return arr;
}
module.exports = spelling;