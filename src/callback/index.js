// CALLBACK: IS A FUNCTION THAT IS PASSED TO ANOTHER FUNCTION AS AN ARGUMENT WHICH THEN IS EXECUTED INSIDE ANOTHER EXTERNAL FUNCTION.

// EXAMPLE 1 --> CALLBACK
function sum(num1, num2){
    return num1 + num2;
}

function call(num1, num2, callback){
    return callback(num1,num2);
}

console.log(call(4,5,sum));

// EXAMPLE 2 --> SETTIMEOUT

function gretting (name) {
    console.log(`Hola ${name}`) 
}

setTimeout(gretting, 4000, 'German');

// EXAMPLE 3 --> XMLHTTPRequest
// https://fakeapi.platzi.com/