function make_avg(int1, int2, int3){
    const total = int1 + int2 + int3;
    const average = total / 3;
    return average;
}

const int1val = 60;
const int2val = 59;
const int3val = 87;


var myAverage = make_avg(int1val, int2val, int3val);
console.log('average of integers: ', myAverage);