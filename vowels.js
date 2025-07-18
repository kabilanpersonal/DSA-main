let a="KAbilan"


//reverse the vowels alone
function reverseVowels(str){
    let vowels= str.match(/[aeiou]/gi)
    console.log("Vowels : ",vowels);
    console.log(str.replace(/[aeiou]/gi,()=>vowels.pop()))
}

function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count=0;
    for (const i of str){
        vowels.includes(i) ? count+=1 : count;
    }
    console.log(count);
    return count;
}
function countVowelsMatch(str){
    console.log("Count of Vowels :",str.match(/[aeiou]/gi).length);
    console.log("Count of Consonents :",str.match(/[^aeiou]/gi).length);
}

function freqOfVowels(str){
    str= str.replace(/[^aeiouAEIOU]/g,'')
    console.log(str);
    freq={};
    for(const item of str){
        freq[item]= (freq[item]||0)+1
    }
    console.log(freq)

}


countVowels(a);
freqOfVowels(a);
reverseVowels(a);
countVowelsMatch(a)
