// Create a function that returns the highest product from 3 numbers in an array.

// Version 1 - Realized this only works for positive numbers
function highestProductOf3(arrayList) {
	// Declare the 3 highest values and initialize them
	var firstValue = 0,
		secondValue = 0,
		thirdValue = 0;
	for (var i = 0; i < arrayList.length; i++) {
		var currentValue = arrayList[i];
		// Conditions that assign the 3 highest integers into variables.
		if(currentValue >= firstValue) {
			thirdValue = secondValue;
			secondValue = firstValue;
			firstValue = currentValue;
		} 
		else if (currentValue < firstValue && currentValue >= secondValue) {
			thirdValue = secondValue;
			secondValue = currentValue;
		} 
		else if (currentValue < secondValue && currentValue >= thirdValue) {
			thirdValue = currentValue;
		}
	}
	return thirdValue * secondValue * firstValue;
}

// Version 2 - This one only works when there's an even number of negative integers
function highestProductOf3(arrayList) {
	// Declare the 3 highest values and initialize them
	var firstValue = 0,
		secondValue = 0,
		thirdValue = 0;
	for (var i = 0; i < arrayList.length; i++) {
		if (arrayList[i] < 0) {
			var currentValue = arrayList[i] * -1;
		} else if (arrayList[i] >= 0) {
			var currentValue = arrayList[i];
		}
		// Conditions that assign the 3 highest integers into variables.
		if(currentValue >= firstValue) {
			thirdValue = secondValue;
			secondValue = firstValue;
			firstValue = currentValue;
		} 
		else if (currentValue < firstValue && currentValue >= secondValue) {
			thirdValue = secondValue;
			secondValue = currentValue;
		} 
		else if (currentValue < secondValue && currentValue >= thirdValue) {
			thirdValue = currentValue;
		}
	}
	return thirdValue * secondValue * firstValue;
}

// Version 3 - Only works in some cases. INCORRECT!
function highestProductOf3(array) {
	// Declare highestValue, lowestValue
	var highestValue = Math.max(array[0], array[1]),
		highestProductOf2 = array[0] * array[1],
		highestProductOf3 = array[0] * array[1] * array[2];
	// Start loop at i = 2 because declared variables already include index 0 and 1.
	for (var i = 2; i < array.length; i++) {
		var currentValue = array[i];
		highestProductOf2 = highestValue * currentValue;
		var currentHighestProductOf3 = highestProductOf2 * highestValue;
		highestProductOf3 = Math.max(currentHighestProductOf3, highestProductOf3);
	}
	return highestProductOf3;
}

// Version 4 - Final
function highestProductOf3(array) {
	// Declare highestValue, lowestValue, highestProductOf2, highestProductOf3 and initialize them.
	var highestValue = Math.max(array[0], array[1]),
		lowestValue = Math.min(array[0], array[1]),
		highestProductOf2 = array[0] * array[1],
		lowestProductOf2 = array[0] * array[1],
		highestProductOf3 = array[0] * array[1] * array[2];
	// Start loop at i = 2 because declared variables already include index 0 and 1.
	for (var i = 2; i < array.length; i++) {
		var currentValue = array[i];
		highestProductOf3 = Math.max(highestProductOf3, currentValue * highestProductOf2, currentValue * lowestProductOf2);
		highestProductOf2 = Math.max(highestProductOf2, currentValue * highestValue);
		lowestProductOf2 = Math.min(lowestProductOf2, currentValue * lowestValue);
		highestValue = Math.max(highestValue, currentValue);
		lowestValue = Math.min(lowestValue, currentValue);
	}
	return highestProductOf3;
}




