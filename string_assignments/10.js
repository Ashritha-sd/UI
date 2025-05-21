// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'

let input='hello@#hi&';
let ch=input.replace(/[^a-zA-Z0-9]/g,'');
let spch=input.replace(/[a-zA-Z0-9]/g,'');
console.log(ch+spch);