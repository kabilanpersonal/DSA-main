// Feature	slice()	splice()

// Return value	New array	Removed elements (as array)
// Use for	Extracting a portion	Adding/removing/replacing values

//slice and splice

let arr1 = [1, 2, 3, 4, 5];

let res = arr1.slice(0, 2);
console.log(res);

//splice

let arr2 = [1, 2, 3, 4, 5];

let res1 = arr2.splice(1, 2, "kannan", 2);
console.log(res1);

console.log(arr2);