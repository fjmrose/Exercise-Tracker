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

    console.log('input = ', input)

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

    const exs = ["Run", "Gym", "Swim", "Yoga"]

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
    }

    const handleExChange = event => {
        const selectedEx = event.target.value
        setInput({
            ...input,
            description: selectedEx
        })
    }

    const handleDurationChange = event => {
        const selectedDur = event.target.value
        setInput({
            ...input,
            duration: selectedDur
        })
    }

    return (
        <div>
            <h1 className="m-3">Add Exercise</h1>
            <form>
                <h5 className="m-3">Select username: </h5>
                <select className="form-select" 
                        aria-label="Default select example"
                        onChange={handleUsernameChange}>
                        <option selected>Open this select menu</option>
                    {allUsers.map((user, i) =>
                        <option key={i}>{user.username}</option>
                    )}
                </select>
                <h5 className="m-3">Select exercise type: </h5>
                <select className="form-select" 
                        aria-label="Default select example"
                        onChange={handleExChange}>
                        <option selected>Open this select menu</option>
                    {exs.map((ex, i) =>
                        <option key={i}>{ex}</option>
                    )}
                </select>
                <h5 className="m-3">Select duration: </h5>
                <select className="form-select" 
                        aria-label="Default select example"
                        onChange={handleDurationChange}>
                        <option selected>Open this select menu</option>
                    {durs.map((dur, i) =>
                        <option key={i}>{dur}</option>
                    )}
                </select>
                <button onClick={handleClick}
                    type="submit"
                    className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
    )
}

export default Add

