
/*
  Sort the Array based on the following rules:

  1. Higher priority first (descending)
     - Tasks with greater priority values should come before lower ones.

  2. Lower executionTime next (ascending)
     - Among tasks with the same priority, those with shorter execution times should come first.

  3. Lower id last (ascending)
     - If both priority and executionTime are equal, the task with the smaller id should come first.
*/

const tasks = [
    { id: 1, priority: 3, executionTime: 5 },
    { id: 2, priority: 1, executionTime: 2 },
    { id: 3, priority: 3, executionTime: 2 },
    { id: 4, priority: 5, executionTime: 8 },
    { id: 5, priority: 2, executionTime: 1 }
  ];

  const tasks2 = [
    { id: 10, priority: 4, executionTime: 3 },
    { id: 11, priority: 4, executionTime: 3 },
    { id: 12, priority: 4, executionTime: 2 },
    { id: 13, priority: 2, executionTime: 5 },
    { id: 14, priority: 2, executionTime: 5 }
  ];

  function customSorting(task){

    if(!task || task.length === 0) return [];
    return task.sort((a,b)=>{
        //Higher priority first
        if(a.priority !== b.priority){
            return b.priority - a.priority
        }
        if(a.executionTime !== b.executionTime){
          return a.executionTime - b.executionTime
        }

        // lower id first
        return a.id - b.id
    }).map(item => item.id)
  }

  console.log(customSorting(tasks)); //[ 4, 3, 1, 5, 2 ]
  
  console.log(customSorting(tasks2)) //[ 12, 10, 11, 13, 14 ]
