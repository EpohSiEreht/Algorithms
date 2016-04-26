// You are given an array of integers and every element shows up twice except for two only shows once.
// Create a function that'll find the lonely number.

var singleNumbers = function(nums) {
    var checkHash = {};
    var result = [];
    var i;
    for (i = 0; i < nums.length; i++) {
        if(!checkHash[nums[i]]) {
            checkHash[nums[i]] = 1;
        } else if(checkHash[nums[i]] === 1) {
            delete checkHash[nums[i]];
        }
    }
    for (var k in checkHash) {
       result.push(parseInt(k, 10));
    }
    if(result[0] > result[1]) {
        var temp = result[0];
        result[0] = result[1];
        result[1] = temp;
    }
    return result;
};