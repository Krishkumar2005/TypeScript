/*

interfaces are often used to define the structure of objects, similar to how protocols are used in other languages like Swift. 
An interface acts as a contract, specifying what properties and methods an object must have to be considered compatible. 
This allows for code reusability and flexible type checking. 

*/ 



// protocol :-  if i want to implement certain thigs then is the way of how to implement

// In Ts we say interface but in the IOS development we call protocol
// interface is something which never involves the definition

interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}


interface Story{
    //createStory: () => void
    createStory(): void
}

//implement the interface with a Insta class
class Insta implements TakePhoto{

    // by including all the properties, we are perfectly following the protocol to take the photo
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}


//implement the interfaces with a Youtube class
class Youtube implements TakePhoto, Story{


    // if i want add extra property then i can do but kam nhi hona chahiye protocol se
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public story : string
    ){}
     
     
    createStory(): void {
        console.log("Story was created");
    }

}