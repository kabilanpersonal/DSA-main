/*
We’ll maintain a window (a range of characters) that represents our current substring without duplicates.
1.Use two pointers:
start → beginning of the window
end → end of the window (as we iterate through the string)
Use a Set (or a Map) to track characters in the current window.
Keep a variable maxLen to store the maximum length found so far.

2. Slide the Window
Move end pointer one step at a time, reading each character.
If the current character (s[end]) is not in the Set, it means no repetition yet:
Add it to the Set.
Update maxLen if needed.

If the current character is already in the Set, it means repetition:
Remove characters from the start of the window (i.e., increment start) until that repeated character is removed.
Continue moving forward.

3. Continue until end reaches the end of the string.
*/

const { max } = require("lodash");

function longestSubStrings(str){
    let mySet = new Set();
    let maxLen = 0;
    let start = 0;
    let longest = '';
    for (let end = 0; end < str.length; end++){
        let char = str[end];
        while(mySet.has(char)){
            mySet.delete(str[start]);
            start++;
        }
        mySet.add(str[end]);
        
        // When we find a longer substring, record it
        if (end - start + 1 > maxLen) {
          maxLen = end - start + 1;
          longest = str.slice(start, end + 1);
        }
    }
    console.log("Longest SubSeq: ",longest)
    
    return maxLen
}
console.debug("Longest SubSeq Count: ", longestSubStrings("Abccddaab"))