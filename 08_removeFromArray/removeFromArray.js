const removeFromArray = function(arr, ...elem) {
    return arr.filter(item => !elem.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
