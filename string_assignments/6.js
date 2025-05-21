// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'

let input='12345678987';

let first=input.slice(0,2);
let last=input.slice(-2);
let stars='*'.repeat(input.length-4);

console.log(first+stars+last);
