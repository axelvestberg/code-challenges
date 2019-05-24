missingNumberTwo = arr => {
	
}

//[...Array(10).keys()].map(x => x++);
let arr = Array.from({length: 100}, (v, k) => k+1);

console.log( arr.splice(Math.floor(Math.random() * 101), Math.floor(Math.random() * 100)) );

module.exports = missingNumberTwo;