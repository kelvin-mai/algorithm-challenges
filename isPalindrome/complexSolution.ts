// solution
// first remove all punctuation, spaces and case sensitivity
// then compare each character of the string from both sides until the middle
// if the string length is odd, the middle one doesn't need to be compared to anyhing

function isPalindrome (str: string): boolean {
  // remove punctuation, spaces and case sensitivity
  str = str.toLowerCase();
  str = str.replace(/[^\w\s]/g,"");
  str = str.split(' ').join('');

  for(let i=0;i<str.length/2;i++){
    if (str[i] != str[str.length-1-i]) return false;
  }
  return true;
}
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("go dog"));
console.log(isPalindrome("Do good? I? No. Evil anon I deliver. I maim nine more hero men in Saginaw. Sanitary sword a tuck Carol, I! Lo, rack, cut a drowsy rat in Aswan. I gas nine more hero men in Miami. Reviled, I? no na, live on I do. O' God!"));
