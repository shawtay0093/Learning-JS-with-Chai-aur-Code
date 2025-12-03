//===================  for of loop   ===================

const arr = [1, 2, 3 , 4 , 5 ]

for (const num of arr) {
  // ( const element of object)
  // here iterator/element is just a var name that we use to refer each element in array.
  // The object above refers to anything that is iterable like array, string, object. Don't confuse with js objct.
  console.log(num);
}

const str = 'happy'
for (const letter of str) {
  console.log(letter)
}

// Maps

const map = new Map() // map is an object which holds key value pair
map.set('1 First key' , "first value")
map.set('2 Second key' , "Second value")
console.log(map) // it will output in map
for (const key of map) {
  console.log(key)// this will return an array of both key and value for each key like- [ '1 First key', 'first value' ] within an object
}
// to get separate key and value we use destructuring like below-
for (const [key, value] of map) {
  console.log(key ,':-' , value) 
}// gives output like- 1 First key :- first value

// for of loop on object-
// const myObj = {
//   'game1' : 'Ludo',
//   'game2' : 'Snake Ladder'
// }
// for (const [key, value] of myObj) {
//   //console.log(key , value)
// }// wont give result bcz objects arent iterable by for of loop

//======  For in loop==============
//== Objects=========
const myObject = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby'
}
for (const key in myObject) {
  console.log(key);
  
}

const cake = [ 'blackforest', 'strawberry', 'butterschotch']
for (const flavour in cake) {
  console.log(`flavour in the cake ${flavour} is ${cake[flavour]}`);
  
}

//========== For each loop =========
const coding = ['js', 'ruby', 'cpp']
coding.forEach( function (language){
  console.log(language)// this happened by normal function 
})
//now doing arrow function in forEach loop
coding.forEach( (lang) => {
  console.log(lang);
  
})

//making independent func and calling in for each loop for trying
function printMe ( item){
  console.log(item); 
}

coding.forEach(printMe)//refernce de rahe hai, execute nhi krna ( not printMe())

// for Each loop has also access of elements, index, arr (like the whole arr)
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
})

//===============================================
// Learning iteration in data like object inside array bcz api returns values like this only.

const myCoding = [ 
  {
    langName: 'Javascript',
    langFileName : 'js'
  },
  {
    langName: 'Java',
    langFileName : 'java'
  },
  {
    langName: 'Python',
    langFileName : 'py'
  },
  {
    langName: 'Ruby',
    langFileName : 'rb'
  }
]

myCoding.forEach((item) => {
  console.log(item.langName);
  
})