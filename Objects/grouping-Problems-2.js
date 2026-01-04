
const data = [
  { id: 1, type: "fruit", name: "apple",  quantity: 10, color: ['red', 'orange','green'] },
  { id: 2, type: "fruit", name: "banana", quantity: 65,color: ['red','purple','yellow']},
  { id: 3, type: "veg",   name: "carrot", quantity: 42, color: ['green', 'pink',]}
];

//Group items by a property - group by type of this array
let groupedData = data.reduce((acc, d)=>{
  acc[d.type] = acc[d.type] || [];
  const { type, ...rest } = d;
  acc[d.type].push(rest)
  return acc
},{})
console.log("groupedData: ",groupedData)

// groupedData:  {
//   fruit: [
//     { id: 1, type: 'fruit', name: 'apple', quantity: 10 },
//     { id: 2, type: 'fruit', name: 'banana', quantity: 65 }
//   ],
//   veg: [ { id: 3, type: 'veg', name: 'carrot', quantity: 42 } ]
// }


//****************************************************************************************

//Sum quantities per group
let groupedQuantity = data.reduce((acc, d)=>{
  acc[d.type] = (acc[d.type] || 0) + d.quantity;
  return acc
},{})
console.log("groupedQuantity:",groupedQuantity) //{ fruit: 75, veg: 42 }

//****************************************************************************************

//get color:[name]
let result = data.reduce((acc,datum)=>{
for(let item of datum.color){
  acc[item] = acc[item] || []
  acc[item].push(datum.name)
}
return acc;
},{})

console.log(result)//{red: [ 'apple', 'banana' ],orange: [ 'apple' ],green: [ 'apple', 'carrot' ],purple: [ 'banana' ],yellow: [ 'banana' ],pink: [ 'carrot' ]}