/*      You must find the length of the longest sequence of consecutive numbers.
        Consecutive means numbers differ by 1
        The numbers do NOT need to be adjacent in the array
        The array can be unsorted
        Duplicate numbers may exist

Algorithm:
 * Convert array to a Set
 * Initialize longest = 0
 * Loop through each number in the set
 * If num - 1 exists → skip
 * Else:
 * Start counting consecutive numbers
 * Update longest 
 * Return longest
 */

let input =  [100, 4, 200, 1, 3, 2]; 
// possible consecutives : [[100],[200],[1,2,3,4]]

function longestConsecutive(input){
    let mySet = new Set(input);
    let longest = 0;
    for(let n of mySet){
        if(!mySet.has(n-1)){
            let currentNum = n;
            let length = 1;

            while(mySet.has(currentNum + 1)){
                currentNum ++;
                length++
            }
            longest = Math.max(longest, length)
        }
    }
    return longest
}
console.log(longestConsecutive(input))