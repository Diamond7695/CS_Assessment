const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}// They created a function called doublerAppend. It has a parameter of nums. Then they defined a new variable called new_nums which is an empty array. They did a for loop for nums. They creatued a new array where nums index of the list is multiplied each num then assigns it to the empty array which is called new nums?


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}// They created a function called doublerInsert. This is the same as the first function. However, they unshift instead of push


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}//The created a function called getSizedArray with a parameter of size, They also created a new variable named array with an empty array. Then, they created a for loop. They pushed the array and i. Finally, they returned the array?


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

// console.log('Results For Extra LARGE :');
// console.log("INSERT extraLargeArray is", resultsAppend);
// console.log("APPENED extraLargeArray is", resultsInsert);

//Same as the first?
//Just change extraLarge to Large based on line 40? Same on line 49-57?

perf.start();//start timer                    
doublerAppend(largeArray);
let resultsLarge1 = perf.stop();//stop timer + save results

perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();

// console.log('Results for LARGE ARRAY ARE:')
// console.log('APPEND for Large Array is: ', resultsLarge1)
// console.log('INSERT for Large Array are:', resultsInsertLarge)


//Same but with medium array described on line 39?
perf.start();//start timer
doublerAppend(mediumArray);
let resultsMedium = perf.stop();////stop timer + save results

perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();

// console.log('Results for MEDIUM ARRAY ARE:')
// console.log('APPENED for MEDIUM Array is: ', resultsMedium)
// console.log('INSERT for MEDIUM Array are:', resultsInsertMedium)

//same on line 38? for small?
perf.start();//start timer
doublerAppend(smallArray);
let resultsSmall = perf.stop();//stop timer

perf.start();//start timer
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();////stop timer + save results

// console.log('Results for SMALL ARRAY ARE:')
// console.log('APPENED for SMALL Array is: ', resultsSmall)
// console.log('INSERT for SMALL Array are:', resultsInsertSmall)

//Same with tiny?
perf.start();//start timer
doublerAppend(tinyArray);
let resultsTiny = perf.stop()////stop timer + save results

perf.start();//start timer
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();////stop timer + save results

console.log('Results for TINY ARRAY ARE:')
console.log('APPENED for TINY Array is: ', resultsTiny)
console.log('INSERT for TINY Array are:', resultsInsertTiny)


//Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

//Not sure. It seems like the time is longer in Appened then it is for Insert? Also, append percisesWorsd seems faster than verboseWords.