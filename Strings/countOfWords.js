let a = "Make hay while sunshine"

// sol-1
let countObj = {};
a.split(" ").forEach((item) => {
    countObj[item] = item.length
})
let max = 0;
let result = ''
for (item in countObj) {
    if (countObj[item] > max) {
        max = countObj[item];
        result = item;
    }
}
console.log(countObj) //{ Make: 4, hay: 3, while: 5, sunshine: 8 }
console.log("Solution 1: ",result)

//Sol -2
console.log("Solution 2: ",a.split(" ").sort((a,b)=>b.length-a.length)[0])

//Sol-3
console.log("Solution 3: ",a.split(" ").reduce((longest,word)=>word.length> longest.length ? word : longest))
