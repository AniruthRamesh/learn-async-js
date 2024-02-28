type Array2D = number[][]

const array2D : Array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

const negativeLogger = (arr : Array2D, ind : number) : Promise<string> => {
  const promise : Promise<string> = new Promise((resolve, reject) => {
    if(ind >= arr.length) reject(`Index given - ${ind} is out of bounds`);

    let index = -1
    for(let i = 0;i < arr.length;i++){
      if(arr[ind][i]< 0){
        index = i;
        break;
      }
    }

    if(index == -1) resolve(`No negative numbers found in the row ${ind}`)
    else resolve(`Negative Number found at - Row[${ind}] Col[${index}]`)

  })

  return promise
}

type Promises = Promise<string>[]
const promises : Promises = []

for(let i = 0; i< array2D.length;i++){
  promises.push(negativeLogger(array2D, i))
}

Promise.all(promises)
.then((responses) => {
  for(const response in responses){
    console.log(responses[response])
  }
})
.catch((err) => console.log(err))
