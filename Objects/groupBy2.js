const data = [
    { name: 'Alice', subjects: ['Math', 'Physics'] },
    { name: 'Bob', subjects: ['Math', 'Chemistry'] },
    { name: 'Charlie', subjects: ['Physics'] }
  ];
   
  //Count of each subject
  let freq ={}
  data.forEach(({subjects})=>{
    subjects.forEach((sub)=>{
        freq[sub]= (freq[sub]||0) +1 
    })
  })
  console.log(freq) //{ Math: 2, Physics: 2, Chemistry: 1 }

  // Student with unique sub
  let uniqueSub = Object.entries(freq)
                  .filter(([key,value])=> value===1)
                  .map(([key])=>key)

    console.log(uniqueSub) //[Chemistry]

    let StudentWithUniqueSub= data.filter(({subjects})=> subjects.includes(uniqueSub.forEach(i=>i)));
    console.log(StudentWithUniqueSub)
