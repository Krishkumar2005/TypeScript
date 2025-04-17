//Immediately Invoked Function Expression

/*
It's a JavaScript pattern where a function is defined and executed immediately after it's defined. 
This pattern is often used to create a private scope, preventing variable pollution in the global namespace. 
*/ 

(
    function chai(){
        //named IIFE
        console.log("DB CONNECTED")
    }
)();

(
    (name) => {
        // simple IIFE
        console.log(`DB CONNECTED TWO ${name}`)
    }
)("Krish")
