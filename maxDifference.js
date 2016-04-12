// Create a function that passes an array of numbers and returns the largest difference between 2 values from the array.
// You cannot use a lower index value to subtract from a higher index value.
// You cannot subtract two values with the same index.

function getMaxDifference(arrayList) {
	if (arrayList.length < 2) {
		throw new Error('Requires at least 2 values to find largest difference');
	}
	// Initalize minValue & maxDifference so that they can be updated outside of the for loop.
	var minValue = arrayList[0],
		maxDifference = arrayList[1] - arrayList[0],
		i;
	// Create a for loop to compare and update values.
	for (i = 1; i < arrayList.length; i++) {
		// As you iterate through the loop, declare the current value and differences.
		var currentValue = arrayList[i], 
			potentialDifference = currentValue - minValue;
		// Update the lowest value.
		minValue = Math.min(minValue, currentValue);
		// Update the largest difference.
		maxDifference = Math.max(currentValue, potentialDifference);
	}
	// Return the max difference between two values.
	return maxDifference;
}