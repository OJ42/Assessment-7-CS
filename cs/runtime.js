const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

//Tiny Array
perf.start();                     
doublerAppend(tinyArray);
let resultsTinyAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsTinyInsert = perf.stop();

console.log('\nResults for the Tiny Array');
console.log("insert", resultsTinyInsert.preciseWords);
console.log("append", resultsTinyAppend.preciseWords);

//Small Array
perf.start();                     
doublerAppend(smallArray);
let resultsSmallAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsSmallInsert = perf.stop();

console.log('\nResults for the Small Array');
console.log("insert", resultsSmallInsert.preciseWords);
console.log("append", resultsSmallAppend.preciseWords);

//Medium Array
perf.start();                     
doublerAppend(mediumArray);
let resultsMediumAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsMediumInsert = perf.stop();

console.log('\nResults for the medium Array');
console.log("insert", resultsMediumInsert.preciseWords);
console.log("append", resultsMediumAppend.preciseWords);

//Large Array
perf.start();                     
doublerAppend(largeArray);
let resultsLargeAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsLargeInsert = perf.stop();

console.log('\nResults for the large Array');
console.log("insert", resultsLargeInsert.preciseWords);
console.log("append", resultsLargeAppend.preciseWords);

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsExtraLargeAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsExtraLargeInsert = perf.stop();


console.log('\nResults for the Extra Large Array');
console.log("insert", resultsExtraLargeInsert.preciseWords);
console.log("append", resultsExtraLargeAppend.preciseWords);

