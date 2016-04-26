// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.
// Ex. 10 = 4 + 3 + 3.  4*3*3 = 36. Return 36

function intBreak(num) {
	if (num < 4) {
		return num -1;
	}
	var maxProduct = 1,
		i,
		e,
		r;
	for (i = 2; i <= num; i++) {
		var currentProduct;
		if(num%i === 0) {
			r = 0;
			currentProduct = Math.pow(i, num/i);
		} else {
			r = num%i;
			e = Math.floor(num/i);
			currentProduct = Math.pow(i, e) * r;
			compareProduct = Math.pow(i, e-1) * (i+r);
			if (compareProduct > currentProduct) {
				currentProduct = compareProduct;
			}
		}
		if(currentProduct > maxProduct) {
			maxProduct = currentProduct;
		}
	}
	return maxProduct;
}
