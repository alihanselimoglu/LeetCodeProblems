/*
345. Reverse Vowels of a String
Solved
Easy
Topics
Companies
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(!(/[AEIOUaeiou]/.test(s[left]))) {
            left++;
        } 
        else if(!(/[AEIOUaeiou]/.test(s[right]))) {
            right--;
        }
        else {
            [s[left],s[right]]=[s[right],s[left]];
            left++;
            right--;
        }
    }
    return s.join('');
};