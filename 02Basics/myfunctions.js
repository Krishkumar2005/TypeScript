"use strict";
// How to take accurate parameters
Object.defineProperty(exports, "__esModule", { value: true });
function addFour(num) {
    //return num + 4;
    return "Krish"; // This will also work but this is not expected So we need to learn how return more accurate value
}
function getUpper(data) {
    return data.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var getNum = addFour(4);
getUpper("Krish");
signUpUser("Krish", "kk@kk.in", true);
logInUser("K", "a@k.com");
// Return accurate expected thing from function
function addNum(num) {
    return num + 4;
    //return 'krish'// this is give me error now becoz we defined return type of func is number
}
// Two type of return type, we will see it on later part
// function getValue(myVal: number) : boolean {
//     if(myVal > 8){
//         return true;
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
//we need declare type for hero because it auto inference type, but
// the best practice here is we can declare type for the callback function inside map
heros.map(function (hero) {
    return "hero is ".concat(hero);
    //return 80
});
//Best practice to explicitly mention void return type
function consoleError(errmsg) {
    console.log(errmsg);
    throw new Error(errmsg);
    // return 4 
}
/*
The never type in TypeScript represents values that will never occur(as they never reach a completion point.). It is
used as the return type for functions that always throw an error or enter an
infinite loop, and it can also appear when TypeScript infers no possible types.
The never type is a bottom type, meaning it is assignable to every other type,
but no type is assignable to never except for never itself.
*/
/*
When a function is designed to always throw an error, its return type is never.
This indicates that the function will never complete normally.
*/
function handleError(errmsg) {
    throw new Error(errmsg);
    //return 9
}
// Function that runs an infinite loop
/*
Functions that contain an infinite loop also have a return type of never,
as they never reach a completion point.
*/
function infiniteLoop() {
    while (true) { }
}
