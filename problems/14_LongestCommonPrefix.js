/*
14. Longest Common Prefix
Solved
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(str) !== 0) {
            str = str.slice(0, -1)
            if (str === '') {
                return '';
            }
        }
    }
    return str;
};