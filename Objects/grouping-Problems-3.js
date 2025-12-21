const sampleData = [
  { class: "Akash", subjects: ["Math", "Eng"] },
  { class: "Anand", subjects: ["Sci"] },
  { class: "Balu",  subjects: ["Math"] }
];
//group by subjects
const result = sampleData.reduce((acc,d)=>{
for(let sub of d.subjects){
  acc[sub] = acc[sub] || [];
  acc[sub].push(d.class)
}
return acc;
},{})
console.log("Result ",result)

//convert into dictionary -> name: [sub]
let finalData = sampleData.reduce((acc,d)=>{
  acc[d.class] = d.subjects
  return acc;
},{})

// Alternate way
// const finalData = Object.fromEntries(
//   sampleData.map(s => [s.class, s.subjects])
// );

console.log("Dictionary data:",finalData)
