const User = {
    name: "krish",
    email: "krish@01.dev",
    isAvtive: true
}

function createUser({name: string, isPaid: boolean}){}

//createUser({name: "krish", isPaid: false, email: "k@k.com"}) // Here it showing error

// let newUser = {name: "krish", isPaid: false, email: "k@k.com"}

// createUser(newUser)  // but here it not showing error, so this is bad/odd behaviour of it



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399} // specify only known property
}


//type aliases:- provide a way to create custom names for existing types, enhancing code readability and maintainability.

type Mystring = string // rename of default data type string

type User ={
    name: Mystring;
    email: string;
    isActive: boolean
}

function createUser1(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser1({name: "krish1", email:"", isActive: true})


type User2 = {
    readonly _id: string // in case of array:- readonly _id: string[]
    name: string
    email: string
    isActive: boolean
    creditCard?: number //optinal symbol = ?
}

let myUser : User2 = {
    _id: "1234", // in case of array:- _id: ["1234"]
    name: "k",
    email: "k@k.com",
    isActive: true,
    //creditCard: 7 //here creditCard is optional so, if i am not give value to creditCard then it's ok
}

let myUser1 : User2 = {
    _id: "123", // in case of array:- _id: ["1234"]
    name: "kkab",
    email: "k@k.com.in",
    isActive: false,
    creditCard: 9 //here creditCard is optional so, if i am not give value to creditCard then it's ok
}

myUser.email = "krish.in"
myUser1.name = "ashish"
//myUser._id = "kk" // cannot be modify because this propert is readonly

 //myUser._id.push("kkrr32") // if _id would be array, we can push values to array in case of readonly.


type card_num = {
    cardNum: string 
}

type card_date = {
    cardDate: string 
}



//the ampersand symbol (&) used in type declarations defines an intersection type. 
//This combines multiple types into a single type that has all the properties and methods of the combined types. 
type cardDetails = card_num & card_date & {
    cvv: number 
}


let card_info : cardDetails ={
    cardNum: "231",
    cardDate: "22-03-30",
    cvv: 1
}

console.log(card_info.cardDate)

export {}