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