// Given the array of integers nums, you will choose two different indices i and j of that array. 
// Return the maximum value of (nums[i]-1)*(nums[j]-1).



// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

var maxProduct = function(nums) {
    let x1 = 0
    let x2 = 0
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i === j){
                break;
            }
            if(x1 < (nums[i] - 1) * (nums[j] - 1)){
                x1 = (nums[i] - 1) * (nums[j] - 1)
            }            
        }
    }
    
    return x1
};
