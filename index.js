/*

input: nums = [-1,0,3,5,9,12], 
target = 9
              mid
              /\     
nums = [-1, 0, 3, 5, 9, 12]

mid = nums[2] = 3
target = 9 > nums[2] = 3

nums = [5, 9, 12]
mid = nums [4]
nums[4] = 9 = 9
return 4 

algorithm:

1. find the middle value in the array
2. check if the middle value is equal to target, if it is
   then return the target
3. if the middle value is not equal to the target, then check if it's
   greater than or less than the target, if mid < target, start searching the right side of the array, if the mid > target, then start at step 1 using the left half of the list
4. return the index where target is found in the array, else return -1

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, left, right) {
    while(left < right) {
    let mid = (right + left) / 2;
    if(target === mid){
      return target; 
    }
    if(target < nums[mid]){
      right = mid;
    }
    else if(target > array[mid]){
      left = mid;
    }
    else {
      return mid;
    }
}
return -1;
}

console.log(search([-1,0,3,5,9,12], 9, -1, 0))

/* python: class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            pivot = left + (right - left) // 2
            if nums[pivot] == target:
                return pivot
            if target < nums[pivot]:
                right = pivot - 1
            else:
                left = pivot + 1
        return -1

Complexity Analysis

    Time complexity : O(log⁡N)

    Let's compute time complexity with the help of master theorem: (https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms). Here there is only one subproblem a = 1, its size is a half of the initial problem b = 2, and all this happens in a constant time d = 0. That means that log⁡ba=d\log_b{a} = dlogb​a=d and hence we're dealing with case 2 that results in 
    O(logN) time complexity.

    Space complexity : O(1) since it's a constant space solution.

*/