// program to generate a multiplication table

// take input from the user
// const number = 13;

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }



// **************************************
// for(i = 1; i <= 10; i++){
//     console.log(13*i);
// }

// ***************************


// using only loop
// var number = "13";
// for(i = 1; i <= 10; i++){
//     console.log(13 + " * " + i +" = " + 13 * i);
// }


// using function inside loop
// *****************************************

function multiplicationTable(){
    for(i = 1; i <= 10; i++){
        console.log(13 + " * " + i +" = " + 13 * i);
        // return 13 + " * " + i +" = " + 13 * i;
    }
}

multiplicationTable();
var multiplication = multiplicationTable();
console.log(multiplication );



// get return
// not solved

// function multiplicationTable(){
//     for(i = 1; i <= 10; i++){
//         number = (13 + " * " + i +" = " + 13 * i);
//         return number;
//     }
// }

// multiplicationTable();
// var multiplication = multiplicationTable();
// console.log(multiplication);


function multiplicationTable(){
    for(i = 1; i <= 10; i++){
       var table= console.log(3 + " * " + i +" = " + 3 * i);
        
    }
    return table;
}

multiplicationTable();
var multiplication = multiplicationTable();
console.log(multiplication);



