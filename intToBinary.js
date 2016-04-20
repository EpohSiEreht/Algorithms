// Conver an integer into a binary representation
function numOfBinaryOnes(num) {
	var result = [];
	for(var i = 0; i <= num; i++) {
		var binary = parseInt(i, 10).toString(2);
		binary = binary.split('0').join('');
		result.push(binary.length);
	}
	return result;
}