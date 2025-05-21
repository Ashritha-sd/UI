// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

let str1='sachin';
console.log(str1.split('').reverse().join(''));

console.log(str1.split('').reduce((prev,curr)=>{return curr+prev;}));