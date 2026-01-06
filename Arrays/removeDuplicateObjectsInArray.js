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


  // Best Approach if the object has different properties
  const array = [
    { type: 'fruit', name: 'apple', color: 'red' },
    { type: 'fruit', name: 'apple', color: 'red' }, // duplicate
    { type: 'fruit', name: 'apple', color: 'green' },
  ];

  let uniqueArray = [...new Map(array.map(arr => [JSON.stringify(arr), arr])).values()]
  /* 
  1. [JSON.stringify(a),a] it will converts each object into a key-value pair:
    Input: { type: 'fruit', name: 'apple', color: 'red' }
    Becomes:
      [
      '{"type":"fruit","name":"apple","color":"red"}',   // key
      { type: 'fruit', name: 'apple', color: 'red' }     // value
      ]

  2. new Map([...]) ----> Maps do not allow duplicate keys.

      new Map([
          ['key1', obj1],
          ['key1', obj2],   // same key → overwrites obj1
          ['key2', obj3]
        ])
        The Map becomes:
        {
          'key1' → obj2,
          'key2' → obj3
        }

  3. .values() --->new Map(...).values()
    Returns an iterator of only the objects, not the keys:

  */
  console.log(uniqueArray)
  

  