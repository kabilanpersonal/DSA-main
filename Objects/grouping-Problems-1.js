
const a= [
  {
  name: "kabilan",
  score: [10,40,30],
  status: "active"
},
{
  name: "kabilan1",
  score: [50,60,90],
  status: "Inactive"
},
{
 
  name: "kabilan2",
  score: [40,20,30],
  status: "Inactive"
},
{
 
  name: "kabilan3",
  score: [10,40,80],
  status: "active"
}
 
]

//get the averaged  score of active user
let result = a
            .filter((item)=> item.status === "active")
            .map((item)=>{
                let total = item.score.reduce((sum,curr)=> sum+ curr,0);
                let avg = (total / (item.score.length))?.toFixed(2)
                return {...item,avg}
            })
console.log(result)

//User with highest total score
let TopUser = a.map((user)=>{
                let total= user.score.reduce((sum,curr)=> sum+ curr,0);
                return{...user,total}
                })
                .reduce((a,b) => a.total > b.total ? a : b)
                
console.log("TopUser :",TopUser)

//Count user by status
let userCount = a.reduce((acc,user)=>{
    let status = user.status.toLowerCase()
    acc[status] = (acc[status] || 0) + 1;
    return acc;
},{})
console.log("User Count : ",userCount) //{ active: 2, inactive: 2 }

//total score of active users
let activeUserTotal = a.filter(u=>u.status === "active")
                        .flatMap(u=> u.score)
                        .reduce((sum,acc)=> sum + acc, 0)

console.log("Active User Sum - total : ", activeUserTotal)

// group user by status
let groupedUser = a.reduce((acc,u)=> {
    acc[u.status] = acc[u.status] || [];
    acc[u.status].push(u); //(acc[u.status] ||= []).push(u);
    return acc;
}, {})
console.log("Grouped User :",groupedUser)

let groupedUser2 = a.reduce((acc,u)=> {
  if(!acc[u.status]) acc[u.status]= {status: u.status, userDetails:[]}
  acc[u.status].userDetails.push(u); //(acc[u.status] ||= []).push(u);
  return acc;
}, {})
console.log("Grouped User 2:",Object.values(groupedUser2))