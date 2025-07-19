
let str = "kanna is  a loosu   cutie   ";

function capitalizeFirstWord(str){

  console.log(
    str
    .split(' ')
    .filter((word) => word.length>0) //removes the extra space
    .map((word)=> word[0].toUpperCase()+word.slice(1).toLowerCase())
    .join(' '))
}


capitalizeFirstWord(str);

