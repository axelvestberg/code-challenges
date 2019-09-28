findClosestSum = (a, b, t) => {
  //  a and b is 2 arrays of equal length
  console.log("a: " + a);
  console.log("b: " + b);
  results = [];
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
			sum = a[i] + b[j];
			diff = difference(t, sum);
			console.log(diff);
			results.push(diff);

    }
  }
};

difference = (x, y) => {
  return Math.abs(x - y);
};

fakesum = -18;


const a = [-25, 4, 9, 2, 20];
const b = [7, 3, 6, 8, 50];
let t = 24;

console.log("sum " + (-25 + 7));
console.log("diff " + difference(t, fakesum));

findClosestSum(a, b, t);

module.exports = findClosestSum;
