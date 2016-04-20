// Merge sort algorithm

var merge = function(array, p, q, r) {
	var left = [],
		right = [],
		k = p,
		i,  // cache i for faster loop
		j;  // cache j for faster loop
	for (i = 0; k <= q; i++, k++) {
		left[i] = array[k];
	}
	for (j = 0; k <= r; j++, k++) {
		right[j] = array[k];
	}
	k = p;
	i = 0;
	j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			array[k] = left[i];
			i++;
		} else {
			array[k] = right[j];
			j++;
		}
		k++;
	}
	while (j < right.length) {
		array[k] = right[j];
		j++;
		k++;
	}
	while (i < left.length) {
		array[k] = left[i];
		i++;
		k++;
	}
}

var mergeSort = function(array, p, r) {
	if (p < r) {
		var q = Math.floor((p+r)/2);
		mergeSort(array, p, q);
		mergeSort(array, q+1, r);
		merge(array, p, q, r);
	}
	return array;
}