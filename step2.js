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
  //space complexity: O(n^2)

//Question 2
const hasUniqueChars = (str)=> {
    str = str.split("")
    let newArr = []
    for(let i = 0; i< str.length; i++){
    if(newArr.indexOf(str[i]) == -1){
      newArr.push(str[i])
    }
    else return false
    }
    
    return true
    
  }
//   console.log(hasUniqueChars("Moonday"))
//   console.log(hasUniqueChars("Monday"))


//Question 3

const isPangram=(answer)=>{
    let alphabet = ['a', 'b', 'c', 'd', 'e',
           'f', 'g', 'h', 'i', 'j',
           'l', 'm', 'n', 'o', 'p',
           'q', 'r', 's', 't', 'u',
           'v', 'w', 'x', 'y', 'z'
         ];
         answer=answer.toLowerCase();
         for (let i = 0; i < alphabet.length; i++) {
             if (answer.indexOf(alphabet[i])<0) {
               return false;
             }
         }
         return true
   }
   console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
   console.log(isPangram("I like cats, but not mice"))

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