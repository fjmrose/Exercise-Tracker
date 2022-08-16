import { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {

    const [allUsers, setAllUsers] = useState([])
    const [user, setUser] = useState({
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

    const handleClick = event => {
        event.preventDefault()
        const newUsername = {
            username: user.username
        }
        axios.post("http://localhost:3001/users/add", newUsername)
        setUser({
            username: ''
        })
    }

    return (
        <div>
            <div>
                <h1>Users</h1>
                <ul>
                    {allUsers.map((user, key) => {
                        return <li key={key}>{user.username}</li>
                    })}
                </ul>
            </div>
            <UserForm handleChange={handleChange}
                handleClick={handleClick}
                username={user.username} />
        </div>
    )
}

const UserForm = ({ handleChange, handleClick, username }) => {
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
                <button onClick={handleClick}
                    type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Users