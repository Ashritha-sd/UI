// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript

let str='this is javascript class';
let output='';
let len=0;
for(let word of str.split(' '))
{
    if(word.length>len)
    {
        output=word;
        len=word.length;
    }
}
console.log(output);