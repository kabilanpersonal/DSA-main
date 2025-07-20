const obj = [
    { name: 'sai' },
    { name: 'Nang' },
    { name: 'sai' },
    { name: 'Nang' },
    { name: '111111' },
    { name: 'sai' },
    { name: 'Nang' },
    { name: '111111' },
  ]

  let result=[];
  let values = obj.map(item=> item.name)
  let removedDuplicates = values.filter((item,i,arr)=> {
    if(arr.indexOf(item)===i){
        result.push(obj[i])
    }
  } )
  console.log(result) //const obj = [{ name: 'sai' },{ name: 'Nang' },{ name: '111111' }]

  //Using set
  let S= new Set();
  let newResult=[]
obj.forEach(item=>{
    if(!S.has(item.name)){
        S.add(item.name)
        newResult.push(item)
    }
  })
  console.log(newResult)

  