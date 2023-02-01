// find average from an array
var arry = [2,3,4,1];

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    
    return total / count;
}

console.log(calculateAverage(arry));


// ***************************************************************************
var arry = [2,3,4,1];

function make_avg(arry) {
    var total = 0;
    var count = 0;

    arry.forEach(function(item, index) {
        total += item;
        console.log(item);
        console.log(index);

        count++;
    });
    
    return total / count;
}

console.log(make_avg(arry));


// *****************************************
// 2nd method
var nums = [11,13,28,20,35,39];
function make_avg(ints){
    var total = 0;
    for(var i = 0; i<ints.length;i++){
    var number = ints[i];
    total = total + number ;
    }
    var average = total / ints.length;
    return average ;
    }
    
    var result = make_avg(nums)
    console.log(result)




    // very short method
const arr = [8, 6, 5, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);