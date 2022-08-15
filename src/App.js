import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'
import Exercises from './components/Exercises'
import Home from './components/Home'

const App = () => {
    //navbar
    //users
    //exercises

    console.log('front end is running')

    return (
        <Router>
        <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/exercises" element={<Exercises />} />

                <Route path="/add" element={<Add />} />

            </Routes>
        </Router>
    )
}

export default App
