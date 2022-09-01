/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num2Index = nums.indexOf(target - nums[i]);
        if (num2Index != -1 & num2Index != i) {
            return [i, num2Index];
        }
    }
};
// @lc code=end

