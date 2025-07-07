let str = "{[()]}";



while (/\(\)|\[\]|\{\}/.test(str))
{
    str = str.replace(/\(\)|\[\]|\{\}/g, '');
    
}
console.log(str.length==0);
