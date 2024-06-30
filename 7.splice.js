
// let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Papaya', 'Guava', 'Pineapple', 'Grapes']



// remove elemt from any index: 

// let x = fruits.splice(3, 1) // starting from index 1 remove 2 elements

// console.log(fruits) 

// console.log(x) // [ 'Orange', 'Papaya' ]


// fruits.splice(3) // delete all elemt from index 3

// console.log(fruits) // [ 'Apple', 'Banana', 'Mango' ]


// insert: 

// let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Papaya', 'Guava', 'Pineapple', 'Grapes']


// fruits.splice(2,1, 'Kiwi', 'Watermelon') 


// console.log(fruits) // [ 'Apple', 'Banana', 'Kiwi', 'Watermelon', 'Papaya', 'Guava', 'Pineapple', 'Grapes' ]







// fruits.splice(2, 0, 'Kiwi', 'Watermelon') // starting from index 2 insert 2 elements


// console.log(fruits) // [ 'Apple', 'Banana', 'Kiwi', 'Watermelon', 'Mango', 'Orange', 'Papaya', 'Guava', 'Pineapple', 'Grapes' ]


// update:
// fruits.splice(2, 0, "t") // starting from index 2 insert 2 elements

// console.log(fruits) 


// let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Papaya', 'Guava', 'Pineapple', 'Grapes']



// fruits.splice(2,1, "y")


// console.log(fruits) // [ 'Apple', 'Banana', 'y', 'Orange', 'Papaya', 'Guava', 'Pineapple', 'Grapes' ]