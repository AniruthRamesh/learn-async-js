type Array2d = number[][] 
const array : Array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//we can just return normally, i want to practice using functions inside resolve
const sum2DArray = (arr : Array2d, ind : number): Promise<() => number> => {
  return new Promise<() => number>((resolve, reject) => {
    if(ind >= arr.length) reject( () => console.log(`Index given ${ind} is out of bounds`))

    let sum = 0
    for(let i = 0;i< arr[ind].length;i++){
      sum += arr[ind][i]
    }

    resolve(() => {return sum})
  })
}

let promises1 : Promise<() => number>[] = []
for(let i = 0;i<array.length;i++){
  promises1.push(sum2DArray(array, i));
}

let sum = 0

// Promise.all(promises1)
// .then(functions => {
//   functions.forEach(func => {
//     let num : number = func()
//     sum += num
//     console.log(`Row sum -> ${num}`);
//   })
// })
// .catch((errFunc) => {
//   errFunc()
// })

const learnAsync = async () =>{
  try{
    const promises: (() => number)[]  = await Promise.all(promises1)
    let sum = 0
    promises.forEach(func => {
      let rowSum = func();
      sum += rowSum;
      console.log(`Row sum -> ${rowSum}`)
    })

    console.log(`Final Sum -> ${sum}`)
  }catch(err){
    console.log(err);
  }
}

learnAsync();
