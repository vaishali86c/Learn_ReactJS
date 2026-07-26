const fruitlist = ['apple', 'banana', 'mango'];

function MyList() {
    return (
        <ul>
            {fruitlist.map((fruit) =>
                <li key={fruit}>{fruit}</li>
            )}
        </ul>
    )
}

// map with objects

const users = [
    { id: 1, name: 'rohan', age:  20},
    { id: 2, name: 'mohan', age:  30},
    { id: 3, name: 'sohan', age:  40}
]

function UserList() {
    return (
        <ul>
            {users.map((user) =>
                <li key={user.id}>{user.name} is {user.age} years old</li>
            )}
        </ul>
    )
}

export { MyList, UserList}