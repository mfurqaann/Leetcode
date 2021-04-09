// A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single file line in non-decreasing order by height. 
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. 
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

 

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    copy = [...heights];
    count = 0;
    
    for (let i=0; i < heights.length; i++) {
        for (j=0; j < heights.length; j++) {
            if (heights[i] < heights[j]) {
                temp = heights[i];
                heights[i] = heights[j]
                heights[j] = temp
            }
        }
    }
    // console.log(heights);
    for (let j = 0; j< heights.length; j++) {
        if (copy[j] != heights[j]) {
            count +=1;
        }
    }
    return count;
};
