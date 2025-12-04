const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//=================  Map=>  will take callback and return value
//const newNums = myNums.map( (num ) => num + 10 )
//console.log(newNums);

//========   Chaining Method    ======================
// means applying 2-3/more methods at once... like map over map, over filter... see below ex-

const newNums = myNums
                    .map( (nums) => nums + 10)
                    .map ( (nums) => nums * 10)
                    .filter( (nums ) => nums >= 140)
console.log(newNums);