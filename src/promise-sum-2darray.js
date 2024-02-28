const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//concurrency
function sum2DArray(arr, ind){
    return new Promise((resolve, reject) => {
        if(ind >= arr.length) reject("Index out of bounds")

        var sum = 0;

        for(let i = 0; i<arr[ind].length; i++){
            sum += arr[ind][i]
        }

        resolve(sum);

    })
}

let promises = []

for(let i = 0;i < array2D.length; i++){
    promises.push(sum2DArray(array2D, i));
}

Promise.all(promises)
.then((response) => console.log(response))
.catch((err) => console.log(err))

let promises1 = []

for(let i = 0;i <= array2D.length; i++){
    promises1.push(sum2DArray(array2D, i));
}

Promise.all(promises1)
.then((response) => console.log(response))
.catch((err) => console.log(err))
