// Given an non negative integer, add each digit until the result is a single digit number.
// Example - 34 -> 3+4=7   return 7

// Version 1 - Recursion
function single(n) {
	var result = n.toString().split(''),
		sum = 0,
		i;
	for(i = 0; i < result.length; i++) {
		var int = parseInt(result[i]);
		sum += int;
	}
	if (sum < 10) {
		return sum;
	} else {
		return single(sum);
	}
}

// Version 2
