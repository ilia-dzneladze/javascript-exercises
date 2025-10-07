const reverseString = function(string) {
    let len = string.length;
    let revString = "";
    for(let i = len - 1; i >= 0; i--){
        revString += string[i];
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
