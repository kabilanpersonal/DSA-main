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

const anagramGroups = groupAnagrams(words);
console.log(anagramGroups); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat", "tab"]]