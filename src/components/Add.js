import axios from 'axios'
import { useState } from 'react'

const Add = () => {

    const [ input, setInput ] = useState({
        username: '',
        description: '',
        duration: ''
    })

    const handleChange = event => {
        const { name, value } = event.target
        console.log(`user is typing ${value} in ${name} field`)
        const newInput = {
            ...input,
            [name]: value
        }
        setInput(newInput)
    }

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

    return(
        <div>
            <h1>Add</h1>
            <form>
                <div className="form-group">
                    <h5>Username:</h5>
                    <input onChange={handleChange} name="username" value={input.username} className="form-control"></input>
                </div>
                <div className="form-group">
                    <h5>Exercise:</h5>
                    <input onChange={handleChange} name="description" value={input.description} className="form-control"></input>
                </div>
                <div className="form-group">
                    <h5>Duration:</h5>
                    <input onChange={handleChange} name="duration" value={input.duration} className="form-control"></input>
                </div>
                <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Add

