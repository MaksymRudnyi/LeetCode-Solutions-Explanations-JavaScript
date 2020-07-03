### Approach 1: Brute Force
* Runtime: 116 ms, faster than 39.08% of JavaScript online submissions for Two Sum.
* Memory Usage: 36.8 MB, less than 23.52% of JavaScript online submissions for Two Sum.

#### Complexity Analysis

* Time complexity : O(n^2) For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2)
*  Space complexity : O(1).
 

### Approach 2: Two-pass Hash Table (JS object)
* Runtime: 72 ms, faster than 68.37% of JavaScript online submissions for Two Sum.
* Memory Usage: 34.9 MB, less than 61.50% of JavaScript online submissions for Two Sum.

#### Complexity Analysis
* Time complexity : O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n).
* Space complexity : O(n). The extra space required depends on the number of items stored in the object, which stores exactly n elements.

### Approach 3: One-pass Hash Table
* Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.
* Space complexity : O(n). The extra space required depends on the number of items stored in the Map object, which stores at most nn elements.