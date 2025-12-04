//============ Reduce ====================

// const arr = [ 1, 2, 3, 4]
// const initialValue = 0; // can be anyhting as per need
// const sumWithInitial = arr.reduce(
//   (accumulator , currentValue) => {
//     return (accumulator + currentValue)
//   }, initialValue
//)// for understanding purpose from the docs ==========


// const myNums = [ 1, 2, 3, 4]
// const total = myNums.reduce(
//   ( acc , currVal) => {
//     console.log(` acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
//   }, 0
// )
//console.log(total)

// === Now doing same with arrow function
const total = myNums.reduce ( (acc, currVal) =>acc + currVal ,)