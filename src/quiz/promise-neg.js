var array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9],
];
var negativeLogger = function (arr, ind) {
    var promise = new Promise(function (resolve, reject) {
        if (ind >= arr.length)
            reject("Index given - ".concat(ind, " is out of bounds"));
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[ind][i] < 0) {
                index = i;
                break;
            }
        }
        if (index == -1)
            resolve("No negative numbers found in the row ".concat(ind));
        else
            resolve("Negative Number found at - Row[".concat(ind, "] Col[").concat(index, "]"));
    });
    return promise;
};
var promises = [];
for (var i = 0; i < array2D.length; i++) {
    promises.push(negativeLogger(array2D, i));
}
Promise.all(promises)
    .then(function (responses) {
    for (var response in responses) {
        console.log(responses[response]);
    }
})
    .catch(function (err) { return console.log(err); });
