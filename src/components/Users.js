import { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {

    const [ allUsers, setAllUsers ] = useState([])
    const [ user, setUser ] = useState({
        username: ''
    })

    useEffect(() => {
        axios.get("http://localhost:3001/users/")
            .then(response => {
                setAllUsers(response.data)
                console.log('allUsers = ', response.data)
            })
            .catch(() => {
                console.log('Error retrieving data')
            })
    }, [])

    const handleChange = event => {
        const userInput = event.target.value
        const newUser = {
            username: userInput
        }
        setUser(newUser)
    }

    const registerUser = event => {
        event.preventDefault()
        const newUsername = {
            username: user.username
        }
        axios.post("http://localhost:3001/users/add", newUsername)
        setAllUsers([
            ...allUsers,
            newUsername
        ])
        setUser({
            username: ''
        })
    }

    const deleteUser = user => {
        const id = user._id
        axios.delete(`http://localhost:3001/users/${id}`)
            .then(() => {
                setAllUsers(allUsers.filter(user => user._id !== id))
            })
    }

    const updateUser = user => {
        const id = user._id
        const newName = prompt('Enter new username: ')
        const newUser = {
            ...user,
            username: newName
        }
        axios.put(`http://localhost:3001/users/update/${id}`, newUser)
            .then(() => {
                setAllUsers(allUsers.map(user => user._id !== id
                    ? user : newUser))
            })
    }

    return (
        <div>
            <div>
                <h1>Users</h1>
                <ul className="list-group">
                    {allUsers.map((user, i) => {
                        return (
                            <div key={i}>
                                <li className="list-group-item">{user.username}
                                <button onClick={(e) => deleteUser(user)}>Delete</button>
                                <button onClick={(e) => updateUser(user)}>Update</button></li>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <UserForm handleChange={handleChange}
                registerUser={registerUser}
                username={user.username} />
        </div>
    )
}

const UserForm = ({ handleChange, registerUser, username }) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <h5>Username:</h5>
                    <input onChange={handleChange}
                        name="username"
                        value={username}
                        className="form-control"></input>
                </div>
                <button onClick={registerUser}
                    type="submit"
                    className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Users
