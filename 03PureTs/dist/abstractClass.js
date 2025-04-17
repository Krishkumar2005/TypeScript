"use strict";
/*
While both are used to achieve abstraction in object-oriented programming, they differ in their purpose and capabilities.
Abstract classes can have both abstract and concrete methods, while interfaces only define abstract methods.
Classes can implement multiple interfaces, but can only inherit from one abstract class.
*/
// we can not create direct object of abstract class
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
//Instagram class need to implement abstreact method otherwise it is not follo the abstract class
class Instagram extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("test", "fail", 4);
hc.getReelTime();
