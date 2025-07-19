//count each character
let s = "Kabilan";

//using Obj
function getFrequency(string) {
  const freq = {};
  for (const item of string) {
    freq[item] = (freq[item] || 0) + 1
  }
  console.log("Array :",Object.entries(freq));
  return freq
}

//using Map
function getFrequencyUsingMap(string) {
  const myMap = new Map();
  for (const item of string) {
    myMap.set(item, (myMap.get(item) || 0) + 1)
  }
  console.log(myMap);
  console.log(Array.from(myMap));
  console.log(Object.fromEntries(myMap))
  console.log(Object.keys(Object.fromEntries(myMap)))
  return myMap
}

console.log("Using Obj...",getFrequency(s))
console.log("Using Map...",getFrequencyUsingMap(s))

