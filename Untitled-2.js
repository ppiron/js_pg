/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k;
    for (k = nums.length - 2; k >= 0; k--) {
        //console.log(k);
        if (nums[k] == nums[k + 1]) {
            //console.log(nums.slice(0,k + 1))
            nums = (nums.slice(0, k + 1)).concat(nums.slice(k + 2, nums.length));
        }
    }
    return nums;
};

console.log(removeDuplicates([1,1,2]));