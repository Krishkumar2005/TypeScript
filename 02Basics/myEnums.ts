const AISLE = 0
const MIDDLE = 1 
const WINDOW = 2 

// In the above code value of constant changeable easily by manually
// so above is not a good idea to take in use




/*

The full name for "enum" is enumeration. 
It refers to a data type in programming that allows a variable to be assigned one of a set of predefined named constants. 
These constants are typically represented in uppercase letters in many programming languages
*/ 

//enums serves very well in case of we want to have restricted options

enum SeatChoice {
    AISLE, //here default value is  0 for aisle
    MIDDLE = "middle", //we can define my own as well
    WINDOW = 0,
    FOURTH,
    five // bad way, good way is upper case
}

const hcSeat = SeatChoice.AISLE

export {}