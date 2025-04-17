let greetings: string = "Hello Krish";
greetings.toLowerCase();

console.log(greetings);
//number 

//Not good practice, Doing the obvious things

let userId: number = 223344.3;

let num: number;
num = 5;

/////


//TypeScript Automatically detected the type of variable using type inference

let personId = 2;
personId.toExponential()
console.log(personId);


//boolean

let isLoggedIn: boolean = true;

//any -> Basically turn of type checking

//let hero;// type is any, cause accept any type data

let hero: string; // Any type is avoided here

function getHero(){
    return "hero";
}

hero = getHero()


// we may want to intentionally accept all values in our API
//this variable could be anything, so we give it the unknown type.

let notSure: unknown = 4;
notSure = "maybe a string instead";
 
// OK, definitely a boolean
notSure = false;

export {}