/*
605. Can Place Flowers
Solved
Easy
Topics
Companies
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let plantArea = 0;
    const bedLength = flowerbed.length;
    if(bedLength === 1 && flowerbed[0] === 0) plantArea++;
    if(flowerbed[0] + flowerbed[1] === 0) plantArea++;
    if(flowerbed[bedLength - 1] + flowerbed[bedLength - 2] === 0 && bedLength != 2) plantArea++;

    for(let i = 2; i < bedLength - 2; i++) {
        if(flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1] === 0) {
            plantArea++;
            i++
        }
    }

    return plantArea >= n
};