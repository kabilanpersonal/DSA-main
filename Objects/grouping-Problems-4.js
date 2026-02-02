const employees = [
    { id: 1, name: "Amit", department: "IT", role: "Developer", salary: 70000, location: "Bangalore", skills: ["JS", "React"] },
    { id: 2, name: "Neha", department: "HR", role: "Recruiter", salary: 50000, location: "Delhi", skills: ["Communication"] },
    { id: 3, name: "Rahul", department: "IT", role: "Developer", salary: 75000, location: "Bangalore", skills: ["JS", "Node"] },
    { id: 4, name: "Priya", department: "IT", role: "Manager", salary: 90000, location: "Mumbai", skills: ["Leadership"] },
    { id: 5, name: "Ankit", department: "HR", role: "Manager", salary: 85000, location: "Delhi", skills: ["Management"] },
    { id: 6, name: "Sneha", department: "Finance", role: "Analyst", salary: 65000, location: "Mumbai", skills: ["Excel", "SQL"] }
  ];

  //#region Group by Department 

    /**
{
  IT: [Amit, Rahul, Priya],
  HR: [Neha, Ankit],
  Finance: [Sneha]
}
 */
    const departmentGrouped = employees.reduce((acc,cur)=>{
    acc[cur.department] = acc[cur.department] || []
    acc[cur.department].push(cur.name)
    return acc
    }, {})
    console.log("Group by Department", departmentGrouped)

  //#endregion

//#region Group employees by department and calculate total salary per department.
  
/**
Department → total salary
{
  IT: 235000,
  HR: 135000,
  Finance: 65000
}

 */
const aggregatedResult = employees.reduce((acc,cur)=>{
acc[cur.department] = (acc[cur.department] || 0) + cur.salary
return acc
}, {})
console.log("Group by Aggregated result", aggregatedResult)


  //#endregion

  //#region Role → highest paid
  /**
   * 
   {
  Developer: Rahul,
  Manager: Priya,
  Recruiter: Neha,
  Analyst: Sneha
}
   */

 const highestSalGroup = employees.reduce((acc,emp)=>{
  const role = emp.role
  if(!acc[role] || emp.salary > acc[role].salary){
    acc[role] = emp
  }
  return acc;
 },{})
 console.log("HighestSalGroup:",highestSalGroup)
 const result = Object.fromEntries(Object.entries(highestSalGroup).map(([role,emp])=> [role, emp.salary]))
 console.log("Final Result:",result)
  //#endregion

  //#region Department → min/max salary
  /**
   {
  IT: { min: 70000, max: 90000 },
  HR: { min: 50000, max: 85000 },
  Finance: { min: 65000, max: 65000 }
}
   */
  const departMinMax = employees.reduce((acc,emp)=>{
 const department = emp.department;
 if(!acc[department]){
  acc[department] = {min : emp.salary, max: emp.salary}
 }
 acc[department].min = Math.min(emp.salary,acc[department].min);
 acc[department].max = Math.max(emp.salary,acc[department].max)
 
 return acc;
  },{})
  console.log("Department Grouped", departMinMax)
  //#endregion

  //#region Group by skills
  /**
   {
  JS: [Amit, Rahul],
  React: [Amit],
  Node: [Rahul],
  Leadership: [Priya],
  Management: [Ankit],
  Communication: [Neha],
  Excel: [Sneha],
  SQL: [Sneha]
}
   */

const groupedSkills = employees.reduce((acc,emp)=>{
for(let skill of emp.skills){
  if (!acc[skill]) acc[skill] = [];
  acc[skill].push(emp.name) 
}
return acc
},{})
console.log("Skills Grouped", groupedSkills)
  //#endregion

