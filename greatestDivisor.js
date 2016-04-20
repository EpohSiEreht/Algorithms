// Create a function that returns the greatest divisor between two integers

var greatestDivisor = function(a, b) {
	if(a <= 0 || b <= 0) {
		return false;
	}
	if (a%b === 0) {
		return b;
	} else if (b%a === 0) {
		return a;
	}
	var len = a < b ? Math.floor(a/2) : Math.floor(b/2),
		div = 2,
		maxDiv = 1;
	while (div <= len) {
		if (a%div === 0 && b%div === 0) {
			maxDiv = div;
		}
		div++;
	}
	return maxDiv;

}