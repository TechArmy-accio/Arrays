
// numbers, string, boolean
// let a = 10 

// b = a // b = 10 photocopy 

// a = 100


// console.log(a) // 100
// console.log(b) // 10



// let arr1 = [10,20,30,40,50]

// // let arr2 = arr1 

// // let arrr3 = arr1


// arr1[0] = 100

// arr2[1] = 200


// console.log(arr1) // [10,20,30,40,50]
// console.log(arr2) // [10,20,30,40,50]


// let n = 100

// let t = n


let arr1 = [10,20,30,40,50]

// let arr1 = arr1

// console.log(arr1, typeof arr1) // [10,20,30,40,50]

let arr2 = [] 

let k = 0
// for(let t  of arr1){
//    console.log(t, typeof t)

// //    arr2.push(t)
// //   arr[k++] = t
// }

for(let i = 0; i<=arr1.length-1; i++){
    arr2[i] = arr1[i]
}


arr1[0] = 100000

console.log(arr1) // [100000,20,30,40,50]
console.log(arr2) // [10,20,30,40,50]