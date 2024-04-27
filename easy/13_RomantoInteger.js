/*
13. Roman to Integer
Solved
Easy
Topics
Companies
Hint
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'I'){
            if(s[i + 1] === 'V' || s[i + 1] === 'X'){
                num--
            } else num++
        }
        else if(s[i] === 'X'){
            if(s[i + 1] === 'L' || s[i + 1] === 'C'){
                num -= 10
            } else num += 10
        }
        else if(s[i] === 'C'){
            if(s[i + 1] === 'D' || s[i + 1] === 'M'){
                num -= 100
            } else num += 100
        }
        else {
            switch (s[i]) {
            case 'V':
                num += 5
                break
            case 'L':
                num += 50
                break
            case 'D':
                num += 500
                break
            case 'M':
                num += 1000
                break
        } 
        }
    }
    return num;
};


/*
var romanToInt = function(s) {
      const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
};
*/