// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}
let input='entertainment';
let output={};
for(char of input)
{
    if(output[char])
    {
        output[char]++;
    }
    else{
        output[char]=1;
    }
}
console.log(output);

