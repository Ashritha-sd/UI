// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)

let str1='listen';
let str2='silent';

if(str1.length!=str2.length){
    console.log('Not anagram');
}
else{
if(str1.split('').sort().join('')==str2.split('').sort().join(''))
{
    console.log('Anagram');
}
else
{
    console.log('Not anagram');
}
}
