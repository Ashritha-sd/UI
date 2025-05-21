// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let input='Rabindra Nath Tagore';
let output='';
for(word of input.split(' ').slice(0,-1))
{
    output+=word.charAt(0).toUpperCase()+'. ';
}
output+=input.split(' ').at(-1).toLowerCase();
console.log(output);