sockMerchant = (n, ar) => {
  matches = 0;
	sortedAr = ar.sort((a, b) => a-b);

  for (i = 0; i < sortedAr.length; i++) {
    if (sortedAr[i] == sortedAr[i+1]) {
			sortedAr.splice(i, 2);
			matches++;
			i--;
    }
	}
	return matches;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))