import axios from 'axios'
import { useState, useEffect } from 'react'
const allUsers = require

const Add = () => {

    const [ input, setInput ] = useState({
        username: '',
        description: '',
        duration: ''
    })
    const [ allUsers, setAllUsers ] = useState([])

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

    const durs = ["5", "10", "15", "20", "25", "30",
        "35", "40", "45", "50", "55", "60"]

    const exs = ["Run", "Gym", "Swim", "Yoga", "Boxing", "Pilates"]

    const handleClick = event => {
        event.preventDefault()

        const newLog = {
            username: input.username,
            description: input.description,
            duration: input.duration
        }
        axios.post("http://localhost:3001/exercises/add", newLog)

        setInput({
            username: '',
            description: '',
            duration: ''
        })
    }

    const handleUsernameChange = event => {
        const selectedUser = event.target.value
        setInput({
            ...input,
            username: selectedUser
        })
        console.log(input)
    }

    const handleExChange = event => {
        const selectedEx = event.target.value
        setInput({
            ...input,
            description: selectedEx
        })
        console.log(input)
    }

    const handleDurationChange = event => {
        const selectedDur = event.target.value
        setInput({
            ...input,
            duration: selectedDur
        })
        console.log(input)
    }

    return (
        <div>
            <h1>Add</h1>
            <form>
                <h5>Select username: </h5>
                <select className="form-select" 
                        aria-label="Default select example"
                        onChange={handleUsernameChange}>
                    {allUsers.map((user, i) =>
                        <option key={i}>{user.username}</option>
                    )}
                </select>
                <h5>Select exercise type: </h5>
                <select className="form-select" 
                        aria-label="Default select example"
                        onChange={handleExChange}>
                    {exs.map((ex, i) =>
                        <option key={i}>{ex}</option>
                    )}
                </select>
                <h5>Select duration: </h5>
                <select className="form-select" 
                        aria-label="Default select example"
                        onChange={handleDurationChange}>
                    {durs.map((dur, i) =>
                        <option key={i}>{dur}</option>
                    )}
                </select>
                <button onClick={handleClick}
                    type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Add

