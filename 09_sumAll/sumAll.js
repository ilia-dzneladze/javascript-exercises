const sumAll = function(numOne, numTwo) {
    let result = 0, start, end;

    let numTypeOne = typeof(numOne);
    let numTypeTwo = typeof(numTwo);

    if((numTypeOne != "number") || (numTypeOne != numTypeTwo)){
        return "ERROR";
    }

    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo)){
        return "ERROR";
    }

    if(numOne < 0 || numTwo < 0){
        return "ERROR";
    }


    if(numOne > numTwo){
        start = numTwo;
        end = numOne;
    } else{
        start = numOne;
        end = numTwo;
    }

    for(let i = start; i <= end; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
