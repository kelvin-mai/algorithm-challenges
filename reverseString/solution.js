function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// test
console.log(reverseString("Hello")); // olleH
