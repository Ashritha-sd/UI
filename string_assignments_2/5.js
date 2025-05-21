// 5. Shift the characters by the next character, the output should have the next char of input
//    input:  'abcxyz'
//    output: 'bcdyza'

let input='abcxyz';
let output='';
for(ch of input)
{
    if(ch=='z')
    {
        output+='a';
    }
    else if(ch=='Z')
    {
        output+='A';
    }
    else
    {
    output+=String.fromCharCode(ch.charCodeAt(0)+1);
    }
}
console.log(output);