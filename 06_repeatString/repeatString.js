const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }

    let cString = "";
    for(let i = 0; i < num; i++){
        cString += string;
    }

    return cString;
};

// Do not edit below this line
module.exports = repeatString;
