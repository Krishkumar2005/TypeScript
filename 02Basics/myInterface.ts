// used to define the structure or shape of an objects and other data types(specify the properties and methods that an object has or should have.)
// this interface is like os interface which is between the software and hardware,


// define structure of object
interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string // this is one of the type of function declaration
    startTrail(): string;
    getCoupon(couponname: string, value: number): number; // here parameters:- couponname, value
}

//Reopening of the interface
interface User {
    gitHubToken: string;
}

interface user_2{
    api: string;
}

//Inheritance

interface Admin extends User, user_2 {
    role: "admin" | "ta" | "learner" ; // literals for role
}


const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211,

gitHubToken: "github.com",
role: "admin",

api: "1234kk@/in",

startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => { // not compulsory to match names of argument with parameters, here arguments:- names, off
    return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33




interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point){
    console.log("The x coord" + pt.x);
    console.log("The coord of y" + pt.y);
}

printCoord({x: 100, y: 200})



/////////////////////////////////////////


function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);



  // ************************************


  interface LabeledValue {
    label: string;
  }
   
  function printLabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
   
  let myObj2 = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);