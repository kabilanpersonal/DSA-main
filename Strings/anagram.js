const _ = require('lodash')
const isAnagram = (s1, s2) =>
  s1.length === s2.length &&
  s1.split('').sort().join('') === s2.split('').sort().join('');

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false

function getFrequency(string) {
  const freq = {};
  for (const item of string) {
    freq[item] = (freq[item] || 0) + 1
  }
  console.log("Array :",Object.entries(freq));
  return freq
}

function checkAnagram(a,b){
  console.log("Using Loadash : ",_.isEqual(getFrequency(a),getFrequency(b)));
  console.log("Frequency : ",getFrequency(a))
  console.log("Frequency : ",getFrequency(b))
}
checkAnagram('listen', 'silent');

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

function groupAnagramsObj(words){
  let obj={};
  for(const word of words){
    let sorted = word.split('').sort().join('')
    if(!obj[sorted]){
      obj[sorted]=[] 
    }
     obj[sorted].push(word)
  }
  console.log("Group Anagram Using Obj :",obj)
  console.log("Group Anagram Using Obj Result :",Object.values(obj))
}
const words = ["eat", "tea", "tan", "ate", "nat", "bat","tab"];
const anagramGroups = groupAnagrams(words);
groupAnagramsObj(words);
console.log(anagramGroups); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat", "tab"]]