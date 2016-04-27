// Create a function that moves all of the zeroes in a given array to the end of the array while still letting the non-zero elements be in order.

// Version 1
var moveZeroes = function(nums) {
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        } 
        if(nums[i-1] === 0) {
            nums.splice(i-1, 1);
            nums.push(0);
        }
    }
};
// Version 2
var moveZeroes = function(nums) {
    var i = nums.length - 1;
    while (i--){
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};