import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'
import Stats from './components/Stats'
import Home from './components/Home'
import Users from './components/Users'

const App = () => {
  
    return (
        <Router>
        <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/users" element={<Users />} />

                <Route path="/add" element={<Add />} />

                <Route path="/stats" element={<Stats />} />

            </Routes>
        </Router>
    )
}

export default App
