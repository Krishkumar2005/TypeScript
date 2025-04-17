function num(score: string | number | boolean): number | string | boolean {
    // return 9
    // return "k" 
    return true
}

num("kk")
num(8)
num(true)


let score: number | string = 99

score = 9

score = "8"




type User_1 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}


let Krish: User_1 | Admin = { name: "Krish", id: 1 }

Krish = { username: "Krish", id: 0o1 }

function getDbId(id: number | string) {
    //Making some API calls 
    console.log(`DB id is: ${id}`)

}

getDbId(3)
getDbId("3")


function getDbId1(id: number | string) {
    //return id.toLowerCase() // error because id can be number so firstly we have to ensure about that

    if (typeof id === "string") {
        id.toLowerCase()
    }

    else {
        id.toFixed()
    }

}

getDbId1(5)

// Array

const data: number[] = [1, 2, 3]
const data1: string[] = ['1', '2', '3']

// const data5: string [] | number[] = [] // it can be either of all number array or all string array, not  mixer array of number and string

const data3: string[] | number[] = ['1', '2', '3']
const data4: string[] | number[] = [1, 2, 3]


//mixer array of number and string

const data6: (string | number | boolean)[] = [1, 5, "9", 0, '3', true]


//literal type of assignment or type

let pi: 3.14 = 3.14 

//pi = 3.145 // error we can assign 3.14 only

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"

