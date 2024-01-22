return function (text, color, x, y, separationLength) {
    var str = text.match(RegExp("[^ ].{0," + (separationLength ? separationLength - 2 : "") + "}([ ]|$)|.+", "g"));
    for(let yLoop = 0; yLoop < str.length; yLoop++) {
        for(let xLoop = 0; xLoop < str[yLoop].length; xLoop++) {
            writeCharToXY(str[yLoop][xLoop], color, xLoop + x, yLoop + y);
        };
    };
}
