"use strict";
function detectType(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 9;
}
function provideId(id) {
    if (!id) {
        console.log("Please Provide ID");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string" && strs.length !== 0) {
            console.log(strs);
        }
    }
}
function isAdminCheck(account) {
    //return account.isAdmin // error
    // to solve above error use in operator
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//  instanceof operator checks if an object is an instance of a specified class or constructor function at runtime. 
// It returns a boolean value: `true` if the object is an instance of the type, and `false` otherwise, 
// ensuring robust type checking during execution.
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
console.log(isFish({ swim: () => console.log("swimming") }));
// const myPet: Fish | Bird = { swim: () => console.log("Swimming!") };
// if (isFish(myPet)) {
//   myPet.swim(); // TypeScript now knows it's a Fish
// } else {
//   myPet.fly();  // Otherwise, it's a Bird
// }
// for bird change swim() to fly(), isFish to isBird and Fish to Bird
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
//discriminated union
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        // this is check whether you are missing some interface from Shape type
        default:
            const _exhaustiveCheck = shape; // we can use my own name at place of _exhaustiveCheck like _defaultForShape
            return _exhaustiveCheck;
    }
}
