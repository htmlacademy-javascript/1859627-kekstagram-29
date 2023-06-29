/*
let showLengthOfString = function (length, maxLength) {
  console.log(length <= maxLength);
};

showLengthOfString(30, 35);
*/


function palindrome(str) {
  str = str.replaceAll(/\s/g,'').toUpperCase();
  return str === str.split('').reverse().join('');
}

console.log(palindrome('Топот'));
console.log(palindrome('Пульт'));
console.log(palindrome('Топ о т'));
