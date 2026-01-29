const fetchData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = false;
        if(success) resolve("Data fetched");
        else reject("Data error")
    },1000)
});

fetchData
.then((data)=> console.log(data))
.catch(error => console.log(error))