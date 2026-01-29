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