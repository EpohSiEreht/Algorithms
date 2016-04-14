// Write a function that takes an array of integers and returns and array of the products.
// At each index, you will replace the current value with the product of all of the other index values.
// Do not use division in your solution.

// Version 1 - Brute Force
function getProductsOfOtherIndices(arrayList) {
	var result = [];
	for(var i = 0; i < arrayList.length; i++) {
		var current = 1;
		for(var j = 0; j <arrayList.length; j++) {
			if(i !== j) {
				current *= arrayList[j];
			}
		}
		result[i] = current;
	}
	return result;
}

// Version 2 - Optimal
function getProductsOfOtherIndices(arrayList) {
	// Declare an array that'll hold the new product values of all other indices for each index
	var productOfOtherIndices = [];
	// Initialize the productSoFar with 1 to exclude the current index from the product total
	var productSoFar = 1;
	// 
	for (var i = 0; i < arrayList.length; i++) {
		productOfOtherIndices[i] = productSoFar; 
		productSoFar *= arrayList[i]; // 
	}
	// Reset the productSoFar
	productSoFar = 1;
	for (var j = arrayList.length - 1; j >= 0; j--) {
		productOfOtherIndices[j] *= productSoFar;
		productSoFar *= arrayList[j];
	}
	return productOfOtherIndices;
}


