const firstModule = require('./math');
console.log(firstModule.add(6,9));
try {
    console.log('try to divide by zero');
    let result = firstModule.divide(40, 10);
    console.log(result,'result');
}catch(error) {
    console.log('caught an error',error.message);
}

/*
module wrapper 
function(exports, require, module, __filename, __dirname){
    // Your module code goes here
    }
*/