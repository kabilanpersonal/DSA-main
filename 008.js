const isAnagram = (s1, s2) =>
  s1.length === s2.length &&
  s1.split('').sort().join('') === s2.split('').sort().join('');

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false

//printing letters 
function modifyAnagram(a,b){
  let c= a.split('').sort()
  let d= b.split('').sort()
  c.forEach((char,i)=>{
    if(char !== d[i])
      console.log(`${d[i]} should be replaced with ${char}`)
  }
)

}
modifyAnagram("hello","world")

function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    // Sort the characters in the word
    const sorted = word.split('').sort().join('');
    
    // Add word to the correct group
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }
  console.log(map);

  // Convert map values to array of groups
  return Array.from(map.values());
}
const words = ["eat", "tea", "tan", "ate", "nat", "bat","tab"];
const anagramGroups = groupAnagrams(words);
console.log(anagramGroups); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat", "tab"]]