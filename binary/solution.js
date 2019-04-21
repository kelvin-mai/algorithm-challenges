function binaryToDecimal(str) {
  const input = String(str);
  const binary = String(str)
    .split('')
    .filter(i => i === '1' || i === '0');

  if (input.length !== binary.length) {
    return 'Invalid input';
  }

  return binary.reduce((acc, curr, index, arr) => {
    return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
  }, 0);
}

console.log(binaryToDecimal(1)); // 1
console.log(binaryToDecimal(10)); // 2
console.log(binaryToDecimal('1001')); // 9
console.log(binaryToDecimal(10001101000)); // 1128
console.log(binaryToDecimal('carrot')); // invalid input
console.log(binaryToDecimal(12)); // invalid input
