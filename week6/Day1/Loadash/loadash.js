
var chunk = function (arr, size) {
    var rarr = [];
    while (arr.length >= size) {
        rarr.push(arr.splice(0, size));
    }
    rarr.push(arr);
    console.log(rarr)
    return rarr;
};
var sum = function (arr) { return arr.reduce(function (sum, x) { return sum + x; }, 0); };
var filter = function (arr) { return arr.filter(function (element) { return element < 0; }); };
var find = function (arr, num) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] === num)
            return i;
    return num + " is not present";
};
var reduce = function (arr) {
    
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];
    
    return sum;
};

