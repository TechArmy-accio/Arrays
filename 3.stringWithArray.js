

// let str = "apple"
// // [ 'a', 'p', 'p', 'l', 'e' ]

// let arr = []
// for(let i = 0; i<=str.length-1; i++){
//     // console.log(str[i])

//     // arr[0] = str[0]
//     // arr[1] = str[1]
//     // arr[2] = str[2]

//     arr[i] = str[i]
// }

// console.log(arr) // [ 'a', 'p', 'p', 'l', 'e' ]



// let str = "Ram is dancing"
// str = str+" "
// let x = 0
// // ["Ram", "is", "dancing"]
// let arr = []

// let word = ""
// for(let i = 0; i<=str.length-1; i++){
    
//     if(str[i] !=" "){
//         word = word+str[i] // is
//     }
//     else if(str[i] == " "){ 
//         // arr[i] = word
//         // // arr[3] = "Ram"
//         // // arr[6] = "is"
//         // // arr[13] = "dancing"

//         arr[x] = word
//         // arr[0] = "Ram"
//         // arr[1] = "is"
//         // arr[2] = "dancing"
        
//         word = ""
//         x = x+1
       
//     }

// }
// console.log(arr) // [ 'Ram', 'is', 'dancing' ]


// for(let t of arr){
//     console.log(t)
// }


// split() => string => array

// let str = "apple" // [ 'a', 'p', 'p', 'l', 'e' ]

// let arr = str.split("")


// let str = "Ram is dancing"

// let arr = str.split(" ")

// console.log(arr) // [ 'Ram', 'is', 'dancing']


// let v = "121.12.56"

// let arr = v.split("")
// console.log(arr) // [ '121', '12', '56' ]

// let previousVersion = "121.12.56"
// let currentVersion = "121.0000012.56"

// let parr = previousVersion.split(".") // [ '121', '12', '56' ]
// let carr = currentVersion.split(".") // [ '121', '0000012', '56' ]

// if(+parr[0]> +carr[0]){
//     console.log("previous version is greater")
// }

// else if(+parr[0] < +carr[0]){
//     console.log("current version is greater")
// }

// else if(+parr[0] == +carr[0]){
//      if(+parr[1]> +carr[1]){
//         console.log("previous version is greater")
//      }
//      else if(+parr[1] < +carr[1]){
//         console.log("current version is greater")
//      }
//      else if(+parr[1] == +carr[1]){
//          if(+parr[2]> +carr[2]){
//             console.log("previous version is greater")
//          }
//             else if(+parr[2] < +carr[2]){
//                 console.log("current version is greater")
//             }
//             else if(+parr[2] == +carr[2]){
//                 console.log("both are equal")
//             }
//      }
// }



// let arr = [10,20,30,40,50] // "1020304050"

// let arr1 = ["a","p","p","l","e"] // "apple"

// let str = ""
// for(let i = 0; i<=arr1.length-1; i++){
//     // str[0] = arr[0]
//     // str[1] = arr[1]
//     // str[i] = arr[i]
//     // // str[0] = "a"
//     // // str[1] = "p"
//     // // str[2] = "p"
//     // // str[3] = "l"
//     // // str[4] = "e"

//     str = str+arr1[i]

// }

// console.log(str) // "apple"

// join() => array => string


// let arr = ["a","p","p","l","e"] 

// let str = arr.join("")

// console.log(str) // "a,p,p,l,e"


// let str = "apple"

// str.reverse()


// let arr = ["a","p","p","l","e"] 

// arr.reverse()

// console.log(arr) // [ 'e', 'l', 'p', 'p', 'a' ]


// let str = "apple"

// // let arr = str.split("") // [ 'a', 'p', 'p', 'l', 'e' ]
// // let rev = arr.reverse() // [ 'e', 'l', 'p', 'p', 'a' ]
// // console.log(rev.join("")) // [ 'e', 'l', 'p', 'p', 'a' ]


// console.log(str.split("").reverse().join(""))


