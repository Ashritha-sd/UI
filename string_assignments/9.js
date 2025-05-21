// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
let input='hello@#hi&';
let output=input.replace(/[^a-zA-Z0-9]/g,'');
console.log(output);