// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'
let input='Hello World';
let output='';
for(let ch of input)
{
    if(ch==ch.toUpperCase())
    {
        output+=ch.toLowerCase();
    }
    else{
        output+=ch.toUpperCase();
    }
}
console.log(output);