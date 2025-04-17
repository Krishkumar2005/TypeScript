const superHeros: string[] = []

//const heroPower: number[] = []

const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}


const allUsers: User[] = []

// Array with nuber of number
const MLModels: number[][] = [
    [255, 255, 255],
    [221, 332, 445],
    []
]

superHeros.push("spiderman")
heroPower.push(2)


allUsers.push({name: "Krish", isActive: true})




//Property "push" does not exist on type 'readonly string[]'

const numArr: ReadonlyArray<string> = []

//numArr.push("kk")

type User1 = {
    id: ReadonlyArray<string>
    name: string
}

const userDetail: User1 = {
    id: ["krish"],
    name: "ashish"
}

//userDetail.id.push("rahul")

export {}