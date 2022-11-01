function findFirstDuplicate(array) {
  let idx = 0;
    for (element in array){
      if (array[idx] === array[idx+1]){
          return (array[idx]);
      }  if (idx+1 === array.length){
          return (-1);
      } else idx++; 
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([2, 5, 5, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
