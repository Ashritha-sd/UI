// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

let input='hello world';
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
let max_count=0;
let maxChar='';
for (let char in output) {
    if (output[char]>max_count) {
      max_count=output[char];
      maxChar=char;
    }
  }
console.log(maxChar)