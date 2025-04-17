"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generic designed to work with different data types without needing to be rewritten for each type.
//It is feature that allows us to pass in various types of data and create reusable code to handle different inputs.
function identityThree(val) {
    return val;
}
//identityThree<boolean>(true)
identityThree("kk");
function identityFour(val) {
    return val;
}
identityFour({ brand: "kk", type: 9 });
let month = {
    key: 'Jan',
    value: 1
};
console.log(month);
// function getSearchProduct1<T>(products: Array<T>[]): Array<T>{
//     //some database operation 
//     let myIndex = 3 
//     return products[myIndex]
// }
function getSearchProduct(products) {
    //some database operation 
    console.log(products.length);
    const myIndex = 3;
    return products[myIndex];
}
//arrow function
// comma is use to denote it is a generic syntax not a html tag syntax
const getMoreProducts = (products) => {
    const myIndex = 5;
    return products[myIndex];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunction(3, { connect: "y", userName: "k", pass: "kk" });
// this class handle both of the interfaces in generic way
class Sellable {
    constructor() {
        this.cart = [];
    }
    addCart(product) {
        this.cart.push(product);
    }
}
const kk = new Sellable();
kk.addCart("kk");
kk.addCart(8);
