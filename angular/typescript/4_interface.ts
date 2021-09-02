interface UserInterface {
    name: string
    age: number
    logInfo: () => void
    id?: any
}

const user: UserInterface = {
    name: 'Kate',
    age: 27,
    logInfo() {
        console.log(this.name + ' ' + this.age);
    }
}