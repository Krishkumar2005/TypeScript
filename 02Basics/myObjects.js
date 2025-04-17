"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "krish",
    email: "krish@01.dev",
    isAvtive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//createUser({name: "krish", isPaid: false, email: "k@k.com"}) // Here it showing error
// let newUser = {name: "krish", isPaid: false, email: "k@k.com"}
// createUser(newUser)  // but here it not showing error, so this is bad/odd behaviour of it
function createCourse() {
    return { name: "reactjs", price: 399 }; // specify only known property
}
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "krish1", email: "", isActive: true });
var myUser = {
    _id: "1234", // in case of array:- _id: ["1234"]
    name: "k",
    email: "k@k.com",
    isActive: true,
    //creditCard: 7 //here creditCard is optional so, if i am not give value to creditCard then it's ok
};
var myUser1 = {
    _id: "123", // in case of array:- _id: ["1234"]
    name: "kkab",
    email: "k@k.com.in",
    isActive: false,
    creditCard: 9 //here creditCard is optional so, if i am not give value to creditCard then it's ok
};
myUser.email = "krish.in";
myUser1.name = "ashish";
var card_info = {
    cardNum: "231",
    cardDate: "22-03-30",
    cvv: 1
};
console.log(card_info.cardDate);
