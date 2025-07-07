//callback , //promises  and its types    //async await    //sync


//syncrouns functon
function list()
{
    console.log("1");
    console.log("1");
     console.log("1");
}
list();


//callabck


function greet(name, callabck)
{
    console.log(name);
    callabck();
    
}

function show()
{
    console.log("huuu");
    
}

greet("kannan", show);

//callback hell

setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
         console.log("word");
    }, 1000);
}, 1000)

