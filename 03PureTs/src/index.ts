// classes 

//private can be changeable with # like #city = private city, # is mainly use in js world


class User {
    public email: string; // we can mention public as well
    name: string ; // By default it is public
    readonly state: string = "Bihar";
    private readonly job: string = "software eng.";
    //private city: string = ""; 
    city: string = ""
    constructor(email: string, name: string){
        this.email = email 
        this.name = name
    }
}

const krish = new User("k@k.in", "krish")

//krish.city = 2 // error not assign number to type string city

krish.city = "Patna" // private we can't access

//krish.state = "Delhi" // error because we are try to assign to readonly property

krish.state // we can readonly

//krish.job // we can not read because it is private




class userInfo {
    private _courseCount = 1

    //protected member function/member variable/property accessible only in base class(userInfo) or derived class(SubUser)
    protected age = 22
    readonly adhaar_no: number = 1234;
    constructor(
        public email: string,
        private name: string,
    ){

    }

    // private method/member function
    private deleteToken(){
        console.log("Token deleted")
    }

     
    // getter
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }


    get courseCount1(): string{
        return this.name
    }
    
    // setter :-  A 'set' accessor cannot have a return type annotation.

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

// inheritance

class SubUser extends userInfo{
    isFamily: boolean = true 
    changeAge(){
        this.age = 20
    }
}

const ashish = new userInfo("a@k.com", "ashish")

ashish.email
console.log(ashish.courseCount1) //we cannot access private property

//ashish.deleteToken()