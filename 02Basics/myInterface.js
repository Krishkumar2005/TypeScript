// used to define the structure or shape of an objects and other data types(specify the properties and methods that an object has or should have.)
// this interface is like os interface which is between the software and hardware,
var hitesh = { dbId: 22, email: "h@h.com", userId: 2211,
    gitHubToken: "github.com",
    role: "admin",
    api: "1234kk@/in",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
hitesh.email = "h@hc.com";
function printCoord(pt) {
    console.log("The x coord" + pt.x);
    console.log("The coord of y" + pt.y);
}
printCoord({ x: 100, y: 200 });
/////////////////////////////////////////
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labeledObj) {
    console.log(labeledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
