function num(score) {
    // return 9
    // return "k" 
    return true;
}
num("kk");
num(8);
num(true);
var score = 99;
score = 9;
score = "8";
var Krish = { name: "Krish", id: 1 };
Krish = { username: "Krish", id: 1 };
function getDbId(id) {
    //Making some API calls 
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getDbId1(id) {
    //return id.toLowerCase() // error because id can be number so firstly we have to ensure about that
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toFixed();
    }
}
getDbId1(5);
// Array
var data = [1, 2, 3];
var data1 = ['1', '2', '3'];
// const data5: string [] | number[] = [] // it can be either of all number array or all string array, not  mixer array of number and string
var data3 = ['1', '2', '3'];
var data4 = [1, 2, 3];
//mixer array of number and string
var data6 = [1, 5, "9", 0, '3', true];
//literal type of assignment or type
var pi = 3.14;
//pi = 3.145 // error we can assign 3.14 only
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
