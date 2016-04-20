// Create a function that passes the kth number of the fibonacci sequnce
// Version 1
var fibonacci = function(k) {
	var fibo = [0, 1];
	if (k <= 2) { return 1 }
	for (var i = 2; i <= k; i++) {
		fibo[i] = fibo[i-1] + fibo[i-2];
	}
	return fibo[n];
}

// Version 2
var fibonacci = function(k) {
	if (k <= 1) { return k }
	else { return fibonacci(k-1) + fibonacci(k-2) }
}