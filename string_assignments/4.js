// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'
let str='this is javascript class';
let output='';
for(let word of str.split(' '))
{
    output+=word.charAt(0).toUpperCase()+word.slice(1)+' ';
}
console.log(output);


// let out=str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// console.log(out);