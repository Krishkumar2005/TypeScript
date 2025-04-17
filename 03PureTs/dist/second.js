"use strict";
/*

interfaces are often used to define the structure of objects, similar to how protocols are used in other languages like Swift.
An interface acts as a contract, specifying what properties and methods an object must have to be considered compatible.
This allows for code reusability and flexible type checking.

*/
//implement the interface with a Insta class
class Insta {
    // by including all the properties, we are perfectly following the protocol to take the photo
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//implement the interfaces with a Youtube class
class Youtube {
    // if i want add extra property then i can do but kam nhi hona chahiye protocol se
    constructor(cameraMode, filter, burst, story) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.story = story;
    }
    createStory() {
        console.log("Story was created");
    }
}
