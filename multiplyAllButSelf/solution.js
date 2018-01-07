// solution: create 2 arrays
// the first with products of all items except the first
// the second with products of all items except the last
// then multiply both together

// example
// [              1,         a[0],    a[0]*a[1],    a[0]*a[1]*a[2]  ]
// [ a[1]*a[2]*a[3],    a[2]*a[3],         a[3],                 1  ]
// [ a[1]*a[2]*a[3], a[0]*a[2]*a[3], a[0]*a[1]*a[3], a[0]*a[1]*a[2] ]

let multiplyAllButSelf = arr => {
  let length = arr.length;
  let productsAfterFirst = [1];
  let products = 1;
  for (let i=0; i<length; i++){
    products  *= arr[i];
    productsAfterFirst.push(products);
  }

  products  = 1;
  let productsBeforeLast = [1];
  for (let i=length-1; i>0; i--){
    products *= arr[i];
    productsBeforeLast.unshift(products);
  }

  let result = [];
  for(let i=0; i<length; i++){
    result.push(productsAfterFirst[i] * productsBeforeLast[i]);
  }
  return result;
}

// test solution
console.log(multiplyAllButSelf([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(multiplyAllButSelf([3, 2, 1])); // [2, 3, 6]
