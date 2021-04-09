# Write a function that reverses a string. The input string is given as an array of characters s.

 

# Example 1:

# Input: s = ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        i = 0
        j = -1
        
        while i < len(s)/2:
            s[i], s[j] = s[j], s[i]
            i = i + 1
            j = j - 1
