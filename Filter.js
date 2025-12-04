// const coding = [ 'js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//   console.log(item)
//   return item
// })//here we are trying to apply foreach and store in value. we will observe it doesnt returns any value. (returns undefined)
// console.log(values);//it is undefined


//=========================================================================================
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using filter now
// filter also takes callbacks
//myNums.filter( (num ) => num > 5)// now this will return values but we havent stored it nywhere so we gotta store it.
// const newNums = myNums.filter( (num ) => num > 5) // using arrow fun
// console.log(newNums) // it o/p ----> [ 6, 7, 8, 9, 10 ] array 

// const newNums = myNums.filter ((num) => {
//   return num > 3
// })
// console.log(newNums);

// Same work using forEach-----------
// const newNums = []

// myNums.forEach( (nums) => {
//   if( nums > 3){
//     newNums.push(nums)
//   }
// })
// console.log(newNums);

//====================================================

// ===================practice======================

const books = [
  { title: 'Book 1', genre: 'Fiction', publish: 1981, edition: 2004
  },
  { title: 'Book 2', genre: 'Non-Fiction', publish: 1992, edition: 2008
  },
  { title: 'Book 3', genre: 'History', publish: 1999, edition: 2007
  },
  { title: 'Book 4', genre: 'Non-Fiction', publish: 1989, edition: 2010
  },
  { title: 'Book 5', genre: 'Science', publish: 2009, edition: 2014
  },
  { title: 'Book 6', genre: 'History', publish: 1987, edition: 2010
  },
  { title: 'Book 7', genre: 'Science', publish: 1986, edition: 1996
  },
  { title: 'Book 8', genre: 'Fiction', publish: 2011, edition: 2016
  },
  { title: 'Book 9', genre: 'Fiction', publish: 1981, edition: 1989
  },
  { title: 'Book 10', genre: 'Fiction', publish: 1981, edition: 2004
  }
];

let userBooks = books.filter(( bk ) => bk.genre === 'History' )
userBooks = books.filter(( bk ) => bk.publish >= 2000 )
userBooks = books.filter(( bk ) => {
  return ( bk.publish >= 2000 && bk.genre === 'Science')
} )

console.log(userBooks);
