var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//we can just return normally, i want to practice using functions inside resolve
var sum2DArray = function (arr, ind) {
    return new Promise(function (resolve, reject) {
        if (ind >= arr.length)
            reject(function () { return console.log("Index given ".concat(ind, " is out of bounds")); });
        var sum = 0;
        for (var i = 0; i < arr[ind].length; i++) {
            sum += arr[ind][i];
        }
        resolve(function () { return sum; });
    });
};
var promises1 = [];
for (var i = 0; i < array.length; i++) {
    promises1.push(sum2DArray(array, i));
}
var sum = 0;
Promise.all(promises1)
    .then(function (functions) {
    functions.forEach(function (func) {
        var num = func();
        sum += num;
        console.log("Row sum -> ".concat(num));
    });
})
    .catch(function (errFunc) {
    errFunc();
});
if (sum !== 0)
    console.log("Final sum -> ".concat(sum));
