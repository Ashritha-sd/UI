// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

let str1='entertainment';
for (let ch of str1)
{
    if(str1.indexOf(ch)==str1.lastIndexOf(ch))
    {
        console.log(ch);
        break;
    }
}
