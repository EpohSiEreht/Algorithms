// Selection sort algorithm

var swap = function(array, a, b) {
	var temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

var indexOfMin = function(array, startIndex) {
	var minValue = array[startIndex],
		minIndex = startIndex;
	for (var i = minIndex + 1; i < array.length; i++) {
		if (array[i] < minValue) {
			minIndex = i;
			minValue = array[i];
		}
	}
	return minIndex;
}

var selectionSort = function(array) {
	var min;
	for (var j = 0; j < array.length; j++) {
		min = indexOfMin(array, j);
		swap(array, j, min);
	}
	return array;
}