// Binary search algorithm

var binarySearch = function(array, target) {
	var left = 0;
	var right = array.length;
	var guess;
	while (left < right) {
		mid = Math.floor((left+right)/2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}