// You are given an array of integers and every element shows up twice except for one.
// Create a function that'll find the lonely number.

var singleNumber = function(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};