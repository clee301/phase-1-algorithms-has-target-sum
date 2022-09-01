function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === difference) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  Function takes in array and the target value.
  For loop to iterate each index of the array. 
  Check to see if the value of the index minus the target value can be found in the remainder of the array. 
  

*/

/*
  Add written explanation of your solution here

  The function should take in  the array and iterate through each index of the array and see if pairing with another index of the array would equal to the target value. 

  First there should be a for loop to iterate through each index of the array. Each index should be added to other indices found in the array to see if the sum equals to the target value. Iterate through the entire array until the length of the array. If any sum equals to the target value, return true. Otherwise, return false. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
