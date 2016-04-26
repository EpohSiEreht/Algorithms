// Given an integer - return the number of 1's in the binary for each number from 0 to the given integer.

function numOfBinaryOnes(num) {
	var result = [];
	for(var i = 0; i <= num; i++) {
		var binary = parseInt(i, 10).toString(2);
		binary = binary.split('0').join('');
		result.push(binary.length);
	}
	return result;
}