import React, {useState} from "react";

export default {
    title: "React.memo demo",
}
type UsersType = {
    users: Array<string>
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: UsersType) => {
    console.log("USERS")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const addUser = () =>{
        setUsers( [...users, "Alina" + new Date().getTime()])
    }
    const setCounterHandler = () => counter+1

    return (
        <>
            <button onClick={setCounterHandler}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count = {counter}/>
            <Users users={users}/>
        </>

        )



}