/*
While both are used to achieve abstraction in object-oriented programming, they differ in their purpose and capabilities. 
Abstract classes can have both abstract and concrete methods, while interfaces only define abstract methods. 
Classes can implement multiple interfaces, but can only inherit from one abstract class. 
*/ 

// we can not create direct object of abstract class
abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}

//Instagram class need to implement abstreact method otherwise it is not follo the abstract class
class Instagram extends TakePhoto2{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number 
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const hc  = new Instagram("test", "fail", 4);

hc.getReelTime()