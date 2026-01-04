const data = [
    { name: 'Alice', subjects: ['Math', 'Physics'] },
    { name: 'Bob', subjects: ['Math', 'Chemistry'] },
    { name: 'Charlie', subjects: ['Physics'] }
  ];
   
/*  Expected
  let output=[
    { subject: 'Math', students: ['Alice', 'Bob'] },
    { subject: 'Physics', students: ['Alice', 'Charlie'] },
    { subject: 'Chemistry', students: ['Bob'] }
  ]
  */

  let subjects = [...new Set (data.flatMap(item=>item.subjects))]; //[Math,Physics,Chem]
  let finalResult=[];
  subjects.forEach((item)=>{
    let studentArray =  data
                    .filter(data=>data.subjects.includes(item))
                    .map(data=>data.name);
    finalResult.push({
        subject: item,
        students: studentArray
    })
  })
  console.log(finalResult)

  //Alternative Solution using Reduce
  let output = data.reduce((acc,d)=>{
    for(let sub of d.subjects){
      if(!acc[sub]) acc[sub]= {subject: sub, students: []}
      acc[sub].students.push(d.name)
    }
    return acc;
  }, {})
  console.log("output: ",Object.values(output))