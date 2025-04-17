const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val 
}


function identityTwo(val : any) : any {
    return val 
}

// Generic designed to work with different data types without needing to be rewritten for each type.
//It is feature that allows us to pass in various types of data and create reusable code to handle different inputs.

function identityThree<Type>(val: Type): Type{
    return val
}

//identityThree<boolean>(true)
identityThree("kk")


function identityFour<T>(val: T): T{
    return val 
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "kk", type: 9})

//generic interface

interface Pair<K, V> {
    key: K;
    value: V;
}


let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);


// function getSearchProduct1<T>(products: Array<T>[]): Array<T>{
//     //some database operation 
//     let myIndex = 3 
//     return products[myIndex]
// }

function getSearchProduct<T>(products: T[]): T{
        //some database operation 
        console.log(products.length)
        const myIndex = 3 
        return products[myIndex]
}

//arrow function

// comma is use to denote it is a generic syntax not a html tag syntax

const getMoreProducts = <T,>(products: T[]): T => {
    const myIndex = 5 
    return products[myIndex]
}


interface Database{
    connect: string;
    userName: string;
    pass: string;
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object{
    return {
        val1,
        val2
    }
}

anotherFunction(3,{connect: "y", userName: "k", pass: "kk"})


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

// this class handle both of the interfaces in generic way

class Sellable<T>{
    public cart: T[] = []

    addCart(product: T){
        this.cart.push(product)
    }
}

const kk = new Sellable()
kk.addCart("kk")
kk.addCart(8)