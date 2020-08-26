var array = [];
var result = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    while (args.length !== 1) {
        var rarr = [], length_1 = args.length;
        for (var i = 0; i < args[0].length; i++)
            for (var j = 0; j < args[1].length; j++)
                rarr.push([args[0][i]] + " " + args[1][j]);
        args.splice(0, 2, rarr);
    }
    return args;
};
var comb = (result(['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h'], ['i', 'j']));
for (var i = 0; i < comb[0].length; i++)
    array.push([comb[0][i]]);
console.log(array);
