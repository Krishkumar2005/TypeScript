/*
In TypeScript, a tuple is a fixed-length array where each element has a specified type.
Unlike regular arrays, tuples have a defined number of elements, and each element's type is known. 
This makes them useful for representing data structures where both the order and type of elements are important. 
*/ 

//const user: (string | number)[] = [1, "hc"]

// tuple syntax
let user: [string, number, boolean] // tuple with 3 length

// initialize tuble
user = ["hc", 121, true] // This can be acceptable

// Below things are not allowed

// user = [121, "hc", true] // order mismatch
// user = ["hc", 121, true, "hk", 44] // length mismatch

let rgb: [number, number, number] = [255, 123, 112]


type tUser = [number, string]

const newUser: tUser = [112, "example@google.com"]

newUser[1] = "kk.in"
//newUser.push(true) // we cannot do like this
