//Question 1

const addToZero =(arr)=>{
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++){
        if ((arr[i] + arr[j]) === 0){
          return true;
        }
      }
    }
    return false;
  }
  
  // console.log(addToZero([]));
  // console.log(addToZero([1]));
  // console.log(addToZero([1, 2, 3]));
  // console.log(addToZero([1, 2, 3, -2]));
  //runtime: O(n^2)
  //space complexity: O(1)

//Question 2
// const hasUniqueCharacters





  //Question 4
  function findLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length > longestWord.length){
        longestWord = arr[i];
      }
    }
    return longestWord
  }
  
  console.log(findLongestWord(["hi", "hello", "DiamondToliverJustSolvedThis!!"]))
  
  //runtime: O(n)
  //space complexity: O(n)