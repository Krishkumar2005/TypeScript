var greetings = "Hello Krish";
greetings.toLowerCase();
console.log(greetings);
//number 
//Not good practice, Doing the obvious things
var userId = 223344.3;
var num;
num = 5;
/////
//TypeScript Automatically detected the type of variable using type inference
var personId = 2;
personId.toExponential();
console.log(personId);
//boolean
var isLoggedIn = true;
//any -> Basically turn of type checking
//let hero;// type is any, cause accept any type data
var hero; // Any type is avoided here
function getHero() {
    return "hero";
}
hero = getHero();
// export {}
