/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices[complement] !== undefined && indices[complement] !== index) {
            return [index, indices[complement]]
        }
    }
};