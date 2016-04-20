// You are given an array of integers and every element shows up twice except for one.
// Create a function that'll find the lonely number.

// Version 1 - Hash Table
var singleNumber = function(nums) {
    var hashy = {};
    var i;
    for (i = 0; i < nums.length; i++) {
        if (!hashy[nums[i]]) {
            hashy[nums[i]] = 1;
        } else if (hashy[nums[i]] === 1) {
            delete hashy[nums[i]];
        } 
    }
    for (var k in hashy) {
    	return parseInt(k);
    }
};

// Version 2 - Bitwise operator
var singleNumber = function(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};