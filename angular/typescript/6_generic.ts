interface IUser {
    id: number
    name: string
    age: number
}

const users: Array<IUser> = [
    {id: 1, name: 'A', age: 19},
    {id: 2, name: 'B', age: 20}
]

const users2: IUser[] = [
    {id: 1, name: 'A', age: 19},
    {id: 2, name: 'B', age: 20}
]