"use strict";
// classes 
//private can be changeable with # like #city = private city, # is mainly use in js world
class User {
    constructor(email, name) {
        this.state = "Bihar";
        this.job = "software eng.";
        //private city: string = ""; 
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const krish = new User("k@k.in", "krish");
//krish.city = 2 // error not assign number to type string city
krish.city = "Patna"; // private we can't access
//krish.state = "Delhi" // error because we are try to assign to readonly property
krish.state; // we can readonly
//krish.job // we can not read because it is private
class userInfo {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        //protected member function/member variable/property accessible only in base class(userInfo) or derived class(SubUser)
        this.age = 22;
        this.adhaar_no = 1234;
    }
    // private method/member function
    deleteToken() {
        console.log("Token deleted");
    }
    // getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    get courseCount1() {
        return this.name;
    }
    // setter :-  A 'set' accessor cannot have a return type annotation.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// inheritance
class SubUser extends userInfo {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeAge() {
        this.age = 20;
    }
}
const ashish = new userInfo("a@k.com", "ashish");
ashish.email;
console.log(ashish.courseCount1); //we cannot access private property
//ashish.deleteToken()
