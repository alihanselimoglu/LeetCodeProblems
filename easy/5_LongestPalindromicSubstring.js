/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let palindrome = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let l = i;
      let r = i + j;
      while (l >= 0 && r < s.length && s[l] == s[r]) {
        const str = s.slice(l, r + 1);
        palindrome = str.length > palindrome.length ? str : palindrome;
        l--;
        r++;
      }
    }
  }
  return palindrome;
};
